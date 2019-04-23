import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-rachat-graphe2',
  templateUrl: './rachat-graphe2.component.html',
  styleUrls: ['./rachat-graphe2.component.css']
})
export class RachatGraphe2Component implements OnInit {

  private oCapitalValue : string;
  private capitalValue : string;
  private oMontant: string = '0.0';
  private montant: string = '0.0';
  private oRenteViagere: string = '0.0';
  private renteViagere: string = '0.0';
  private oRenteFinanciere: string = '0.0';
  private renteFinanciere: string = '0.0';
  private pourcentageMontant: number;
  private pourcentageViagere: number;
  private pourcentageFinancier: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.oCapitalValue= this.route.snapshot.paramMap.get('value');
    this.capitalValue = this.oCapitalValue.replace(/ /g, "").toString();
  }
  goToRachatGraphe3(){
    this.calculPourcentage();
    this.router.navigateByUrl(`home/(contentOutlet:rachatGraphe3/${this.capitalValue}/${this.montant}/${this.pourcentageMontant}/${this.pourcentageViagere}/${this.pourcentageFinancier})`);
  }
  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }

  returnToRachatGraphe1(){
    this.router.navigateByUrl(`home/(contentOutlet:rachatGraphe1/${this.capitalValue})`);
  }
  calculPourcentage(){
    this.pourcentageMontant = Number(this.montant) * 100 / Number(this.capitalValue);
    this.pourcentageViagere = Number(this.renteViagere) * 100 / Number(this.capitalValue);
    this.pourcentageFinancier = Number(this.renteFinanciere) * 100 / Number(this.capitalValue);
  }

  isMontantValid(){
    if(Number(this.capitalValue) - Number(this.montant) < 0){
      return false;
    }
    return true;
  }
  isRenteViagereValid(){
    if((Number(this.capitalValue) - Number(this.montant)) - Number(this.renteViagere) < 0){
      return false;
    }
    return true;
  }
  isRenteFinanciereValid(){
    this.calculPourcentage();
    if((Number(this.capitalValue) - Number(this.montant)) - (Number(this.renteViagere)+ Number(this.renteFinanciere)) < 0){
      return false;
    }
    return true;
  }
  isRenteViagereGiven(){
    if(this.renteViagere !== '0.0'){
      return true;
    }
    return false;
  }
  isRenteFinanciereGiven(){
    if(this.renteFinanciere !== '0.0'){
      return true;
    }
    return false;
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

  formatMontant(value) {
    this.oMontant = this.formatAmount(value.target.value);
    if(this.oMontant)
      this.montant = this.oMontant.replace(/ /g,"");
  }

  formatRenteViagere(value) {
    this.oRenteViagere = this.formatAmount(value.target.value);
    if(this.oRenteViagere)
      this.renteViagere = this.oRenteViagere.replace(/ /g,"");
  }

  formatRenteFinanciere(value) {
    this.oRenteFinanciere = this.formatAmount(value.target.value);
    if(this.oRenteFinanciere)
      this.renteFinanciere = this.oRenteFinanciere.replace(/ /g,"");
  }
}
