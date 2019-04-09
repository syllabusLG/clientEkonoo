import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToConnaissance(){
    this.router.navigateByUrl('home/(contentOutlet:connaissance)');
  }

  returnToMyProjectSuite(){
    this.router.navigateByUrl('home/(contentOutlet:myProjectSuite)');
  }

}
