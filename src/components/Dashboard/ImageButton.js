import React from "react"
import '../../assets/css/Dashboard.css';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


class ImageButton extends React.Component {

  render() {
    return(
      <Card id='image_button'>
        <Card.Header id='card_header'>{this.props.title}</Card.Header>
          <Card.Body id='card_body' >
            <Col id='image_button_col'>
              <Card.Text >{this.props.text}</Card.Text>
              <Button variant="primary" id='image_button_button' >{this.props.btn_text}</Button>
            </Col>
          </Card.Body>
      </Card>
    )
  }
}

export default ImageButton