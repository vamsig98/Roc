import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, OnDestroy } from '@angular/core';
import { WorkItemsService, ProcessMetadata } from '../../shared-services/work-items/work-items.service';

declare const moment: any;

@Component({
  selector: 'app-work-item-metadata',
  templateUrl: './work-item-metadata.component.html',
  styleUrls: ['./work-item-metadata.component.scss']
})
export class WorkItemMetadataComponent implements OnInit, OnChanges, OnDestroy {
  @Input('data') public parentData;
  @ViewChild('datePlaceholder') public datePlaceholder: ElementRef;

  @Input('metadata') public metadataItems;
  @Input('showFilterMenu') public showFilterMenu: boolean;
  @Input('ddSelected') public ddSelected: string;

  public metadata: ProcessMetadata;

  public errorMessage: string;

  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
    ranges: {
      'Last Month': [moment().subtract(1, 'month'), moment()],
      'Last 3 Months': [moment().subtract(4, 'month'), moment()],
      'Last 6 Months': [moment().subtract(6, 'month'), moment()],
      'Last 12 Months': [moment().subtract(12, 'month'), moment()],
    }
  };

  public daterange: any = {};
  public isLoading: boolean = false;

  constructor(
    public _workItemService: WorkItemsService
  ) {
    
  }

  ngOnInit() {
    // set only for the first time when @Input sends it...
    this.metadata = this.metadataItems;
  }

  ngOnChanges(e) {
    this.metadata = this.metadataItems;
  }

  ngOnDestroy() {
  }

  getWorkItemData() {
    this.isLoading = true;
    this._workItemService.getWorkItemMetaDataByIdAndTime({
      key: this.metadataItems.process_name,
      aggType: this.apiDDType(),
      tmStart: this.daterange ? this.daterange.start : '',
      tmEnd: this.daterange ? this.daterange.end : ''
    }).subscribe((data: any) => {
      this.isLoading = false;
      this.metadata = data;
    }, (error) => {
      this.isLoading = false;
      this.errorMessage = error.error;
    });
  }
  // getWorkItemData() {
  //   this.isLoading = true;
  //   this._workItemService.getWorkItemMetaDataByIdAndTime({
  //     key: this.metadataItems.process_name,
  //     aggType: this.apiDDType(),
  //     tmStart: this.daterange ? this.daterange.start : '',
  //     tmEnd: this.daterange ? this.daterange.end : ''
  //   }).subscribe((data: any) => {
  //     this.isLoading = false;
  //     this.metadata = data;
  //   }, (error) => {
  //     this.isLoading = false;
  //     this.errorMessage = error.error;
  //   });
  // }

  public selectedDate(value: any, datepicker?: any) {
    this.options = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false,
      ranges: {
        'Last Month': [moment().subtract(1, 'month'), moment()],
        'Last 3 Months': [moment().subtract(4, 'month'), moment()],
        'Last 6 Months': [moment().subtract(6, 'month'), moment()],
        'Last 12 Months': [moment().subtract(12, 'month'), moment()],
      }
    };

    this.ddSelected = 'Range';

    this.daterange = {};
    // or manupulat your own internal property
    this.daterange.start = value.start.format('YYYY-MM-DD');
    this.daterange.end = value.end.format('YYYY-MM-DD');


    this.getWorkItemData();
  }

  showDatePicker() {
    this.datePlaceholder.nativeElement.click();
  }

  public showDatewiseFilter(type: string) {
    this.ddSelected = type;

    this.daterange = null;

    this.getWorkItemData();
  }

  private apiDDType(): string {
    let typ: string = '';
    switch (this.ddSelected) {
      case 'YTD':
        typ = 'YEAR';
        break;
      case 'MTD':
        typ = 'MONTH';
        break;
      case 'WTD':
        typ = 'WEEK';
        break;
      case 'Range':
        typ = 'CUSTOM';
        break;
        case 'ALL':
        typ = 'ALL';
        break;
    }

    return typ;
  }
}
