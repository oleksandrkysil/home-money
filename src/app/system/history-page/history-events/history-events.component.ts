import { Component, Input, OnInit } from '@angular/core';
import { BOOKKEEPEREvent } from '../../shared/models/event.model';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'bookkeeper-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Input() events: BOOKKEEPEREvent[] = [];
  searchValue = '';
  searchPlaceholder = 'Amount';
  searchField = 'amount';

  constructor() { }

  ngOnInit() {
    this.events.forEach((e) => {
      e.catName = this.categories.find(c => c.id === e.category).name;
    });
  }

  getEventClass(e: BOOKKEEPEREvent) {
    return {
      'label': true,
      'label-danger': e.type === 'outcome',
      'label-success': e.type === 'income'
    };
  }

  changeCriteria(field: string) {
    const namesMap = {
      amount: 'Amount',
      date: 'Date',
      category: 'Category',
      type: 'Тype'
    };
    this.searchPlaceholder = namesMap[field];
    this.searchField = field;
  }

}
