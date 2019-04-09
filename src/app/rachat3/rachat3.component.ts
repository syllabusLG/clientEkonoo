import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rachat3',
  templateUrl: './rachat3.component.html',
  styleUrls: ['./rachat3.component.css']
})
export class Rachat3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDispositif(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }
  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:menu)');
  }


}
