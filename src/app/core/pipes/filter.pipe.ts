import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter',
})
export class FilterPipe implements PipeTransform {
	transform(array: any, value: string, fields: any): any {
		let filterValueLower = value.toLowerCase();
		if (value === '') {
			return array;
		} else {
			return array.filter((arr: any) => {
				let j = 0;
				for (const i of fields) {
					if (arr[i] != null) {
						if (
							arr[i]
								.toString()
								.toLowerCase()
								.includes(filterValueLower)
						) {
							j = 1;
						}

					}
				}
				if (j > 0) {
					return arr;
				}
			});
		}
	}
}
