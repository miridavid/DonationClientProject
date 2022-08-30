import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Donation } from 'src/app/models/Donation';
import { DonationsStoreService } from 'src/app/services/donations-store.service';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.scss']
})
export class AddDonationComponent implements OnInit {
 donation:Donation;
  donationFormGroup:FormGroup;
  currencyTypes:string[] | undefined
  foreignPoliticalEntityTypes:string[] | undefined
  constructor(private formBuilder:FormBuilder,private donationStoreService:DonationsStoreService) {
    this.donationFormGroup = this.formBuilder.group({
      foreignPoliticalEntityName: [null, [Validators.required,Validators.pattern('^[a-zA-Z\u0590-\u05FF\u200f\u200e ]+$')]],
      donationAmount : [null, [Validators.required,Validators.pattern('/^([0-9]+\.?[0-9]*|\.[0-9]+)$/')]],
      foreignPoliticalEntityType: [null, [Validators.required]],
      DonationDesignation: [null, [Validators.required]],
      donationConditions: [null, []],
      currencyType: [null, [Validators.required]],
      conversionRate: [null, [Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  save(){
    if(this.donationFormGroup.valid) {
    this.donation=this.donationFormGroup.value;
    this.donationStoreService.addNewDonation(this.donation)
//לעדכן את הרשימה בסרוויס 
    }
 
}
}
