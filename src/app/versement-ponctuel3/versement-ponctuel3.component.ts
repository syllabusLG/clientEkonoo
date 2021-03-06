import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-versement-ponctuel3',
  templateUrl: './versement-ponctuel3.component.html',
  styleUrls: ['./versement-ponctuel3.component.css']
})
export class VersementPonctuel3Component implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }
  returnToVersementPonctuel2(){
    this.router.navigateByUrl(`home/(contentOutlet:versementPonctuel2/${this.route.snapshot.paramMap.get("montantValue")})`);
  }
  goToVersementPonctuel4(){
    this.router.navigateByUrl(`home/(contentOutlet:versementPonctuel4/${this.route.snapshot.paramMap.get("montantValue")})`);
  }
  goToVersementPonctuelCarte(){
    this.router.navigateByUrl(`home/(contentOutlet:versementPonctuelCarte/${this.route.snapshot.paramMap.get("montantValue")}))`);
  }
  goBack() {
    this.router.navigateByUrl(`home/(contentOutlet:versementPonctuel2/${this.route.snapshot.paramMap.get("montantValue")}))`);
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
