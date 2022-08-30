import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Donation } from 'src/app/models/Donation';
import { DonationsStoreService } from 'src/app/services/donations-store.service';

@Component({
  selector: 'app-donations-list',
  templateUrl: './donations-list.component.html',
  styleUrls: ['./donations-list.component.scss']
})
export class DonationsListComponent implements OnInit {
  editFlag:boolean=false;
  donationList$:Observable<Donation[]> | undefined
  displayAddDonation: boolean = false;

  constructor(private donationsStoreService:DonationsStoreService) { }

  ngOnInit(): void {
  this.donationList$=this.donationsStoreService.donationsList$;
  }

  enableEdit(){
    this.editFlag=true;
  }
  onSave(donation:Donation){
    this.donationsStoreService.putDonation(donation);

  }
  openAddDonation(){
this.displayAddDonation=true;
  }
}
