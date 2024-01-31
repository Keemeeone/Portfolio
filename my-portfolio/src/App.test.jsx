// App.test.jsx

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the navigation buttons and sections', () => {
  render(<App />);

  // Check navigation buttons
  const homeButton = screen.getByText(/Home/i);

  // Use getAllByText for Skills since there might be multiple instances
  const skillsButtons = screen.getAllByText(/Skill/i);
  const projectsButton = screen.getAllByText(/Project/i);
  const resumeButton = screen.getAllByText(/Resume/i);
  const contactButton = screen.getAllByText(/Contact/i);

  expect(homeButton).toBeInTheDocument();

  // Assert on the number of "Skills" buttons or other specific conditions
  expect(skillsButtons.length).toBeGreaterThanOrEqual(1);
  expect(projectsButton.length).toBeGreaterThanOrEqual(1);
  expect(resumeButton.length).toBeGreaterThanOrEqual(1);
  expect(contactButton.length).toBeGreaterThanOrEqual(1);
});
