import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mes-produit-details',
  templateUrl: './mes-produit-details.component.html',
  styleUrls: ['./mes-produit-details.component.css']
})
export class MesProduitDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('home/(contentOutlet:mes-produits)');
  }

  gotoObjectif() {
    this.router.navigateByUrl('home/(contentOutlet:mes-produit-objectif)');
  }

}
