import { Component, OnInit } from '@angular/core';
import { ApiMockService } from  './services/api-mock.service';
import { Assassin } from './utils/table-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  dataList: Array<Assassin>;
  constructor(private api: ApiMockService) {}
  ngOnInit() {
    this.dataList = this.api.getData;
  }
}
