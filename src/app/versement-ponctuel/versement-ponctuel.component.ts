import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-versement-ponctuel',
  templateUrl: './versement-ponctuel.component.html',
  styleUrls: ['./versement-ponctuel.component.css']
})
export class VersementPonctuelComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  returnToVerser() {
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }

  goToVersementPonctuel2() {
    this.router.navigateByUrl('home/(contentOutlet:versementPonctuel2)');
  }

  goToLister() {
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }

  goToRachat() {
    this.router.navigateByUrl('home/(contentOutlet:rachat1)');
  }

  goToDispositif() {
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }
}
