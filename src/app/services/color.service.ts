import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {

constructor() { }

  yellow(pri: string): boolean {
    return (pri === 'Низкий') ? true : false;
  }

  green(pri: string): boolean {
    return (pri === 'Средний') ? true : false;
  }

  red(pri: string): boolean {
    return (pri === 'Высокий') ? true : false;
  }
}
