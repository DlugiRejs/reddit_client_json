import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('clicking on tennis button changes the App background to #FED58E', () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
  const app = screen.getByTestId("app");
  const tennisButton = screen.getByText('tennis');
  userEvent.click(tennisButton);

  expect(app).toHaveStyle('background-color: #FED58E')
});

test('typing in text input field changes its value property', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  userEvent.type(input, 'search');

  expect(input).toHaveValue('search');
});

test('clicking on golf button renders 15 golf posts', async () => {
  render(<App />);
  const golfButton = screen.getByText('golf');
  userEvent.click(golfButton);

  await waitFor(() => {
    const golfPosts = screen.getAllByTestId('golf');
    expect(golfPosts.length).toBe(15);
  },
    { timeout: 10000, interval: 1000 }
  );
}, 10000);

test('writing text in the input filters posts with matching text', async () => {
  render(<App />);
  const tennisButton = screen.getByText('tennis');
  const input = screen.getByRole('textbox');
  userEvent.type(input, 'a'); //Before testing check posts to choose searchTerm on https://www.reddit.com/r/tennis/new/
  userEvent.click(tennisButton);

  expect.hasAssertions();
  await waitFor(() => {
    const tennisPosts = screen.getAllByTestId('tennis');
    if (tennisPosts.length > 0) {
      console.log(`There are ${tennisPosts.length} posts`)
      for (let i = 0; i < tennisPosts.length; i++) {
        expect(tennisPosts[i]).toHaveTextContent(/a/i); //repeat search term here
      }
    }
  },
    { timeout: 10000, interval: 1000 }
  );
}, 10000);


