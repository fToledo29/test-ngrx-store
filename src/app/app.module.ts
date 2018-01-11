import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, Action } from '@ngrx/store';
import * as _ from 'lodash';

import { AppComponent } from './app.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import {ThreadsService} from "./services/threads.service";
import { INITIAL_APPLICATION_STATE, ApplicationState } from 'app/store/application-state';
import { LOADERS_USER_THREADS_ACTION, LoadUserThreadsAction } from 'app/store/actions';


export function storeReducer (state: ApplicationState, action: Action): ApplicationState {
  switch(action.type){
    case LOADERS_USER_THREADS_ACTION:
      return handledLoadedUserThreadsAction(state, action);
    default: 
      return state
  }
}

function handledLoadedUserThreadsAction(state: ApplicationState, action: LoadUserThreadsAction): ApplicationState{
  const userData = action.payload;
  const newState: ApplicationState = Object.assign({}, state);
  newState.storeDate = {
    participants: _.keyBy( action.payload.participants, 'id'),
    messages: _.keyBy( action.payload.messages, 'id'),
    threads: _.keyBy( action.payload.threads, 'id'),
  }
  return newState;
}

@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({reducer: storeReducer})
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
