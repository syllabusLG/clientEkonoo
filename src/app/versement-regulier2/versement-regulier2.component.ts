import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-versement-regulier2',
  templateUrl: './versement-regulier2.component.html',
  styleUrls: ['./versement-regulier2.component.css']
})
export class VersementRegulier2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToVersementRegulier1(){
    this.router.navigateByUrl('home/(contentOutlet:versementRegulier1)');
  }
  goToVersementRegulier3(){
    this.router.navigateByUrl('home/(contentOutlet:versementRegulier3)');
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
