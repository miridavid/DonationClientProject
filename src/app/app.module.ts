import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDonationComponent } from './components/add-donation/add-donation.component';
import { DonationsListComponent } from './components/donations-list/donations-list.component';
import { DonationComponent } from './components/donation/donation.component';
import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddDonationComponent,
    DonationsListComponent,
    DonationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DropdownModule,
    AccordionModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
