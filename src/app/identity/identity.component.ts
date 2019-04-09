import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToAversionRisque(){
    this.router.navigateByUrl('home/(contentOutlet:aversionRisque1)');
  }
  returnToTakeSelfie(){
    this.router.navigateByUrl('home/(contentOutlet:takeSelfie)');
  }

}
