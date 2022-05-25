import React from "react";
import PropTypes from "prop-types";

import { Avatar } from "components/Avatar";
import { Text } from "components/Text";
import { StylesCard, StylesCardHeader, StylesCardInfo } from "./styles";
import { Anchor } from "components/Anchor";

export const Card = ({ title, subTitle, src, url, variant }) => {
  const avatarAlt = variant === "user" ? title : subTitle;
  const anchorText = variant === "user" ? "Ver usuario" : "Ir al repositorio";
  return (
    <StylesCard>
      <Avatar src={src} alt={`Avatar del usuario ${avatarAlt}`}/>
      <StylesCardInfo>
        <StylesCardHeader>
          <Text type="h2" variant="middle" >{title}</Text>
          <Anchor href={url} target="_blank">{anchorText}</Anchor>
        </StylesCardHeader>
        { 
          subTitle &&
            <Text>{`by - ${subTitle}`}</Text>
        }
      </StylesCardInfo>
    </StylesCard>
  );
};

Card.defaultProps = {
  title: "abib flores",
  subTitle: "",
  src: "/img/logo.webp",
  url: "",
  variant: "user"
};

Card.propTypes = {
  title: PropTypes.string,
  subTitle:  PropTypes.string,
  src:  PropTypes.string,
  url:  PropTypes.string,
  variant: PropTypes.oneOf(["user", "repo"])
};