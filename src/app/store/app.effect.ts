import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { actionInterface, changeMessageAction, storeUpdateMessageAction } from "./app.actions";
import { StoreInterface } from './app.reducer';

export class AppEffects{
  writeMessage = createEffect(() =>
  this.action$.pipe(
    ofType(storeUpdateMessageAction),
    withLatestForm(this.store$),
    switchMap((data) =>{
      const messageData:actionInterface = data[0];
      const storeData:StoreInterface = data[1];
      localStorage.setItem('message', JSON.stringify(messageData));
      return of(changeMessageAction(messageData));
    })
   )
  );

  constructor(private actions$:Actions, private store$:Store<StoreInterface>){}
}
