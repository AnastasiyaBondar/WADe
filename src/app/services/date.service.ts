import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

    constructor() { }

    readDate(): string {
        const dd = new Date();
        let str: string = '';

        str += dd.getFullYear() + '-';

        str += (dd.getMonth() < 9) ? '0' : '';
        str += dd.getMonth() + 1 + '-';

        str += (dd.getDate() < 10) ? '0' : '';
        str += dd.getDate();

        return str;
    }
}
