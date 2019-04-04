import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-compte',
  templateUrl: './create-compte.component.html',
  styleUrls: ['./create-compte.component.css']
})
export class CreateCompteComponent implements OnInit {
  numTel = '+33';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToGenerateCode(){
    this.router.navigateByUrl('home/(contentOutlet:generateCode)');
  }
}
