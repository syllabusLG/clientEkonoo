import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-aversion-risque3',
  templateUrl: './aversion-risque3.component.html',
  styleUrls: ['./aversion-risque3.component.css']
})
export class AversionRisque3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToAversionRisque2(){
    this.router.navigateByUrl('home/(contentOutlet:aversionRisque2)');
  }
  goToAversionRisque4(){
    this.router.navigateByUrl('home/(contentOutlet:aversionRisque4)');
  }

}
