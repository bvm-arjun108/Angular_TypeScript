import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyJson'
})
export class PrettyJsonPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const indent = args.length > 0 ? parseInt(args[0], 10) : 2;
    return JSON.stringify(value, null, indent);
  }

}
