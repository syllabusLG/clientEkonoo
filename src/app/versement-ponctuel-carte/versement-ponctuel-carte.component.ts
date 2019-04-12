import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-versement-ponctuel-carte',
  templateUrl: './versement-ponctuel-carte.component.html',
  styleUrls: ['./versement-ponctuel-carte.component.css']
})
export class VersementPonctuelCarteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToVersementPonctuel3(){
    this.router.navigateByUrl('home/(contentOutlet:versementPonctuel3)');
  }
  goToVersementPonctuel5(){
    this.router.navigateByUrl('home/(contentOutlet:versementPonctuel5)');
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
