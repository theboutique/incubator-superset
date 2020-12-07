/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { supersetTheme, ThemeProvider } from '@superset-ui/core';
import FilterBar from 'src/dashboard/components/nativeFilters/FilterBar';
import { mockStore } from 'spec/fixtures/mockStore';

describe('FilterBar', () => {
  const props = {
    filtersOpen: false,
    toggleFiltersBar: jest.fn(),
  };

  const wrapper = mount(
    <Provider store={mockStore}>
      <FilterBar {...props} />
    </Provider>,
    {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme: supersetTheme,
      },
    },
  );

  it('is a valid', () => {
    expect(React.isValidElement(<FilterBar {...props} />)).toBe(true);
  });
  it('has filter and collapse icons', () => {
    expect(wrapper.find({ name: 'filter' })).toExist();
    expect(wrapper.find({ name: 'collapse' })).toExist();
  });
  it('has apply and reset all buttons', () => {
    expect(wrapper.find('.btn-primary')).toExist();
    expect(wrapper.find('.btn-secondary')).toExist();
  });
});