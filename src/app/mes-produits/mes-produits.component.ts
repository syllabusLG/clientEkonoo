import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-mes-produits',
  templateUrl: './mes-produits.component.html',
  styleUrls: ['./mes-produits.component.scss']
})
export class MesProduitsComponent {

  constructor(private router: Router) { }

  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }

  doNothing() { }

  gotoSettings() {
    this.router.navigateByUrl('home/(contentOutlet:mes-produit-setting)');
  }

}
