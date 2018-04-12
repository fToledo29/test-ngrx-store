
import { AllUserData } from '../../../shared/to/all-user-data';
import { Action } from './action.interface';

export const LOADERS_USER_THREADS_ACTION = 'LOADERS_USER_THREADS_ACTION';
export const USER_THREADS_LOADED_ACTION = 'USER_THREADS_LOADED_ACTION';
export const THREAD_SELECTED_ACTION = 'THREAD_SELECTED_ACTION';
export const SELECT_USER_ACTION = 'SELECT_USER_ACTION';

export class LoadUserThreadsAction implements Action {

    readonly type = LOADERS_USER_THREADS_ACTION;

    constructor(public payload: AllUserData) {

    }
}

export class SelectUserAction implements Action {
    readonly type = SELECT_USER_ACTION;

    constructor(public payload?: number) {
    }
}
