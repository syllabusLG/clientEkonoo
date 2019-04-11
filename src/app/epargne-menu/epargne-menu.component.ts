import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {Router} from '@angular/router';

@Component({
  selector: 'app-epargne-menu',
  templateUrl: './epargne-menu.component.html',
  styleUrls: ['./epargne-menu.component.scss']
})
export class EpargneMenuComponent {

  PieChart=[];

  constructor(private router: Router) {

  }

  doNothing() {
    
  }

  gotoDispositifs() {
    this.router.navigateByUrl('home/(contentOutlet:dispositifs)');
  }
  gotoMenu() {
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }
}
