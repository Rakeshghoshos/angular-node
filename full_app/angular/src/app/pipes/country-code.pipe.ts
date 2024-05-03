import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  standalone: true
})
export class CountryCodePipe implements PipeTransform {

  transform(value: string, args: string): string {
    if(args.toLowerCase() === 'usa'){
      return "+1"+value
    }
    return "+91"+value
  }

}
