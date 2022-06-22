import PropTypes from "prop-types";
import React, { FC } from "react";
import { Button, Chip, Typography } from "../../atoms";
import { styled } from "./Card.styled";

const Box = styled("div", {
  width: "100%",
  borderRadius: "$default",
  background: "$cardBackground",
  boxShadow: "$cardBoxShadow",
});

const StyledImage = styled("img", {
  borderTopLeftRadius: "$default",
  borderTopRightRadius: "$default",
});

const Content = styled("div", {
  padding: "0 $s $s",
});

const AdditionalText = styled("div", {
  padding: "0 $s",
});

const Badges = styled("div", {
  padding: "0 $s",
  gap: "$xs",
  display: "flex",
  flexWrap: "wrap"
});

const Actions = styled("div", {
  margin: "$s 0 $s",
  gap: "$xs",
  padding: "$s",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
});

export type CardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  confirmLabel: string;
  body?: string;
  cancelLabel?: string;
  additionalText?: string;
  badges?: string[];
  onConfirm: () => void;
  onCancel?: () => void;
};

const Card: FC<CardProps> = ({
  imageSrc,
  title,
  body,
  confirmLabel,
  cancelLabel,
  imageAlt,
  additionalText,
  badges,
  onConfirm,
  onCancel,
}) => {
  return (
    <Box>
      <StyledImage src={imageSrc} width="100%" alt={imageAlt} />
      <Content>
        <Typography variant="title" size="large" text={title} />
        {body && <Typography variant="body" size="medium" text={body} />}
      </Content>
      {badges?.length && (
        <Badges>
          {badges.map((badge, index) => (
            <Chip label={badge} key={`badge-${index}`} />
          ))}
        </Badges>
      )}
      {additionalText && (
        <AdditionalText>
          <Typography variant="body" size="small" text={additionalText} />
        </AdditionalText>
      )}
      <Actions>
        {cancelLabel && onCancel && (
          <Button label={cancelLabel} onClick={onCancel} outlined />
        )}
        <Button label={confirmLabel} onClick={onConfirm} />
      </Actions>
    </Box>
  );
};

Card.propTypes = {
  confirmLabel: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  body: PropTypes.string,
  additionalText: PropTypes.string,
  badges: PropTypes.array,
  cancelLabel: PropTypes.string,
  onCancel: PropTypes.func,
};

export default Card;
