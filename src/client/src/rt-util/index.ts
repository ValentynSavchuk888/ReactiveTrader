import { ActionCreatorsMapObject } from 'redux'
import { action, ActionUnion } from './ActionHelper'
import { RequireAtLeastOne, RequireOnlyOne, Extends } from './utilityTypes'
export { action }
export { wait, getDeferredPromise } from './asyncUtils'
export { useMultiTimeout } from './hooks/useMultiTimeout'
export type ActionUnion<A extends ActionCreatorsMapObject> = ActionUnion<A>
export type Extends<T, U extends T> = Extends<T, U>
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = RequireAtLeastOne<T, Keys>
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = RequireOnlyOne<T, Keys>
