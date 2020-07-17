/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/index.css";

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const currentPosition = getSavedScrollPosition(location);
  // Don't update scroll position on certain pages
  // @NOTE This is just an internal function I run, so stub in your own logic here
  // if (scrollCheck(location)) {
  //   return false
  // }

  window.scrollTo(...(currentPosition || [0, 0]));
};
