import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RomanNumberService {
  constructor() {}

  transform(value: number): string {
    return [...Array(value)].map((_) => 'I').join('');
  }
}
