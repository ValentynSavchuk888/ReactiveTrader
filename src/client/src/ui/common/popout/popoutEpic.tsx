import { Action } from 'redux'
import { combineEpics, ofType } from 'redux-observable'
import { map, tap } from 'rxjs/operators'
import { ApplicationEpic } from '../../../ApplicationEpic'
import { ACTION_TYPES as TILE_ACTIONS, SpotTileActions } from '../../spotTile/actions'
import { ACTION_TYPES as REGIONS_ACTIONS, RegionActions } from '../regions'
import { createPopout } from './createPopout'
import { getPopoutService } from './index'

const { openWindow } = RegionActions
const { undockTile, tileUndocked } = SpotTileActions
export type OpenWindowAction = ReturnType<typeof openWindow>
type UndockAction = ReturnType<typeof undockTile>

const popoutWindowEpic: ApplicationEpic = (action$, state$, { openFin }) =>
  action$.pipe(
    ofType<Action, OpenWindowAction>(REGIONS_ACTIONS.REGION_OPEN_WINDOW),
    map(action => createPopout(openFin, action, state$))
  )

const undockTileEpic: ApplicationEpic = (action$, state$, { openFin }) =>
  action$.pipe(
    ofType<Action, UndockAction>(TILE_ACTIONS.UNDOCK_TILE),
    tap(action => {
      const popoutService = getPopoutService(openFin)
      popoutService.undockPopout(action.payload)
    }),
    map(tileUndocked)
  )

export const popoutEpic = combineEpics(popoutWindowEpic, undockTileEpic)
