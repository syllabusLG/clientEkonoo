import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-versement-regulier-pre',
  templateUrl: './versement-regulier-pre.component.html',
  styleUrls: ['./versement-regulier-pre.component.css']
})
export class VersementRegulierPreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToVersementRegulier3(){
    this.router.navigateByUrl('home/(contentOutlet:versementRegulier3)');
  }
  goToVersementRegulier5(){
    this.router.navigateByUrl('home/(contentOutlet:versementRegulier5)');
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
