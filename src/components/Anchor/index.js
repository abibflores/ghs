import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import { AnchorStyle } from "./styles";

export const Anchor = ({ active, children, href, next, target }) => {
  if (next) {
    return (
      <Link href={href} passHref>
        <AnchorStyle $active={active}>
          {children}
        </AnchorStyle>
      </Link>
    );
  }

  return(
    <AnchorStyle href={href} target={target}>
      {children}
    </AnchorStyle>
  );
};

Anchor.defaultProps = {
  active: false,
  next: false,
  target: "_self"
};

Anchor.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  next: PropTypes.bool,
  target: PropTypes.oneOf(["_self", "_blank"])
};