import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mes-produit-historique-nav',
  templateUrl: './mes-produit-historique-nav.component.html',
  styleUrls: ['./mes-produit-historique-nav.component.css']
})
export class MesProduitHistoriqueNavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('home/(contentOutlet:mes-produit-details)');
  }

  doNothing() { }


}
