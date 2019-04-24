import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-versement-ponctuel-carte',
  templateUrl: './versement-ponctuel-carte.component.html',
  styleUrls: ['./versement-ponctuel-carte.component.css']
})
export class VersementPonctuelCarteComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  returnToVersementPonctuel3(){
    this.router.navigateByUrl(`home/(contentOutlet:versementPonctuel3/${this.route.snapshot.paramMap.get("montantValue")}))`);
  }
  goToVersementPonctuel5(){
    this.router.navigateByUrl(`home/(contentOutlet:versementPonctuel5/${this.route.snapshot.paramMap.get("montantValue")}))`);
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
    this.router.navigateByUrl(`home/(contentOutlet:payment/${paymentType}/${this.route.snapshot.paramMap.get("montantValue")}))`);
  }

}
