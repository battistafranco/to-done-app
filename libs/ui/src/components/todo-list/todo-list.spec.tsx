import { newSpecPage } from '@stencil/core/testing';
import { TodoList } from './todo-list';

describe('todo-list', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TodoList],
      html: '<todo-list></todo-list>'
    });
    expect(root).toEqualHtml(`
      <todo-list>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </todo-list>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TodoList],
      html: `<todo-list first="Stencil" last="'Don't call me a framework' JS"></todo-list>`
    });
    expect(root).toEqualHtml(`
      <todo-list first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </todo-list>
    `);
  });
});
