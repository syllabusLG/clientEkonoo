import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
