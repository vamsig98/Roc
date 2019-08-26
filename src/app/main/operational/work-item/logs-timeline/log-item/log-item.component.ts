import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TimelineLog } from '../../../../../shared/shared-services/work-items/work-items.service';
import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';

declare const moment: any;

@Component({
  selector: 'app-log-item',
  templateUrl: './log-item.component.html',
  styleUrls: ['./log-item.component.css']
})
export class LogItemComponent implements OnInit {

  @Input('logItem') public logItem: TimelineLog;
  @Input('idx') public idx: number;
  @Input('tmPreviousLog') public tmPreviousLog: number;

  public tmFormatted: string = '';
  public sanitizedLogMsg: SafeHtml = '';
  public sanitizedExtraInfo: SafeHtml = '';
  public timeDelay: string = '2s';
  constructor(
    private _domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {

    if (!this.tmPreviousLog) {
      this.timeDelay = '0s';
    } else {
      this.timeDelay = (this.logItem.tmLog - this.tmPreviousLog) + 's';
    }

    this.sanitizedLogMsg = this._domSanitizer.bypassSecurityTrustHtml(this.logItem.logMessage);
    this.sanitizedExtraInfo = this.logItem.extraInfo ? this._domSanitizer.bypassSecurityTrustHtml(this.logItem.extraInfo) : '';
    this.tmFormatted = this.logItem.logTimeFormatted ? this.logItem.logTimeFormatted : moment(this.logItem.tmLog).format('hh:mm A');
  }

}
