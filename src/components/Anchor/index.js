import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import { AnchorStyle } from "./styles";

export const Anchor = ({ active, children, href, next, target, variant }) => {
  if (next) {
    return (
      <Link href={href} passHref>
        <AnchorStyle variant={variant} $active={active}>
          {children}
        </AnchorStyle>
      </Link>
    );
  }

  return(
    <AnchorStyle variant={variant} href={href} target={target}>
      {children}
    </AnchorStyle>
  );
};

Anchor.defaultProps = {
  active: false,
  next: false,
  target: "_self",
  variant: "a",
};

Anchor.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  next: PropTypes.bool,
  target: PropTypes.oneOf(["_self", "_blank"]),
  variant: PropTypes.oneOf(["a", "button"]),
};