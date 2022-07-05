import PropTypes from "prop-types";
import React, { FC } from "react";
import { dropShadowDefault } from "@fuasmattn/mwui-token-farm";
import { Button, Chip, Typography } from "../../atoms";
import { styled } from "../../../stitches";

const scopedTokens = {
  $$cardBackground: "white", // token
  // TODO: move to utils
  $$cardBoxShadow: `${dropShadowDefault.x}px ${dropShadowDefault.y}px ${dropShadowDefault.blur}px ${dropShadowDefault.spread}px ${dropShadowDefault.color}`,
};

const Box = styled("div", {
  ...scopedTokens,
  width: "100%",
  borderRadius: "$default",
  background: "$$cardBackground",
  boxShadow: "$$cardBoxShadow",
  variants: {
    variant: {
      image: { paddingBottom: "$l" },
      "no-image": { padding: "$l" },
    },
  },
});

const Container = styled("div", {
  variants: {
    variant: {
      image: { padding: "0 $l" },
      "no-image": { padding: "0" },
    },
  },
});

const StyledImage = styled("img", {
  marginBottom: "$l",
  borderTopLeftRadius: "$default",
  borderTopRightRadius: "$default",
});

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$m",
});

const AdditionalText = styled("div", {
  overflowWrap: "break-word",
  marginTop: "$xs",
});

const Badges = styled("div", {
  marginTop: "$m",
  gap: "$xxs",
  display: "flex",
  flexWrap: "wrap",
});

const Actions = styled("div", {
  gap: "$xs",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
});

export type CardProps = {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  confirmLabel?: string;
  body?: string;
  cancelLabel?: string;
  additionalText?: string;
  badges?: string[];
  onConfirm?: () => void;
  onCancel?: () => void;
};

const Card = ({
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
}: CardProps) => {
  const hasActions = (cancelLabel && onCancel) || (confirmLabel && onConfirm);
  const hasImage = !!imageSrc;
  const variant = hasImage ? "image" : "no-image";

  return (
    <Box variant={variant}>
      {imageSrc && <StyledImage src={imageSrc} width="100%" alt={imageAlt} />}
      <Container variant={variant}>
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
        <Actions
          css={{
            marginTop: hasActions ? "$m" : 0,
          }}
        >
          {cancelLabel && onCancel && (
            <Button label={cancelLabel} onClick={onCancel} outlined />
          )}
          {confirmLabel && onConfirm && (
            <Button label={confirmLabel} onClick={onConfirm} />
          )}
        </Actions>
      </Container>
    </Box>
  );
};

Card.propTypes = {
  confirmLabel: PropTypes.string,
  onConfirm: PropTypes.func,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  body: PropTypes.string,
  additionalText: PropTypes.string,
  badges: PropTypes.array,
  cancelLabel: PropTypes.string,
  onCancel: PropTypes.func,
};

export default Card;
