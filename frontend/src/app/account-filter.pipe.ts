import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountFilter'
})
export class AccountFilterPipe implements PipeTransform {

  transform(instances: any, Ac_filter:string, In_filter:string) {
    if (instances && instances.length){
        return instances.filter(instance =>{
            if (Ac_filter && instance.Account_Name.toLowerCase().indexOf(Ac_filter.toLowerCase()) === -1){
                return false;
            }
            if (In_filter && instance.Instance_ID.toLowerCase().indexOf(In_filter.toLowerCase()) === -1){
                return false;
            }
            return true;
       })
    }
      /** 
      if (!instances || !Ac_filter || !In_filter){
          return instances
      }

      if (Ac_filter.length > 0){
        return instances.filter(account => account.Account_Name.toLowerCase().
        indexOf(Ac_filter.toLowerCase()) !== -1);
      }

      if (In_filter.length > 0){
        return instances.filter(instance => instance.Instance_ID.toLowerCase().
        indexOf(Ac_filter.toLowerCase()) !== -1);
      }

  }*/

}
}
