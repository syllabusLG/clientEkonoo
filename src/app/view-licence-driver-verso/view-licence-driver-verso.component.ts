import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-licence-driver-verso',
  templateUrl: './view-licence-driver-verso.component.html',
  styleUrls: ['./view-licence-driver-verso.component.css']
})
export class ViewLicenceDriverVersoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  returnToTakePictureVerso(){
    this.router.navigateByUrl('home/(contentOutlet:takePictureVerso)');
  }

  goToTakePictureVerso(){
    this.router.navigateByUrl('home/(contentOutlet:takePictureVerso)');
  }
  goToTakeSelfie(){
    this.router.navigateByUrl('home/(contentOutlet:takeSelfie)');
  }

}
