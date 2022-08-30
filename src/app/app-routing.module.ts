import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationsListComponent } from './components/donations-list/donations-list.component';

const routes: Routes = [
  {
    path:'donationsList',component:DonationsListComponent
  },
  {
    path:'**',redirectTo:'donationsList'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
