import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-project-suite',
  templateUrl: './my-project-suite.component.html',
  styleUrls: ['./my-project-suite.component.css']
})
export class MyProjectSuiteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToMyProjet(){
    this.router.navigateByUrl('home/(contentOutlet:myProject)');
  }
  goToProject(){
    this.router.navigateByUrl('home/(contentOutlet:project)');
  }

}
