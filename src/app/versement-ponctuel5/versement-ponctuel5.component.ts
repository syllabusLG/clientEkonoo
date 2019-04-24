import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-versement-ponctuel5',
  templateUrl: './versement-ponctuel5.component.html',
  styleUrls: ['./versement-ponctuel5.component.css']
})
export class VersementPonctuel5Component implements OnInit {
  private montantValue : string;

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.montantValue = this.route.snapshot.paramMap.get("montantValue");
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }
  goBack() {
    this.router.navigateByUrl(`home/(contentOutlet:versementPonctuel4/${this.route.snapshot.paramMap.get("montantValue")}))`);
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
