import {Injectable} from '@angular/core';
import {
  addMonths, addYears, differenceInDays, differenceInMonths,
  differenceInYears
} from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() {
  }

  getDiffToNow(diff: string | number | Date) {
    const result: string[] = [];
    console.log(result);
    const now = new Date();
    diff = new Date(diff);

    const years = differenceInYears(now, diff);
    console.log(years);
    if (years > 0) {
      result.push(`${years} years`);
      diff = addYears(diff, years);
    }
    const months = differenceInMonths(now, diff);
    console.log(years);
    result.push(`${months} months`);
    if (months > 0) {
      diff = addMonths(diff, months);
      console.log([diff]);
    }

    // const days = differenceInDays(now, diff);
    // if (days > 0) {
    //   result.push(`${days} days`);
    // }
    //
    // return result.join(' ');

  }
}
