import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-mes-produit-historique-nav',
  templateUrl: './mes-produit-historique-nav.component.html',
  styleUrls: ['./mes-produit-historique-nav.component.css']
})
export class MesProduitHistoriqueNavComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  goBack() {
    if(this.route.snapshot.paramMap.get('component') == 'mes-produit') {
      this.router.navigateByUrl('home/(contentOutlet:mes-produit-details)');
    } else {
      this.router.navigateByUrl('home/(contentOutlet:dispositif-item-details)');
    }
  }

  doNothing() { }


}
