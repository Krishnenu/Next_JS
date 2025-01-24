// Counter.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../page";

describe("Counter Component", () => {
  it("renders the initial count passed as a prop", () => {
    render(<Counter initialCount={5} />);

    expect(screen.getByText(/Initial count fetched from the server: 5/i)).toBeInTheDocument();
  });

  it("increments the count when the button is clicked", () => {
    render(<Counter initialCount={5} />);

    const button = screen.getByRole("button", { name: /Clicks: 5/i });

    fireEvent.click(button);

    expect(button).toHaveTextContent("Clicks: 6");
  });

  it("renders with the default initial count of 0 when no prop is provided", () => {
    render(<Counter />);
    expect(screen.getByText(/Initial count fetched from the server: 0/i)).toBeInTheDocument();
  });
});
