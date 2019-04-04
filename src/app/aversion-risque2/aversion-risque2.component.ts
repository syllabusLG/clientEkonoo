import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-aversion-risque2',
  templateUrl: './aversion-risque2.component.html',
  styleUrls: ['./aversion-risque2.component.css']
})
export class AversionRisque2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToAversionRisque1(){
    this.router.navigateByUrl('home/(contentOutlet:aversionRisque1)');
  }
  goToAversionRisque3(){
    this.router.navigateByUrl('home/(contentOutlet:aversionRisque3)');
  }

}
