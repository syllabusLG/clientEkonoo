import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-versement-regulier-pre',
  templateUrl: './versement-regulier-pre.component.html',
  styleUrls: ['./versement-regulier-pre.component.css']
})
export class VersementRegulierPreComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  returnToVersementRegulier3(){
    this.router.navigateByUrl(`home/(contentOutlet:versementRegulier3/${this.route.snapshot.paramMap.get("montantValue")})`);
  }
  goToVersementRegulier5(){
    this.router.navigateByUrl(`home/(contentOutlet:versementRegulier5/${this.route.snapshot.paramMap.get("montantValue")})`);
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
