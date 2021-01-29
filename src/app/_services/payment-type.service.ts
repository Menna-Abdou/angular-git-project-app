import { Injectable } from '@angular/core';
import { PaymentType } from '../_model/payment-types';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
paymentTypes:PaymentType[] = [
  {id:1, name:'Cheque Payment'},
  {id:2, name:'Paypal'},
  {id:3 ,name:'Visa'},
  {id:4 ,name:'Mastercard'},
  {id:5 ,name:'On Dilivery'},
  {id:6 ,name:'Direct Bank Transfer'}
];
    //crud operations:
    //get all
    getAllPayments():PaymentType[]{
      return this.paymentTypes.slice();
  }
 
  constructor(){}
}
