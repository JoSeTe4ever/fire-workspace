import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Flame from './flame';

describe(' Flame', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Flame />);
    expect(baseElement).toBeTruthy();
  });
});
