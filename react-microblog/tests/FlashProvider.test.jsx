import { render, screen, act } from "@testing-library/react";
import { useEffect } from "react";
import FlashProvider from '../src/contexts/FlashProvider';
import { useFlash } from "../src/contexts/FlashProvider";
import FlashMessage from '../src/components/FlashMessage';


beforeEach(() => {
  vitest.useFakeTimers();
});

afterEach(() => {
  vitest.useRealTimers();
});

test('flashes a message', async () => {
  const Test = () => {
    const flash = useFlash();
    useEffect(() => {
      flash('foo', 'danger');
    }, []);
    return null;
  };

  render(
    <FlashProvider>
      <FlashMessage />
      <Test />
    </FlashProvider>
  );

  const alert = screen.getByRole('alert');

  expect(alert).toHaveTextContent('foo');
  expect(alert).toHaveClass('alert-danger');
  expect(alert).toHaveAttribute('data-visible', 'true');

  act(() => vitest.runAllTimers());
  expect(alert).toHaveAttribute('data-visible', 'false');
});