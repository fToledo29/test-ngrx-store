import { Action } from '@ngrx/store';
import { AllUserData } from "../../../shared/to/all-user-data";

export const LOADERS_USER_THREADS_ACTION = 'LOADERS_USER_THREADS_ACTION';

export class LoadUserThreadsAction implements Action {

    readonly type = LOADERS_USER_THREADS_ACTION;

    constructor(public payload?: AllUserData){

    }
}