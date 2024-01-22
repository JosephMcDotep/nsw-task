import { render, screen } from "@testing-library/react";
import PhotoCard from "./PhotoCard";

test("renders photo card component", () => {
  const mockPhoto = {
    id: "1",
    downloadUrl: "https://testphotourl.com/photo.jpg",
    author: "John Doe",
  };

  render(<PhotoCard {...mockPhoto} />);
  expect(screen.getByAltText("Photo by: John Doe")).toBeInTheDocument();
  expect(screen.getByText("Author: John Doe")).toBeInTheDocument();
});
