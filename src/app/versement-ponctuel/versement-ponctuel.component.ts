import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-versement-ponctuel',
  templateUrl: './versement-ponctuel.component.html',
  styleUrls: ['./versement-ponctuel.component.css']
})
export class VersementPonctuelComponent implements OnInit {
  private montantValue : string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  returnToVerser() {
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }

  goToVersementPonctuel2() {
    this.router.navigateByUrl(`home/(contentOutlet:versementPonctuel2/${this.montantValue})`);
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
  formatMontant(event) {
    this.montantValue = this.formatAmount(event.target.value);
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
