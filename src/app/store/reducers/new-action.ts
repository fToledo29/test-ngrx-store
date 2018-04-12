import { Action } from '@ngrx/store';

export interface ActionWithPayloadInterface extends Action {
    payload: any;
}
