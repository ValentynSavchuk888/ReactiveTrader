import { combineReducers } from 'redux'
import { connectionStatusReducer } from './operations/connectionStatus'
import { enviromentReducer } from './operations/environment'
import { pricingServiceReducer } from './operations/pricing'
import { currencyPairReducer } from './operations/referenceData'
import { analyticsReducer } from './ui/analytics'
import { blotterReducer } from './ui/blotter'
import { compositeStatusServiceReducer } from './ui/compositeStatus'
import { footerReducer } from './ui/footer'
import { regionsReducer } from './ui/shell/regions'
import { sidebarRegionReducer } from './ui/shell/sidebar'
import { spotTileDataReducer } from './ui/spotTile'
import { notionalsReducer } from './ui/spotTile/notional'

const rootReducer = combineReducers({
  blotterService: blotterReducer,
  currencyPairs: currencyPairReducer,
  pricingService: pricingServiceReducer,
  analyticsService: analyticsReducer,
  compositeStatusService: compositeStatusServiceReducer,
  connectionStatus: connectionStatusReducer,
  displayAnalytics: sidebarRegionReducer,
  displayStatusServices: footerReducer,
  regionsService: regionsReducer,
  notionals: notionalsReducer,
  spotTilesData: spotTileDataReducer,
  environment: enviromentReducer
})

export type GlobalState = ReturnType<typeof rootReducer>

export default rootReducer
