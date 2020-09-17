import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SeattleComponent } from './seattle/seattle.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { WashingtonDCComponent } from './washington-dc/washington-dc.component';
import { ChicagoComponent } from './chicago/chicago.component'

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    DallasComponent,
    SanJoseComponent,
    BurbankComponent,
    WashingtonDCComponent,
    ChicagoComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
