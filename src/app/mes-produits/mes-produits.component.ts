import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-mes-produits',
  templateUrl: './mes-produits.component.html',
  styleUrls: ['./mes-produits.component.scss']
})
export class MesProduitsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("test");
  }

  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }

  doNothing() {

  }

  gotoDispositifs() {

  }

}
