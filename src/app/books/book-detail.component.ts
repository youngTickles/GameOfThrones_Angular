import { Component, OnInit } from '@angular/core';
import { dictionaryService } from '../services/dictionary.service';
import {Observable} from 'rxjs';
import {RootObject} from '../models/book'

import 'hammerjs';


@Component({
  selector: 'my-app',
  templateUrl: '../books/book-detail.component.html',
  styleUrls: [ '../books/book-detail.component.css' ]
})
export class BookDetailComponent  {

 private rootobjects: RootObject[] = [];
 private rootobjectsObservable: Observable<any[]>;

 private rootobjectsObservableSearch: Observable<any[]>;

 private isDetails: boolean = false;

 selectedBook: RootObject;

 public books: any[] = [];


  constructor(private _dictionaryService: dictionaryService){

   this.getBooks();
    
  
  }

  ngOnInit(){
    console.log(this._dictionaryService.getSearchBook("A Game Of Thrones"))
  }



  getSearchBook(val: string){
      this.rootobjectsObservableSearch = this._dictionaryService.getSearchBook(val);
    
  }

  async getBooks(){
      for(let i=1; i<2; i++){
        const list: any[] = await this._dictionaryService.getBooks(i).toPromise();
        list.forEach(item => this.books.push(item));
      }
  }

  getBook(book: RootObject){
    this.isDetails = true;
    this.selectedBook = book;
    //console.log("xxx")
  }

  goBack(){
    this.isDetails = false;
    this.selectedBook = null;
  }

 
}

