import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-versement-ponctuel2',
  templateUrl: './versement-ponctuel2.component.html',
  styleUrls: ['./versement-ponctuel2.component.css']
})
export class VersementPonctuel2Component implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  returnToVersementPonctuel1(){
    this.router.navigateByUrl('home/(contentOutlet:versementPonctuel1)');
  }
  goToVersementPonctuel3(){
    this.router.navigateByUrl(`home/(contentOutlet:versementPonctuel3/${this.route.snapshot.paramMap.get("montantValue")})`);
  }
  goBack() {
    this.router.navigateByUrl(`home/(contentOutlet:versementPonctuel1`);
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
