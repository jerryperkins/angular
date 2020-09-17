import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { WashingtonDCComponent } from './washington-dc/washington-dc.component';
import { ChicagoComponent } from './chicago/chicago.component';


const routes: Routes = [
  {path: 'seattle', component: SeattleComponent },
  {path: '', component: DallasComponent},
  {path: 'san_jose', component: SanJoseComponent},
  {path: 'burbank', component: BurbankComponent},
  {path: 'washington_dc', component: WashingtonDCComponent},
  {path: 'chicago', component: ChicagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
