import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
​
@Component({
 selector: 'app-onboarding',
 templateUrl: './onboarding.component.html',
 styleUrls: ['./onboarding.component.scss'],
 encapsulation:ViewEncapsulation.None
})
export class OnboardingComponent implements OnInit {
@Input() process :any;
   constructor() { }
​
 ngOnInit() {
 }

}