import {Component, OnInit} from '@angular/core';
import {DateUtilService} from '../date-util.service';

@Component({
  selector: 'app-life-day',
  templateUrl: './life-day.component.html',
  styleUrls: ['./life-day.component.css']
})
export class LifeDayComponent implements OnInit {
  output = '';

  constructor(private dateUtilService: DateUtilService) {
  }

  ngOnInit() {
  }

  onChange(value: any) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
