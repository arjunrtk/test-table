import  { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Assassin } from '../utils/table-data';
import { PagerService } from '../services/pager.service';
import { FilterPipe } from '../utils/filter-table.pipe';
import {
  debounceTime,
  map,
  distinctUntilChanged
} from "rxjs/operators";
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dataList: Array<Assassin>;
  searchString: string;
  pager: any = {};
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  pagedItems: any[];
  suggestions: string[];
  filterBy: string = 'type';
  constructor(
    private pagerService: PagerService,
    private filterPipe: FilterPipe
  ) { }

  ngOnInit(): void {
    this.setPage(1);
    this.liveSearch();
   }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.dataList.length, page);
    this.pagedItems = this.dataList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.searchInput.nativeElement.value = '';
  }

  liveSearch() {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , debounceTime(200) 
      , distinctUntilChanged()
    ).subscribe((text: string) => {
      this.pagedItems = this.filterPipe.transform(this.dataList, this.filterBy, text);
    });
  }
}
