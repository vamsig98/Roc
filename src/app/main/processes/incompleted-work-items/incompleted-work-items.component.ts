import { Component, OnInit,Input } from '@angular/core';
import { Source } from '../../../shared/shared-services/work-items/work-items.service';

@Component({
  selector: 'app-incompleted-work-items',
  templateUrl: './incompleted-work-items.component.html',
  styleUrls: ['./incompleted-work-items.component.css']
})
export class IncompletedWorkItemsComponent implements OnInit {
  @Input('workItems') public sources: Array<Source>;

  constructor() { }


  ngOnInit() {
  }
  public trackById(source: Source) {
    return source ? source.sourceId : undefined;
  }

}
