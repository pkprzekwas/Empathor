import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageMoviePage} from './ManageMoviePage';

describe('Manage movie page tests', () => {
  it('sets error when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: {saveMovie: () => { return Promise.resolve(); }},
      movie: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };

    const wrapper = mount(<ManageMoviePage {...props}/>);
    const saveBtn = wrapper.find('input').last();
    expect(saveBtn.prop('type')).toBe('submit');
    saveBtn.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title should have at least 5 characters.');
  });
});
