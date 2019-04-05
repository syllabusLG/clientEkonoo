import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rachat2',
  templateUrl: './rachat2.component.html',
  styleUrls: ['./rachat2.component.css']
})
export class Rachat2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToRachatGraphe1(){
    this.router.navigateByUrl('home/(contentOutlet:rachatGraphe1)');
  }

}
