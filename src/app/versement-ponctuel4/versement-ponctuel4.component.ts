import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-versement-ponctuel4',
  templateUrl: './versement-ponctuel4.component.html',
  styleUrls: ['./versement-ponctuel4.component.css']
})
export class VersementPonctuel4Component implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  returnToVersementPonctuel3(){
    this.router.navigateByUrl(`home/(contentOutlet:versementPonctuel3/${this.route.snapshot.paramMap.get("montantValue")}))`);
  }
  goToVersementPonctuel5(){
    this.router.navigateByUrl(`home/(contentOutlet:versementPonctuel5/${this.route.snapshot.paramMap.get("montantValue")}))`);
  }
  goBack() {
    this.router.navigateByUrl(`home/(contentOutlet:versementPonctuel3/${this.route.snapshot.paramMap.get("montantValue")}))`);
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
