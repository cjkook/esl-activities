import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import "./styles.css";

export default function FlashcardsPage(props) {
  const [cards, setCards] = useState(SAMPLE_CARDS);
  const [radioValue, setRadioValue] = useState("0");

  const typeRadio = [
    { name: "Grid", value: "0" },
    { name: "Carousel", value: "1" },
  ];

  return (
    <Container>
      <ButtonToolbar
        style={{
          margin: "auto",
          // display: "flex",
          width: "50%",
        }}
      >
        <ButtonGroup>
          <DropdownButton
            as={ButtonGroup}
            title="Dropdown"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
          <Button variant="outline-warning">reset</Button>
        </ButtonGroup>
        <ButtonGroup>
          {typeRadio.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="outline-primary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </ButtonToolbar>

      <Container>
        {radioValue === "0" ? (
          <Container className="grid">
            {cards.map((card) => {
              return <Flashcard card={card} key={card.id}></Flashcard>;
            })}
          </Container>
        ) : (
          <CarouselQuiz cards={cards} />
        )}
      </Container>
    </Container>
  );
}

function Flashcard({ card }) {
  const [flip, setFlip] = useState(false);

  return (
    <Card
      style={{
        minHeight: "30vh",
        // maxWidth: "50vw",
        margin: "auto",
        marginTop: "2vh",
        marginBottom: "2vh",
        borderRadius: "10px",
      }}
      onClick={() => setFlip(!flip)}
    >
      {flip ? (
        <Card.Body>
          <Card.Title style={{lineHeight: "1rem"}}>{card.word}</Card.Title>
          <Card.Text>
            <em>{card.pos.join(", ")}</em>
          </Card.Text>
        </Card.Body>
      ) : card.image.length ? (
        <Card.Img
          style={{ borderRadius: "10px", width: "95%", margin: "auto" }}
          src={card.image}
        />
      ) : (
        <Card.Body>
          <Card.Text>{card.fitb}</Card.Text>
        </Card.Body>
      )}

      {flip ? (
        <ListGroup className="list-group-flush">
          {card.sentences.map((sentence) => {
            return (
              <ListGroup.Item key={`sent-${card.id}`}>
                {sentence}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      ) : null}

      {flip ? (
        <Card.Body>
          <Card.Link
            target="_blank"
            href={`https://translate.google.com/?sl=en&tl=zh-TW&text=${card.word}&op=translate&hl=en`}
          >
            Translate
          </Card.Link>
          <Card.Link
            target="_blank"
            href={`https://www.dictionary.com/browse/${card.word}`}
          >
            Define
          </Card.Link>
        </Card.Body>
      ) : null}
    </Card>
  );
}

function CarouselQuiz({ cards }) {
  return (
    <Container style={{ height: "80%" }}>
      <Carousel interval={null}>
        {cards.map((card) => {
          return (
            <Carousel.Item key={card.id}>
              <Container style={{ width: "80%", height: "95%" }}>
                <Flashcard card={card}></Flashcard>
              </Container>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

const SAMPLE_CARDS = [
  {
    id: 1,
    word: "Elephant",
    image:
      "https://worldbirds.com/wp-content/uploads/2020/05/elephant-symbolism6.jpg",
    sentences: [
      "The elephants are eating grass.",
      "Elephants are much larger than hippos.",
    ],
    pos: ["noun"],
  },
  {
    id: 2,
    word: "Skateboard",
    image: "",
    sentences: [
      "The skateboard hit the ground.",
      "I didn't use to skateboard.",
    ],
    pos: ["noun", "verb"],
  },
  {
    id: 3,
    word: "Can",
    image: "",
    fitb: "My little brother _______ run a mile in less than six minutes!",
    sentences: [
      "If we put our ideas together, we can come up with something great.",
    ],
    pos: ["verb"],
  },
  {
    id: 1,
    word: "Elephant",
    image:
      "https://worldbirds.com/wp-content/uploads/2020/05/elephant-symbolism6.jpg",
    sentences: [
      "The elephants are eating grass.",
      "Elephants are much larger than hippos.",
    ],
    pos: ["noun"],
  },
  {
    id: 2,
    word: "Skateboard",
    image: "",
    fitb: "When I was younger, I couldn't afford a __________.",
    sentences: [
      "The skateboard hit the ground.",
      "I didn't use to skateboard.",
    ],
    pos: ["noun", "verb"],
  },
  {
    id: 1,
    word: "Elephant",
    image:
      "https://worldbirds.com/wp-content/uploads/2020/05/elephant-symbolism6.jpg",
    sentences: [
      "The elephants are eating grass.",
      "Elephants are much larger than hippos.",
    ],
    pos: ["noun"],
  },
  {
    id: 2,
    word: "Skateboard",
    image: "",
    sentences: [
      "The skateboard hit the ground.",
      "I didn't use to skateboard.",
    ],
    pos: ["noun", "verb"],
  },
];
