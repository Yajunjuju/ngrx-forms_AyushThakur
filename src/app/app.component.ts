import { FormValue } from './app.reducer';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroupState } from 'ngrx-forms';
import { MyFormValue, StoreInterface } from './store/app.reducer';
import { Store } from '@ngrx/store';
import { changeMessageAction, storeUpdateMessageAction } from './store/app.actions';
import { formSelector } from './store/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formState$ : Observable<FormGroupState<MyFormValue>>;
  msg = null;

  constructor(private store:Store<StoreInterface>){}

  ngOnInit(): void {
    this.formState$ = this.store.select(formSelector);
    this.formState$.subscribe((formValue) =>{
      this.msg = formValue.controls.inputString.value;
    })
  }

  changeMessage(){
    this.store.dispatch(
      storeUpdateMessageAction({
        payload:this.msg ? this.msg : 'Default Message',
      })
    )
  }
}
