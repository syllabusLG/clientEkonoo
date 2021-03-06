import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connaissance',
  templateUrl: './connaissance.component.html',
  styleUrls: ['./connaissance.component.css']
})
export class ConnaissanceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  returnToProject(){
    this.router.navigateByUrl('home/(contentOutlet:project)');
  }
  goToKnowledge(){
    this.router.navigateByUrl('home/(contentOutlet:knowledge)');
  }

}
