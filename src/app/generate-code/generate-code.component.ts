import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-generate-code',
  templateUrl: './generate-code.component.html',
  styleUrls: ['./generate-code.component.css']
})
export class GenerateCodeComponent implements OnInit {

  secureCode: number = 123445545;
  notification: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToConditionGenerale(){
    this.router.navigateByUrl('home/(contentOutlet:conditionGenerale)');
  }
  generateCode(){
    this.secureCode = 10000 * Math.floor(Math.random() * 90000);
    this.notification = true;
  }
  returnToCreateCompte(){
    this.router.navigateByUrl('home/(contentOutlet:createCompte)');
  }

}
