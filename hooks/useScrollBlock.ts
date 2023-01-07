import { useEffect, useRef } from "react";

/*
  Credit: https://gist.github.com/reecelucas/2f510e6b8504008deaaa52732202d2da
*/

const useScrollBlock = () => {
  if (typeof document === "undefined") {
    throw new Error(
      'document is "undefined". useScrollBlock can only be used when document exists'
    );
  }

  const html = document.documentElement;
  const body = document.body;

  const allowScroll = () => {
    html.style.position = "";
    html.style.overflow = "";
    body.style.position = "";
    body.style.overflow = "";
    body.style.paddingRight = "";
  };
  const blockScroll = () => {
    //! read about the difference of these two properties
    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      Number(window.getComputedStyle(body).getPropertyValue("padding-right")) ||
      0;

    /**
     * 1. Fixes a bug in iOS and desktop Safari whereby setting
     *    `overflow: hidden` on the html/body does not prevent scrolling.
     * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
     *    scroll if an `overflow-x` style is also applied to the body.
     */

    html.style.position = "relative"; // [1]
    html.style.overflow = "hidden"; // [2]
    body.style.position = "relative"; // [1]
    body.style.overflow = "hidden"; // [2]
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
  };

  return [allowScroll, blockScroll];
};

// const useScrollBlock = (scrollIsBlocked: boolean) => {
//   useEffect(() => {
//     const allowScroll = () => {
//       if (typeof document === "undefined") return;

//       const html = document.documentElement;
//       const body = document.body;

//       html.style.position = "";
//       html.style.overflow = "";
//       body.style.position = "";
//       body.style.overflow = "";
//       body.style.paddingRight = "";
//     };
//     const blockScroll = () => {
//       if (typeof document === "undefined") return;

//       const html = document.documentElement;
//       const body = document.body;

//       const scrollBarWidth = window.innerWidth - html.clientWidth;
//       const bodyPaddingRight =
//         Number(
//           window.getComputedStyle(body).getPropertyValue("padding-right")
//         ) || 0;

//       /**
//        * 1. Fixes a bug in iOS and desktop Safari whereby setting
//        *    `overflow: hidden` on the html/body does not prevent scrolling.
//        * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
//        *    scroll if an `overflow-x` style is also applied to the body.
//        */

//       html.style.position = "relative"; // [1]
//       html.style.overflow = "hidden"; // [2]
//       body.style.position = "relative"; // [1]
//       body.style.overflow = "hidden"; // [2]
//       body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
//     };

//     scrollIsBlocked ? blockScroll() : allowScroll();
//   }, [scrollIsBlocked]);
// };

export default useScrollBlock;
