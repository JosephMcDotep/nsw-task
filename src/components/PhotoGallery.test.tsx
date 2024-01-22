// src/components/PhotoGallery.test.tsx
import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import PhotoGallery from "./PhotoGallery";

const mockAxios = new MockAdapter(axios);

test("renders photo gallery component", async () => {
  // Mock Axios call
  mockAxios.onGet("https://picsum.photos/v2/list?page=1&limit=16").reply(200, [
    {
      id: "1",
      download_url: "https://testphotourl.com/image.jpg",
      author: "John Doe",
    },
    // Add more sample data as needed
  ]);

  // Render the component
  render(<PhotoGallery />);

  // Wait for the component to fetch data
  await waitFor(() => {
    expect(screen.getByText(/Latest Image Collection/i)).toBeInTheDocument();
    expect(screen.getByAltText(/John Doe/i)).toBeInTheDocument();
  });

  // Clean up
  act(() => {
    mockAxios.reset();
  });
});

test("displays the correct number of photos", async () => {
  // Mock Axios call
  const mockData = Array.from({ length: 16 }).map((_, index) => ({
    id: `${index + 1}`,
    download_url: `https://testphotourl.com/image${index + 1}.jpg`,
    author: `Author ${index + 1}`,
  }));
  mockAxios
    .onGet("https://picsum.photos/v2/list?page=1&limit=16")
    .reply(200, mockData);

  // Render the component
  render(<PhotoGallery />);

  // Wait for the component to fetch data
  await waitFor(() => {
    // Check if each photo is rendered
    for (let index = 1; index <= 16; index++) {
      expect(
        screen.getByAltText(`Photo submitted by: Author ${index}`)
      ).toBeInTheDocument();
    }
  });

  // Clean up
  act(() => {
    mockAxios.reset();
  });
});
