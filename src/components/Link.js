import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    //check if we push on ctrlKey (windows) or metaKey (macOS)
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    //Modify the URL
    window.history.pushState({}, "", href);

    //Notify components the URL has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
