import { Injectable } from '@angular/core';
import { Donation } from '../models/Donation';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
//מיועד לקריאות http בלבד
export class DonationsApiService {

private readonly url="http://localhost:61654/api/Donation"

getDonationsList(){
  const result=this.http.get<Donation[]>(this.url); 
  return result;
 
}
addDonation(donation:Donation){
  const result= this.http.post<Donation>(this.url+'/AddDonation', { donation });
  return result;
}

constructor(private http:HttpClient ) { }
}

