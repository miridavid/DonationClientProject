import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Donation } from 'src/app/models/Donation';
import { DonationsApiService } from 'src/app/services/donations-api.service';
import { DonationsStoreService } from 'src/app/services/donations-store.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {
@Input()donation:Donation;
@Input()enableEdit:boolean=false;
@Output()onSave=new EventEmitter<Donation>();
currencyTypes:string[] | undefined
foreignPoliticalEntityTypes:string[] | undefined

  donationFormGroup:FormGroup;
  constructor(private formBuilder:FormBuilder,private donationsStoreService:DonationsStoreService) {
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
    this.donationFormGroup.patchValue(this.donation)
    this.donationFormGroup.disable()
  }
    ngOnChanges(changes: SimpleChanges) {
    if(changes.enableEdit.currentValue==true){
      this.donationFormGroup.enable()
    }
    }

  save(){
    if(this.donationFormGroup.valid) {
      this.onSave.emit(this.donation)
    }
 
}

}
