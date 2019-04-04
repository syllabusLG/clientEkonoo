import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Adresse} from '../adresse/adresse.component';

@Component({
  selector: 'app-aversion-risque4',
  templateUrl: './aversion-risque4.component.html',
  styleUrls: ['./aversion-risque4.component.css']
})
export class AversionRisque4Component implements OnInit {

  position: string = '25%';
  myControl = new FormControl();
  options: Adresse[] = [
    {name: '1%'},
    {name: '2%'},
    {name: '3%'},
    {name: '4%'},
    {name: '5%'},
    {name: '6%'},
    {name: '7%'},
    {name: '8%'},
    {name: '9%'},
    {name: '10%'},
    {name: '11%'},
    {name: '12%'},
    {name: '13%'},
    {name: '14%'},
    {name: '15%'},
    {name: '16%'},
    {name: '17%'},
    {name: '18%'},
    {name: '19%'},
    {name: '20%'},
    {name: '21%'},
    {name: '22%'},
    {name: '23%'},
    {name: '24%'},
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
  returnToAversionRisque3(){
    this.router.navigateByUrl('home/(contentOutlet:aversionRisque3)');
  }
  goToRisques(){
    this.router.navigateByUrl('home/(contentOutlet:risques)');
  }

}
