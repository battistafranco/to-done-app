export type BackgroundColor = 'app-bg-color-primary' | 'bg-color-secondary';
export type StateColor = 'app-state-color-focus' | 'app-state-color-danger';
export type BorderColor =
  | 'app-border-color'
  | 'app-border-color-focus'
  | 'app-border-color-invalid';
export type TextColor =
  | 'app-text-primary'
  | 'app-text-secondary'
  | 'app-text-invalid';
export type ThemeColor =
  | 'color-green'
  | 'color-blue'
  | 'color-purple'
  | 'color-orange'
  | 'color-red'
  | 'color-purple'
  | 'color-neutral-0'
  | 'color-neutral-10'
  | 'color-neutral-25'
  | 'color-neutral-50'
  | 'color-neutral-90'
  | 'color-neutral-100';

export type Color =
  | ThemeColor
  | TextColor
  | BorderColor
  | StateColor
  | BackgroundColor;
