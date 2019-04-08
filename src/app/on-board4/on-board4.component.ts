import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-board4',
  templateUrl: './on-board4.component.html',
  styleUrls: ['./on-board4.component.css']
})
export class OnBoard4Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToOnBoard5() {
    this.router.navigateByUrl("home/(contentOutlet:onBoard5)");
  }
  goToMenu(){
    this.router.navigateByUrl("home/(contentOutlet:menu)");
  }

}
