using System;
using System.Reactive.Disposables;
using System.Reactive.Subjects;
using System.Threading.Tasks;
using Adaptive.ReactiveTrader.Common;
using Common.Logging;
using WampSharp.V2;
using WampSharp.V2.Client;
using WampSharp.V2.Fluent;

namespace Adaptive.ReactiveTrader.Messaging
{
    public class BrokerConnection
    {
        protected static readonly ILog Log = LogManager.GetLogger<BrokerConnection>();

        private readonly IWampChannel _channel;

        private readonly WampChannelReconnector _reconnector;
        private readonly SerialDisposable _sessionDispose = new SerialDisposable();

        private readonly BehaviorSubject<IConnected<IBroker>> _subject =
            new BehaviorSubject<IConnected<IBroker>>(Connected.No<IBroker>());

        public IObservable<IConnected<IBroker>> GetBrokerStream()
        {
            return _subject;
        }

        public BrokerConnection(string uri, string realm)
        {
            _channel = new WampChannelFactory()
                .ConnectToRealm(realm)
                .WebSocketTransport(uri)
                .JsonSerialization()
                .Build();

            Func<Task> connect = async () =>
            {
                Log.InfoFormat("Trying to connect to broker {0}", uri);

                try
                {
                    await _channel.Open();

                    _subject.OnNext(Connected.Yes(new Broker(_channel)));
                }
                catch (Exception)
                {
                    _subject.OnNext(Connected.No<IBroker>());
                    throw;
                }
            };

            _reconnector = new WampChannelReconnector(_channel, connect);
        }

        public void Start()
        {
            _reconnector.Start();
        }

        public void Dispose()
        {
            _sessionDispose.Dispose();
            _reconnector.Dispose();
        }
    }
}