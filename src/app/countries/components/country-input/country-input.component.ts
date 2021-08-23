import {  Component, EventEmitter, Output, OnInit } from '@angular/core';
import {  Subject } from 'rxjs';
import {  debounceTime  } from 'rxjs/operators'


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {
  
  @Output() onDebounce  : EventEmitter<string>= new EventEmitter();
  @Output() onEnter     : EventEmitter<string>= new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string= '';

  
  find(){
    this.onEnter.emit(this.termino);
  }
  pressKey(){
   this.debouncer.next(this.termino);
  }
  constructor() { }
  ngOnInit(): void {
    this.debouncer
        .pipe(debounceTime(300))
        .subscribe( value=>{
       this.onDebounce.emit(value);
    });
  }

 
}
