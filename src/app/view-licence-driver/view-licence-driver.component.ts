import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-licence-driver',
  templateUrl: './view-licence-driver.component.html',
  styleUrls: ['./view-licence-driver.component.css']
})
export class ViewLicenceDriverComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToTakePicture(){
    this.router.navigateByUrl('home/(contentOutlet:takePicture)');
  }

  goToTakePhotoVerso(){
    this.router.navigateByUrl('home/(contentOutlet:takePictureVerso)');
  }

  goToTakePhoto(){
    this.router.navigateByUrl('home/(contentOutlet:takePicture)');
  }

}
