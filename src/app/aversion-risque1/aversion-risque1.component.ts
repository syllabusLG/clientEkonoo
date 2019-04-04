import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-aversion-risque1',
  templateUrl: './aversion-risque1.component.html',
  styleUrls: ['./aversion-risque1.component.css']
})
export class AversionRisque1Component implements OnInit {

  response = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  affiche(){
    this.response = true;
  }
  afficheFaux(){
    this.response = false;
  }
  afficheSaisPas(){
    this.response = false;
  }

  returnToMyProjetSuite(){
    this.router.navigateByUrl('home/(contentOutlet:myProjectSuite)');
  }

  goToAversionRisque2(){
    this.router.navigateByUrl('home/(contentOutlet:aversionRisque2)');
  }
}
