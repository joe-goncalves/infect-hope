import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public static deepCopy (o) {
    return JSON.parse(JSON.stringify(o))
  }
  
  public static getRandomDateInBounds (startDtStr: string, endDtStr: string): Date {
    const getTime_ms = dtStr => (new Date(dtStr).getTime()),
      startDt = getTime_ms(startDtStr),
      endDt = getTime_ms(endDtStr);
  
    return new Date(startDt + Math.random() * (endDt - startDt));
  };
}
