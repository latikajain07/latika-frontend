import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { HttpClientModule} from '@angular/common/http';
import { SavestateComponent } from './savestate/savestate.component' ;

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    SavestateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
