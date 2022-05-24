import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import { AnchorStyle } from "./style";

export const Anchor = ({ active, children, href, next }) => {
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
    <AnchorStyle href={href} >
      {children}
    </AnchorStyle>
  );
};

Anchor.defaultProps = {
  active: false,
  next: false,
};

Anchor.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  next: PropTypes.bool,
};