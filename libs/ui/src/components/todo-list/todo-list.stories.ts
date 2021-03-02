import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const TodoList = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<todo-list first="${firstName}" middle="${middleName}" last="${lastName}"></todo-list>`;
};
