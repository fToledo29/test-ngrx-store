import { UiState } from 'app/store/ui-state';
import { THREAD_SELECTED_ACTION, SELECT_USER_ACTION, SelectUserAction } from '../actions';
import { Action } from '../action.interface';
import { ReturnStatement } from '@angular/compiler';

export function uiStateReducer(state: UiState, action: Action): UiState {
    switch (action.type) {
        case THREAD_SELECTED_ACTION:

            const newState = Object.assign({}, state);

            newState.currentThreadId = action.payload;

            return newState
        // case SELECT_USER_ACTION:
        //     return handleSelectUserAction(state, action );

    }
     return state;
}

function handleSelectUserAction(state: UiState, action: SelectUserAction) {
}
