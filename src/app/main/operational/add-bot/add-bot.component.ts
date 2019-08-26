import { Component, OnInit, HostListener, Output, EventEmitter, Input } from '@angular/core';

import { WorkItemsService } from '../../../shared/shared-services/work-items/work-items.service';

@Component({
  selector: 'app-add-bot',
  templateUrl: './add-bot.component.html',
  styleUrls: ['./add-bot.component.css']
})
export class AddBotComponent implements OnInit {

  public isSaving: boolean = false;

  @Output() onClose = new EventEmitter<boolean>();

  @Input('availableBots') public availableBots: number = 0;
  @Input('botsAdded') public botsAdded: number = 0;
  @Input('id') public processKey: string;


  @HostListener('click')
  clickInside() {
    this._wasInside = true;
  }

  @HostListener('document:click', ["$event"])
  clickout(ev: any) {
    if (!this._wasInside 
      && !(<HTMLElement>ev.target).classList.contains('bots-label')
      && (<HTMLElement>ev.target).nodeName != 'MAT-ICON'
    ) {
      this.onClose.emit(true);
      return;
    }
    this._wasInside = false;
  }

  private _wasInside: boolean = false;

  constructor(
    public _workItemService: WorkItemsService
  ) { }

  ngOnInit() {
  }

  public updateBot(type: '-' | '+') {
    if (type == '-') {
      if (this.botsAdded - 1 < 0) {
        return;
      }
      this.botsAdded--;
      this.availableBots++;
      return;
    }

    if (type == '+') {
      if (this.availableBots <= 0) {
        return;
      }
      this.botsAdded++;
      this.availableBots--;
    }
  }

  public saveBots() {
    this.isSaving = true;
    this._workItemService.updateBotsForWorkItem({
      processKey: this.processKey,
      qty: this.botsAdded
    }).subscribe(
      (data) => {
        this.isSaving = false;
        this.onClose.emit(true);
      },
      (error) => {
        this.isSaving = false;
      }
      );
  }

}
