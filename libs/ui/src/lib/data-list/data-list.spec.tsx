import { render } from '@testing-library/react';

import DataList from './data-list';

describe('DataList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataList />);
    expect(baseElement).toBeTruthy();
  });
});
