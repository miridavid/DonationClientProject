import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable } from 'rxjs';
import {  tap } from 'rxjs/operators';
import { Donation } from '../models/Donation';
import { DonationsApiService } from './donations-api.service';

@Injectable({
  providedIn: 'root'
})
export class DonationsStoreService {
 //donationsList$: Observable<Donation[]>;
 private donationsListSubject = new BehaviorSubject<Donation[]>([]);

 get donationsList$() {
  return this.donationsListSubject.asObservable();
}
constructor(private donationsApiService:DonationsApiService) { }

addNewDonation(donation: Donation) {
    return this.donationsApiService.addDonation(donation).pipe(tap(() => this.loadAllProducts()))
}  

loadAllProducts() {
  this.getDonationsList().subscribe(donations => {
    this.donationsListSubject.next(donations);
  });
}
private getDonationsList(): Observable<Donation[]> {
  return this.donationsApiService.getDonationsList();
} 
  
putDonation(donation:Donation){}
}
