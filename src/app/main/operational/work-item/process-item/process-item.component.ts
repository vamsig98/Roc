import { Component, OnInit, Input } from '@angular/core';

import { ProcessData } from '../../../../shared/shared-services/work-items/work-items.service';

@Component({
  selector: 'app-process-item',
  templateUrl: './process-item.component.html',
  styleUrls: ['./process-item.component.css']
})
export class ProcessItemComponent implements OnInit {

  @Input('processData') public processData: ProcessData;

  constructor() { }

  ngOnInit() { }

}