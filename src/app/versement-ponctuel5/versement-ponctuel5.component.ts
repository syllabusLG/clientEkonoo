import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-versement-ponctuel5',
  templateUrl: './versement-ponctuel5.component.html',
  styleUrls: ['./versement-ponctuel5.component.css']
})
export class VersementPonctuel5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  returnToVersementPonctuel4(){
    this.router.navigateByUrl('home/(contentOutlet:versementPonctuel4)');
  }
  returnToVerser(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }

}
