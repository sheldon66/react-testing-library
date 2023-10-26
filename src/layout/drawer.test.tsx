import { render, screen } from "@testing-library/react";
// import Drawer from "./drawer";
import Layout from "./index";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
test("open the drawer", async () => {
  // ARRANGE
  render(<Layout />);

  // ACT
  await userEvent.click(screen.getByTestId("open-button"));
  await screen.findByText("hello");

  // ASSERT
  expect(screen.getByText("hello")).toBeTruthy();
});

test("close the drawer", async () => {
  // ARRANGE
  render(<Layout />);

  // ACT
  await userEvent.click(screen.getByTestId("close-button"));

  // ASSERT
  await expect(screen.queryByText("hello")).toBeNull();
});
