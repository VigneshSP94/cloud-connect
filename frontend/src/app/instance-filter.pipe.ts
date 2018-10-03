import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'instanceFilter'
})
export class InstanceFilterPipe implements PipeTransform {

    transform(instances: any, In_filter:string) {
        if (!instances || !In_filter){
            return instances
        }
    
        return instances.filter(instance => instance.Instance_ID.toLowerCase().
        indexOf(In_filter.toLowerCase()) !== -1);
    }
  }

