import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-payment-regulier',
  templateUrl: './payment-regulier.component.html',
  styleUrls: ['./payment-regulier.component.css']
})
export class PaymentRegulierComponent implements OnInit {

  amount = "0.0";
  paymentType = "";

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.amount = this.route.snapshot.paramMap.get("montantValue");
    this.paymentType = this.route.snapshot.paramMap.get("paymentType");
  }

  goToVersementRegulier() {
    this.router.navigateByUrl(`home/(contentOutlet:versementRegulier1`);
  }
  goToVersementRegulier5() {
    this.router.navigateByUrl(`home/(contentOutlet:versementRegulier5/${this.amount}`);
  }

  goToLister() {
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }

  goToRachat() {
    this.router.navigateByUrl('home/(contentOutlet:rachat1)');
  }

  goToDispositif() {
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }
  goBack() {
    this.router.navigateByUrl(`home/(contentOutlet:versementRegulier4/${this.amount}`);
  }
  formatAmount (value) : string {
    let result;
    let temp;
    let newTemp = [];
    value = value.replace(/ /g,"");
    let leftValue = value.split(".")[0];
    let rightValue = value.split(".")[1];
    if (leftValue.length > 2) {
      temp = leftValue.toString().split("").reverse();
      for(let i in temp) {
        if(+i % 3 == 0 && leftValue.length != +i) {
          newTemp.push(" ");
        }
        newTemp.push(temp[i]);
        if(newTemp[0] == " ") {
          newTemp = newTemp.slice(1, newTemp.length);
        }
      }
      result = newTemp.reverse().toString().replace(/\,/g,"");
      if(rightValue != undefined) {
        result = result + "." + rightValue;
      }

      return result;
    } else
      return value;
  }

}
