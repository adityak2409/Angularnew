import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe2'
})
export class Custompipe2Pipe implements PipeTransform {

  transform(value:any,start:number=0,end:number=15 ){
    let temp=(<string>value)
    return (temp.substring(start,end));
  }

}
