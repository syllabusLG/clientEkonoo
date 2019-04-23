import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Adresse} from '../adresse/adresse.component';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dispositif2',
  templateUrl: './dispositif2.component.html',
  styleUrls: ['./dispositif2.component.css']
})
export class Dispositif2Component implements OnInit {

  position: string = 'Madelin';
  myControl = new FormControl();
  options: Adresse[] = [
    {name: 'Perco'},
    {name: 'PERP'},
    {name: 'Art.83'},
    {name: this.position}
  ];
  filteredOptions: Observable<Adresse[]>;

  myFilter(){
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Adresse>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }
  displayFn(adresse?: Adresse): string | undefined{
    return adresse ? adresse.name : undefined;
  }
  private _filter(name: string): Adresse[]{
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  constructor(private router: Router) { }

  ngOnInit() {
    this.myFilter();
  }
  goToDispositif3(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif3)');
  }
  goToLister(){
    this.router.navigateByUrl('home/(contentOutlet:lister)');
  }
  goToRachat(){
    this.router.navigateByUrl('home/(contentOutlet:rachat1)');
  }
  returnToMenu(){
    this.router.navigateByUrl('home/(contentOutlet:dispositif1)');
  }
  goToVerser(){
    this.router.navigateByUrl('home/(contentOutlet:verser)');
  }

}
