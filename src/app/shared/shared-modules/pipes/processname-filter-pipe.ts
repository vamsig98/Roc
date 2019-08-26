import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'procfilter'
})
@Injectable()
export class ProcessFilterPipe implements PipeTransform {
    transform(items: any[], searchvalue: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchvalue) {
            return items;
        }
        return items.filter(function (procItem) {
            if(procItem.display_name.toLowerCase().includes(searchvalue.toLowerCase())){
                return procItem;
            }
            if (procItem.display_name.length==0 && procItem.name.toLowerCase().includes(searchvalue.toLowerCase())){
              return procItem;
            }
            if (procItem.display_name.length==0 && procItem.name.length==0 && procItem.ProcessKey.toLowerCase().includes(searchvalue.toLowerCase())){
                return procItem;
            }
        }
        );
    }
}