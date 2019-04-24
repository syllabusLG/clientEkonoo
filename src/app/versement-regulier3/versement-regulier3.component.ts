import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-versement-regulier3',
  templateUrl: './versement-regulier3.component.html',
  styleUrls: ['./versement-regulier3.component.css']
})
export class VersementRegulier3Component implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }
  returnToVersementRegulier2(){
    this.router.navigateByUrl(`home/(contentOutlet:versementRegulier2/${this.route.snapshot.paramMap.get("montantValue")})`);
  }
  goToVersementRegulier4(){
    this.router.navigateByUrl(`home/(contentOutlet:versementRegulier4/${this.route.snapshot.paramMap.get("montantValue")})`);
  }
  goToVersementRegulierPre(){
    this.router.navigateByUrl(`home/(contentOutlet:versementRegulierPre/${this.route.snapshot.paramMap.get("montantValue")})`);
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
