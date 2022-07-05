import React from "react";
import { Card, Typography } from "@fuasmattn/mwui";
import { styled } from "@stitches/react";

type ContentCard = {
  title: string;
  body: string;
  imageAlt: string;
  imageSrc: string;
  confirmLabel: string;
  cancelLabel: string;
};

const HeroImage = styled("div", {
  height: "590px",
  "& .heading": {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: "128px 64px 0 64px",
    width: "1288px",
    color: "white",
  },
});

const Gradient = styled("div", {
  height: "590px",
  width: "60vw",
  position: "absolute",
  background:
    "linear-gradient(90deg, rgba(0, 0, 0, 0.352) 0%, rgba(0, 0, 0, 0) 100%)",
  backgroundBlendMode: "multiply",
});

const Container = styled("div", {
  margin: "0 auto",
  transform: "translateY(-160px)",
  width: "1288px",
  background: "white",
});

const CardContainer = styled("div", {
  background: "white",
  padding: "64px 64px 0 64px",
  display: "grid",
  gap: "40px",
  gridTemplateColumns: "repeat(auto-fill, 360px)",
});

function App() {
  const cards: ContentCard[] = [
    {
      title: "Restaurant",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam voluptua.",
      imageAlt: "alt",
      confirmLabel: "Reservation",
      cancelLabel: "Details",
      imageSrc: "card1.png",
    },
    {
      title: "Park",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam voluptua.",
      imageAlt: "alt",
      confirmLabel: "Reservation",
      cancelLabel: "Details",
      imageSrc: "card2.png",
    },
    {
      title: "Museum",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam voluptua.",
      imageAlt: "alt",
      confirmLabel: "Reservation",
      cancelLabel: "Details",
      imageSrc: "card3.png",
    },
  ];

  return (
    <>
      <HeroImage
        css={{
          background: "url('hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Gradient />
        <div className="heading">
          <Typography
            text="Company Seminar Frankfurt"
            variant="display"
            component="h1"
          />
          <Typography
            text="Hands-On-Session Figma Tokens"
            variant="title"
            size="large"
            component="h2"
          />
        </div>
      </HeroImage>
      <Container>
        <CardContainer>
          {cards.map(
            ({
              title,
              body,
              imageAlt,
              imageSrc,
              confirmLabel,
              cancelLabel,
            }) => (
              <Card
                title={title}
                body={body}
                imageAlt={imageAlt}
                imageSrc={imageSrc}
                confirmLabel={confirmLabel}
                cancelLabel={cancelLabel}
                onConfirm={() => {}}
                onCancel={() => {}}
              />
            )
          )}
        </CardContainer>
      </Container>
    </>
  );
}

export default App;
