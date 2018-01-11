import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './utils';
import { UiState, INITIAL_UI_STATE } from "app/store/ui-state";
import { StoreData, INITIAL_STORE_DATA } from "app/store/store-data";


export interface ApplicationState {
    // routerReducer: RouterReducerState<RouterStateUrl>;
    uiState: UiState,
    storeDate: StoreData
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
    // routerReducer: undefined,
    uiState: INITIAL_UI_STATE,
    storeDate: INITIAL_STORE_DATA
}