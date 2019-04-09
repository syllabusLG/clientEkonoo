import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-risques',
  templateUrl: './risques.component.html',
  styleUrls: ['./risques.component.css']
})
export class RisquesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMyProject(){
    this.router.navigateByUrl('home/(contentOutlet:myProject)');
  }

  returnToAversionRisque(){
    this.router.navigateByUrl('home/(contentOutlet:aversionRisque4)');
  }

}
