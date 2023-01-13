import { render, RenderOptions } from "@testing-library/react";
import React, { FC, ReactElement } from "react";
import fs from "fs";
import path from "path";

/*
  https://stackoverflow.com/questions/71010317/react-testing-library-cant-read-styles-using-tailwind-css-classes
*/

const wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  const view = render(ui, { wrapper, ...options });

  const style = document.createElement("style");
  style.innerHTML = fs.readFileSync(
    path.resolve(__dirname, "./index.css"),
    "utf8"
  );
  document.head.appendChild(style);

  return view;
};

export * from "@testing-library/react";
export { customRender as render };
