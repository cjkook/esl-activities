import {Link } from "react-router-dom"
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { GiHamburgerMenu } from "react-icons/gi";

import "./styles.css"

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="menu-button">
        <GiHamburgerMenu />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          <nav>
            <Link to="/" onClick={handleClose}>Home</Link>

            <Link to="/about" onClick={handleClose}>About</Link>

            <Link to="/flashcards" onClick={handleClose}>Flashcards</Link>
          </nav>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
