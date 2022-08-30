export interface Donation{
    foreignPoliticalEntityName: string;
    donationAmount: string;
    foreignPoliticalEntityType:[]
    DonationDesignation: string;
    donationConditions: string; 
    CurrencyType:[],
    conversionRate:string;
}