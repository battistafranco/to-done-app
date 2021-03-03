import { ACTIONS } from './../models/layout';
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

  private _showEditButtons = new BehaviorSubject(true);
  public readonly showEditButtons$: Observable<
    boolean
  > = this._showEditButtons.asObservable();

  private _showDetailsButtons = new BehaviorSubject(true);
  public readonly showDetailsButtons$: Observable<
    boolean
  > = this._showDetailsButtons.asObservable();

  private _title$ = new BehaviorSubject('');
  public readonly title$: Observable<string> = this._title$.asObservable();

  private _selectedAction$ = new BehaviorSubject(null);
  public readonly selectedAction$: Observable<
    any
  > = this._selectedAction$.asObservable();

  constructor() {
    this.hideButtons();
  }

  showAddButton(value) {
    this._showAddButton.next(value);
  }

  showEditButtons(value) {
    this._showEditButtons.next(value);
  }

  showDetailsButtons(value) {
    this._showDetailsButtons.next(value);
  }

  hideButtons() {
    this.showAddButton(false);
    this.showEditButtons(false);
    this.showDetailsButtons(false);
  }

  setTitle(title) {
    this._title$.next(title);
  }

  setSelectedAction(action: ACTIONS) {
    this._selectedAction$.next(action);
  }

  setLayout(action: ACTIONS) {
    this.hideButtons();
    this.setSelectedAction(action);
    switch (action) {
      case ACTIONS.LIST_TODO:
        this.showAddButton(true);
        this.setTitle('Pending Tasks');
        break;
      case ACTIONS.ADD_TODO:
        this.showEditButtons(true);
        this.setTitle('Add Task');
        break;
      case ACTIONS.DETAILS_TODO:
        this.showDetailsButtons(true);
        this.setTitle('Task Details');
        break;
      case ACTIONS.EDIT_TODO:
        this.showEditButtons(true);
        this.setTitle('Edit Task');
        break;
      default:
        break;
    }
  }
}
