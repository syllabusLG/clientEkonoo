import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToRachat(){
    this.router.navigateByUrl('home/(contentOutlet:rachat1)');
  }
  goToEpargneMenu(){
    this.router.navigateByUrl('home/(contentOutlet:epargneMenu)');
  }
  goToContact(){
    this.router.navigateByUrl('home/(contentOutlet:contact)');
  }
  goToFiscalite(){
    this.router.navigateByUrl('home/(contentOutlet:fiscalite1)');
  }
  gotoMesProduits() {
    this.router.navigateByUrl('home/(contentOutlet:mes-produits)');
  }

}
