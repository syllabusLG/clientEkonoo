import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mes-produit-objectif',
  templateUrl: './mes-produit-objectif.component.html',
  styleUrls: ['./mes-produit-objectif.component.css']
})
export class MesProduitObjectifComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('home/(contentOutlet:mes-produit-details)');
  }

  doNothing() {

  }
}
