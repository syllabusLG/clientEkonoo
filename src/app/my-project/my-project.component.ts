import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css']
})
export class MyProjectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToRisques(){
    this.router.navigateByUrl('home/(contentOutlet:risques)');
  }

  goToSuiteProjet(){
    this.router.navigateByUrl('home/(contentOutlet:myProjectSuite)');
  }
}
