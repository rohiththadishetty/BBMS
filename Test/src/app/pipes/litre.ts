import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'litre'
})
export class LitreConverterPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 1000) {
      const convertedValue = value / 1000;
      return `${convertedValue} L`;
    } else {
      return `${value} mL`;
    }
  }

}
