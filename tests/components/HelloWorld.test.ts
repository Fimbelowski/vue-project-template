import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest';
import { mount } from '@vue/test-utils';

import HelloWorld from '@/components/HelloWorld.vue';

describe('HellowWorld.vue', () => {
  const props = {
    msg: 'Lorem ipsum...',
  };

  let wrapper = mount(HelloWorld, { props });

  beforeEach(() => {
    wrapper = mount(HelloWorld, { props });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render a h1 with text equal to the "msg" prop', () => {
    const h1 = wrapper.get('h1');

    expect(h1.text()).toBe(props.msg);
  });

  it('should render a button whose initial text is "count is 0" that increments every time the button is clicked', async () => {
    const button = wrapper.get('button');
    const initialText = button.text();

    await button.trigger('click');
    const textAfterClick = button.text();

    expect(initialText).toBe('count is 0');
    expect(textAfterClick).toBe('count is 1');
  });
});
