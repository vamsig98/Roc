import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  @Input() assetsdata:any;
  constructor() { }

  ngOnInit() {
  }

}
