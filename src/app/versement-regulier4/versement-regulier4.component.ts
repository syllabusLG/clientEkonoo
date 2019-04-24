import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-versement-regulier4',
  templateUrl: './versement-regulier4.component.html',
  styleUrls: ['./versement-regulier4.component.css']
})
export class VersementRegulier4Component implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  returnToVersementRegulier3(){
    this.router.navigateByUrl(`home/(contentOutlet:versementRegulier3/${this.route.snapshot.paramMap.get("montantValue")})`);
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
  gotToPayment(paymentType:string) {
    this.router.navigateByUrl(`home/(contentOutlet:paymentRegulier/${paymentType}/${this.route.snapshot.paramMap.get("montantValue")}))`);
  }
}
