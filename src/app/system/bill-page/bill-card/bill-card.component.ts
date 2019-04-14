import { Component, Input, OnInit } from '@angular/core';
import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'bookkeeper-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  usdDollar: number;
  brPound: number;

  constructor() { }

  ngOnInit() {
    const { rates } = this.currency;
    this.usdDollar = rates['USD'] * this.bill.value;
    this.brPound = rates['GBP'] * this.bill.value;
  }

}
