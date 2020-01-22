import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import logo from "../layout/images/profile_photo.png";
import Image from "react-bootstrap/Image";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup'

const Residentportal = () => {
  return (
    <div fluid="True" className="container1">
     <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
        <Card>
          <div className="card-img-top-right">
            <Image src={logo} fluid alt="Responsive image" />
          </div>
          <ButtonGroup vertical className='btn-vertical'>
            <Button className="card-btn1">
              <a href="/">Tietoluvat </a>
            </Button>
            <Button className="card-btn">
              <a href="/">valtuutukset</a>
            </Button>
            <Button className="card-btn">
              <a href="/">Henkilötiedot</a>
            </Button>
          </ButtonGroup>
        </Card>

        <Card>
        <Image src={logo} fluid className='' alt="Responsive image" />
        
            
  </Card>
  
</CardGroup>
    </div>
  );
};

export default Residentportal;
