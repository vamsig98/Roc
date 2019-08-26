import { Pipe, PipeTransform } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'
@Pipe({name: 'safeHtml'})

export class SafePipe implements PipeTransform {
 constructor(private sanitizer:DomSanitizer){}
 transform(htmlTemp): any {
   return  this.sanitizer.bypassSecurityTrustHtml(htmlTemp);
 }
}