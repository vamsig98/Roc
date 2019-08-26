import { Component, OnInit,Input } from '@angular/core';
import { FSummary,FLiveSummary } from '../../../../shared/shared-services/financial/financial.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  public _fsummary: FSummary;
  @Input('livesummary') public _flivesummary: FLiveSummary;
  @Input('summary') public set itemRecord(record: FSummary) {
    if (record) {
      this._fsummary = record;
      console.log( 'this._fsummary', this._fsummary);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
