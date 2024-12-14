import App from './root';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('App Component', () => {
  test('renders Outlet correctly', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
