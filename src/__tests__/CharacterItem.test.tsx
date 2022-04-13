import { render, screen } from "@testing-library/react";
import Characteritem from "../components/CharacterItem";

const props = {
  name: "Lorem",
  hair_color: "red",
  eye_color: "blue",
  gender: "na",
  birth_year: 1100,
};

describe("<Characteritem />", () => {
  const wrapper = render(<Characteritem data={props} />);
  test("Should render the component", () => {
    const linkElement = screen.getByText(/Name/i);
    expect(linkElement).toBeInTheDocument();
  });
});
