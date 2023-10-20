import { createReducer } from '@ngrx/store';
import { maxLength, required } from 'ngrx-forms/validation';
import { FormGroupState, createFormArrayState, createFormGroupState, onNgrxForms, updateGroup, validate, wrapReducerWithFormStateUpdate } from "ngrx-forms";
import { changeMessageAction } from './app.actions';




export interface MyFormValue{
  inputString:string;
}

const FORM_ID = '[APP] FORM ID';

const initialFormState = createFormArrayState<MyFormValue>(FORM_ID, {
  inputString:'initialState',
});

const validationReducer = updateGroup<MyFormValue>({
  inputString:validate(required, maxLength(20)),
});

export interface DataInterface {
  formState:FormGroupState<MyFormValue>;
  message_container:{
    message:string;
  };
  randomStateProp:string;
}


export interface StoreInterface{
  childMessage:DataInterface;
}

const defaultState:DataInterface = {
  formState:initialFormState,
  message_container:{
    message:'I am default message',
  },
  randomStateProp:'not used anywhere yet',
}

export const appReducer = createReducer(
  defaultState,

  onNgrxForms(),

  on(changeMessageAction, (state, props) => {
    const message_container = { ...state.message_container};
    message_container.message = props.payload;
    const formState = createFormGroupState<MyFormValue>(FORM_ID, {
      inputString:'',
    });
    return{ ...state, message_container, formState};
  })
)


export const appReducerWithValidation = wrapReducerWithFormStateUpdate(
  appReducer,
  (state:DataInterface) =>{
    return state.formState;
  },
  validationReducer
);

const validationReducer = updateGroup<MyFormValue>({
  inputString:validate(required, maxLength(20)),
})
