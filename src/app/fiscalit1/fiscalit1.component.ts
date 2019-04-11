import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fiscalit1',
  templateUrl: './fiscalit1.component.html',
  styleUrls: ['./fiscalit1.component.css']
})
export class Fiscalit1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSlideFiscality(){
    this.router.navigateByUrl('home/(contentOutlet:slideFiscality)');
  }

  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }

}
