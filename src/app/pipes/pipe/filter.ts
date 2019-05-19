import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class Filter implements PipeTransform {
    transform(value: any, filterString: string, propName: string): any {
        if (value.length === 0 || filterString === '') {
            console.log(value);
            return value;
        }
        console.log('gggg-----');
        console.log(filterString);
        console.log(value);
        console.log('=====gggg');
        const resultArray = [];
        value.forEach(item => {
            if (item[propName] === filterString) {
                resultArray.push(item);
            }
        });
        console.log(resultArray);
        return resultArray;
    }
}
