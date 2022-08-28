import React from "react";
import { act } from "react-dom/test-utils";
import DetailsPage from "./DetailsPage";
import { createRoot } from "react-dom/client";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { IssuePriorityEnum } from "../../../shared/enums/issue-priority.enum";
import { Given } from '../../../../tests/Given'

let container = null;
let root = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  root.unmount();
  container.remove();
  container = null;
  root = null;
});

it("renders epic data", async () => {
  const epic = new Given().Epic();

  jest.spyOn(global, "fetch").mockImplementation(mockFetch);
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      searchParams: "id=1",
    }),
  }));

  await act(async () => {
    render(
      <MemoryRouter initialEntries={["/epic/details?id=1"]}>
        <Routes>
          <Route path="/epic/details" element={<DetailsPage />} />
        </Routes>
      </MemoryRouter>
    );
  });

  //console.log(container)
  screen.debug();
  
  expect(document.getElementById("epicName").textContent).toBe(epic.name);
  expect(document.getElementById("priority").textContent).toBe(
    IssuePriorityEnum[epic.priority]
  );
  expect(document.getElementById("assignee").textContent).toBe("Alexey");
  expect(document.getElementById("reporter").textContent).toBe("Alexey");

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});





export default async function mockFetch(url) {
  const given = new Given();

 console.log('+++++++++++++++');
 console.log(url.toLowerCase());
  switch (url.toLowerCase()) {
    case '/api/epic/details?id=1':
        const fakeEpic = given.Epic('1');
      return Promise.resolve({
        json: () => Promise.resolve(fakeEpic),
      })
    case '/api/users/getprofiles':
      const alex = given.Alexey();
      const vlad = given.Vlad([1]);
      return Promise.resolve({
        json: () => Promise.resolve([alex, vlad]),
      })
    default:
      break;
  }
  
  throw new Error(`Unhandled request: ${url}`);        
}