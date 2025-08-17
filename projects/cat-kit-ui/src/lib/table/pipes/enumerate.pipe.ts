import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enumerate',
    standalone: true
})
export class EnumeratePipe implements PipeTransform {
    transform(value: number): number[] {
        return Array(value).fill(0).map((x, i) => i);
    }
}