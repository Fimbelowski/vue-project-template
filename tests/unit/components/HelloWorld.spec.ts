import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import HelloWorld from '@/components/HelloWorld.vue';
import { mount } from '@vue/test-utils';

describe('HelloWorld.vue', () => {
  const defaultProps = {
    msg: 'Hello World!',
  };
  let wrapper = mount(HelloWorld, {
    props: defaultProps,
  });

  beforeEach(() => {
    wrapper = mount(HelloWorld, {
      props: defaultProps,
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render an h1 tag with the contents of the "msg" prop', () => {
    const h1 = wrapper.get('h1');

    expect(h1.text()).toBe(defaultProps.msg);
  });

  it('should render a count of 0 by default', () => {
    const button = wrapper.get('button');

    expect(button.text()).toBe('count is: 0');
  });

  it('should increment the count when the button is clicked', async () => {
    const button = wrapper.get('button');

    await button.trigger('click');

    expect(button.text()).toBe('count is: 1');
  });
});
