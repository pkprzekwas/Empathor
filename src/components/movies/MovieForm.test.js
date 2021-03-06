import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import MovieForm from './MovieForm';

function setup(saving) {
  const props = {
    movie: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<MovieForm {...props} />);
}

describe('MovieForm tests with Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Movie');
  });

  it('save button labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });


  it('save button labeled "Save" when not saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
