import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-board2',
  templateUrl: './on-board2.component.html',
  styleUrls: ['./on-board2.component.css']
})
export class OnBoard2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToOnBoard3() {
    this.router.navigateByUrl("home/(contentOutlet:onBoard3)");
  }
  goToMenu(){
    this.router.navigateByUrl("home/(contentOutlet:menu2)");
  }
  goToVersement(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }
  goToImporter(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }


}
