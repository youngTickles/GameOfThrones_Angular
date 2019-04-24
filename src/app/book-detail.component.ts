import { Component, OnInit } from '@angular/core';
import { dictionaryService } from './dictionary.service';
import {Observable} from 'rxjs';
import {RootObject} from './book'


@Component({
  selector: 'my-app',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.css' ]
})
export class BookDetailComponent  {

 private rootobjects: RootObject[] = [];
 private rootobjectsObservable: Observable<any[]>;

 private rootobjectsObservableSearch: Observable<any[]>;





  constructor(private _dictionaryService: dictionaryService){


    this.rootobjectsObservable = this._dictionaryService.getBooks();
    
  
  }

  ngOnInit(){
    console.log(this._dictionaryService.getSearchBook("A Game Of Thrones"))
  }

  getSearchBook(val: string){
      this.rootobjectsObservableSearch = this._dictionaryService.getSearchBook(val);
    
  }

 
}

