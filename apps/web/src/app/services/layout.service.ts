import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private _showAddButton = new BehaviorSubject(true);
  public readonly showAddButton$: Observable<
    boolean
  > = this._showAddButton.asObservable();

  constructor() {}

  showAddButton(value) {
    this._showAddButton.next(value);
  }
}
