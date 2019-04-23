import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-rachat-graphe2',
  templateUrl: './rachat-graphe2.component.html',
  styleUrls: ['./rachat-graphe2.component.css']
})
export class RachatGraphe2Component implements OnInit {

  private capitalValue : string;
  private montant: string = '0.0';
  private renteViagere: string = '0.0';
  private renteFinanciere: string = '0.0';
  private pourcentageMontant: number;
  private pourcentageViagere: number;
  private pourcentageFinancier: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.capitalValue = this.route.snapshot.paramMap.get('value');
    console.log(this.capitalValue);
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
}
