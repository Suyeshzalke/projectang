import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService,Data } from '../data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public isAvailable$ = new BehaviorSubject<boolean>(false);
  public state$: Observable<Data> | undefined;
  constructor(
    private dataService: DataService,

  ) { }

  ngOnInit(): void {
    this.state$ = this.dataService.getState();
    console.log("this.state$",this.state$);
  }

}
