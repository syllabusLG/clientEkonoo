import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {Router} from '@angular/router';

@Component({
  selector: 'app-epargne-menu',
  templateUrl: './epargne-menu.component.html',
  styleUrls: ['./epargne-menu.component.scss']
})
export class EpargneMenuComponent {

  PieChart=[];

  constructor(private router: Router) {

  }

  doNothing() {
    
  }

  gotoDispositifs() {
    this.router.navigateByUrl('home/(contentOutlet:dispositifs)');
  }

  
  goToEpargneRetraiteCollectif(){
    this.router.navigateByUrl('home/(contentOutlet:epargneRetraiteCol)');
  }
  goToEpargneEntreprise(){
    this.router.navigateByUrl('home/(contentOutlet:epargneEntreprise)');
  }
  goToEpargneRetraiteIndividuel(){
    this.router.navigateByUrl('home/(contentOutlet:epargneRetraiteInd)');
  }
  goToEpargneIndividuel(){
    this.router.navigateByUrl('home/(contentOutlet:epargneIndividuel)');
  }


}
