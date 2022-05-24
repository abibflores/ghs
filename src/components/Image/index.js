import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

export const Img = ({ src, alt, height, width }) => (
  <Image alt={alt} height={height} layout="fixed" src={src} width={width} />
);

Img.defaultProps = {
  src: "/imagenes/logo-small.png",
  alt: "reworth",
  height: 45,
  width: 45,
};

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};