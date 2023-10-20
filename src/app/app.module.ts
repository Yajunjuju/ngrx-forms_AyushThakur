import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgrxFormsModule } from 'ngrx-forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.reducer';
import { ChildComponent } from './child/child.component';
import { AppEffects } from './store/app.effect';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({childMessage:appReducer}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument(),
    NgrxFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
