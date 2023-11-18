import Home from '.';
import { render, screen } from '../../../test/test-utils';

describe('Home page', () => {
  beforeEach(() => {
    render(<Home />);
  });
  it('should render successfully', () => {
    expect(screen.getByText(/Welcome to the Home Page/i));
  });
});
