import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'mes-produit-item',
  templateUrl: './produit-item.component.html',
  styleUrls: ['./produit-item.component.scss']
})
export class ProduitItemComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoProductDetails() {
    this.router.navigateByUrl('home/(contentOutlet:mes-produit-details)');
  }

}
