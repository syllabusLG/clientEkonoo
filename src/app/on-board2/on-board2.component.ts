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

}
