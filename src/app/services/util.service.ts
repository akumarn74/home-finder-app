import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }
  /**
   * Added capitalize changes for property drop doen selection
   * @param word
   */
  capitalize(word): string {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }
}