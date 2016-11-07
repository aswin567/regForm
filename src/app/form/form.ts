export interface Form {
    firstName: string;
    lastName: string;
    age:string;
    emailId:string;
    tel:string;
    stateId:string;
    countryId:string;
    addressId:string;
    haddress1:string;
    haddress2:string;
    caddress1:string;
    caddress2:string;
    intrest:Intrest[];
    agreesToNews:boolean;

}
export interface Intrest{
    name:string;
}
