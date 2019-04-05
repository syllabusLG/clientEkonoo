import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Adresse} from '../adresse/adresse.component';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rachat1',
  templateUrl: './rachat1.component.html',
  styleUrls: ['./rachat1.component.css']
})
export class Rachat1Component implements OnInit {

  position: string = 'blablablabla';
  myControl = new FormControl();
  options: Adresse[] = [
    {name: 'Partir à la retraite'},
    {name: 'blablablabla'},
    {name: 'blablablabla'},
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
  goToRachat2(){
    this.router.navigateByUrl('home/(contentOutlet:rachat2)');
  }

}
