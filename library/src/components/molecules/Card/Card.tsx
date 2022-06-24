import PropTypes from "prop-types";
import React, { FC } from "react";
import { Button, Chip, Typography } from "../../atoms";
import { styled } from "../../stitches";

const scopedTokens = {
  $$cardBackground: "white", // token
  $$cardBoxShadow: "0px 1px 5px rgba(0, 0, 0, 0.15)", // token
};

const Box = styled("div", {
  ...scopedTokens,
  width: "100%",
  borderRadius: "$default",
  background: "$$cardBackground",
  boxShadow: "$$cardBoxShadow",
  variants: {
    variant: {
      image: { paddingBottom: "$xl" },
      "no-image": { padding: "$xl" },
    },
  },
});

const Container = styled("div", {
  variants: {
    variant: {
      image: { padding: "0 $xl" },
      "no-image": { padding: "0" },
    },
  },
});


const StyledImage = styled("img", {
  marginBottom: "$xl",
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
