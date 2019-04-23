import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-rachat2',
  templateUrl: './rachat2.component.html',
  styleUrls: ['./rachat2.component.css']
})
export class Rachat2Component implements OnInit {
  capitalValue = "0.0";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToRachatGraphe1(){
    this.router.navigateByUrl(`home/(contentOutlet:rachatGraphe1/${this.capitalValue})`);
  }
  goToDispositif(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }
  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:rachat1)');
  }
  goToVerser(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }
  formatAmount(value) {
    let temp;
    let newTemp = [];
    value = value.target.value.replace(/ /g,"");
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
      this.capitalValue = newTemp.reverse().toString().replace(/\,/g,"");
      if(rightValue != undefined) {
        this.capitalValue = this.capitalValue + "." + rightValue;
      }
    }
  }
}
