import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gotologin',
  templateUrl: './gotologin.component.html',
  styleUrls: ['./gotologin.component.css']
})
export class GotologinComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToConditionGenerale(){
    this.router.navigateByUrl('home/(contentOutlet:conditionGenerale)');
  }

  goToLancementA(){
    this.router.navigateByUrl('home/(contentOutlet:lancementA)');
  }

}
