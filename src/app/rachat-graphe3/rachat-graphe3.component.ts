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
    this.capitalValue = this.route.snapshot.paramMap.get('capital');
    this.montant = this.route.snapshot.paramMap.get('montant');
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
}
