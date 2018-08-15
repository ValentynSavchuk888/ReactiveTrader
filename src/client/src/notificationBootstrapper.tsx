import React from 'react'
import ReactDOM from 'react-dom'
import { Trade } from 'rt-types'
import { Themes } from 'shell/theme'
import Theme from 'ui/theme/Theme'
import TradeNotification from './shell/notification/TradeNotification'

declare const window: any

const dismissNotification = () => window.fin.desktop.Notification.getCurrent().close()

const handleNotificationMessage = (message: Trade & { theme: Themes }) => {
  const { theme, ...tradeMessage } = message
  ReactDOM.render(
    <Theme type={theme}>
      <TradeNotification message={tradeMessage} dismissNotification={dismissNotification} />
    </Theme>,
    document.getElementById('root')
  )

  // send a message back to the main application - required to restore the main application window if it's minimised
  window.fin.desktop.Notification.getCurrent().sendMessageToApplication('ack')
}

export function run() {
  // OpenFin notifications API: need to define the global method onNotificationMessage
  window.onNotificationMessage = (message: Trade & { theme: Themes }) => handleNotificationMessage(message)
}
