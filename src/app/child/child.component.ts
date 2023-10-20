import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StoreInterface } from '../store/app.reducer';
import { messageSelector } from '../store/app.selector';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  message:Observable<any>;

  constructor(private store:Store<StoreInterface>){}
  ngOnInit(): void {
    this.message = this.store.select(messageSelector);
  }

}
