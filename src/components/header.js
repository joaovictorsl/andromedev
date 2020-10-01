import { Link } from "gatsby";
import React, { useState } from "react";
import useDocumentScrollThrottled from "../helpers/useDocumentScrollThrottled";

function Header() {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";

  return (
    <header
      className={`flex fixed justify-center inset-x-0 top-0 py-4 z-30 bg-dark-gray text-white ${hiddenStyle} ${shadowStyle}`}
    >
      <nav className="uppercase flex justify-around space-x-16">
        <Link to="/" className="hover:text-orange">
          INÍCIO
        </Link>
        <Link to="/sobre" className="hover:text-orange">
          SOBRE
        </Link>
        <Link to="/guia" className="hover:text-orange">
          GUIA DE BORDO
        </Link>
      </nav>
    </header>
  );
}

export default Header;
