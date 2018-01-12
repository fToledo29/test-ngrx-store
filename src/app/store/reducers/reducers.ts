import { ActionReducerMap } from "@ngrx/store";
import { ApplicationState } from "app/store/application-state";
import { INITIAL_STORE_DATA } from "app/store/store-data";
import { uiStateReducer } from "app/store/reducers/ui-state-reducer";
import { storeDataReducer } from "app/store/reducers/store-data-reducer";




export const reducers: ActionReducerMap<ApplicationState> = {
    uiState: uiStateReducer,
    storeData: storeDataReducer
  };