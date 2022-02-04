import { map } from 'rxjs/operators'
import { BlotterService } from '../generated/TradingGateway'

export const tradesStream$ = BlotterService.getTradeStream().pipe(
  // withConnection(),
  map(({ updates }) => updates.map(update => ({
      ...update,
      tradeId: update.tradeId.toString()
  })))
)
