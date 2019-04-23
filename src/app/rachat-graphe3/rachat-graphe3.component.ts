import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-rachat-graphe3',
  templateUrl: './rachat-graphe3.component.html',
  styleUrls: ['./rachat-graphe3.component.css']
})
export class RachatGraphe3Component implements OnInit {

  private capitalValue : string;
  private montant: string;
  private pourcentageMontant: string;

  private pourcentageViagere: string;
  private pourcentageFinancier: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.capitalValue = this.formatAmount(this.route.snapshot.paramMap.get('capital'));
    this.montant = this.formatAmount(this.route.snapshot.paramMap.get('montant'));
    this.pourcentageMontant = this.route.snapshot.paramMap.get('pourcentageMontant')+'%';
    this.pourcentageViagere = this.route.snapshot.paramMap.get('pourcentageViagere')+'%';
    this.pourcentageFinancier = this.route.snapshot.paramMap.get('pourcentageFinanciere')+'%';
  }
  goToRachat3(){
    this.router.navigateByUrl(`home/(contentOutlet:rachat3/${this.capitalValue})`);
  }
  goToDispositif(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }
  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }
  returnToMenu(){
    this.router.navigateByUrl(`home/(contentOutlet:rachatGraphe2/${this.capitalValue})`);
  }
  goToVerser(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
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
