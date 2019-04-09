import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispositif-details',
  templateUrl: './dispositif-details.component.html',
  styleUrls: ['./dispositif-details.component.scss']
})
export class DispositifDetailsComponent implements OnInit {
  red : string = "red";
  green : string = "#4fd7b9";
  details1 : any[] = ["3 500,00 €", "Code ISIN :", "FR0010270033", "Libellé fonds 1", "-500,00 €", "Horizon :", "8 ans", "Risque :", "5/7"];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoDispositifs() {
    this.router.navigateByUrl('home/(contentOutlet:dispositifs)');
  }

  goBack() {
    this.router.navigateByUrl('home/(contentOutlet:epargneMenu)');
  }

  doNothing() {}

  gotoSynthese() {
    this.router.navigateByUrl('home/(contentOutlet:epargneMenu)');
  }

}