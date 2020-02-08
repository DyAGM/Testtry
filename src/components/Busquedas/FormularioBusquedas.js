import React from "react"
import '../../assets/css/Busquedas.css'

import {Row, Col, Container, Card, Form, Button} from 'react-bootstrap'


class FormularioBusquedas extends React.Component{
  constructor(props) {
    super(props);

    this.changeAsignatura = this.changeAsignatura.bind(this);
    this.changeTipoPregunta = this.changeTipoPregunta.bind(this);
    this.changePalabrasClave = this.changePalabrasClave.bind(this);

  }

  changeAsignatura(e){
    this.props.estado.asignatura= e.target.value
  }
  changeTipoPregunta(e){
    this.props.estado.tipo_pregunta= e.target.value
  }
  changePalabrasClave(e){
    this.props.estado.palabras_clave= e.target.value

  }

  render(){
    return(
      <Card>
        <Card.Header id='card_header'>Busqueda de preguntas en la BBDD</Card.Header>
          <Card.Body id='busqueda_card_body'>
            <Container id='busqueda_card_body_container' fluid='true'>
              <Row top="xs">
                <Col md={6}>
                  <Form.Control placeholder="Asignatura" id='form_element' onChange={this.changeAsignatura}/>
                  <Form.Control placeholder="Tipo de Pregunta" id='form_element' onChange={this.changeTipoPregunta}/>
                </Col>
                <Col >
                  <Form.Control placeholder="Palabras clave" id='form_element_palabras_clave' onChange={this.changePalabrasClave}/>
                </Col>
              </Row>
              <Button onClick={this.props.realizarBusqueda} id='standard_button' >Buscar</Button>
            </Container>
          </Card.Body>
        </Card>
    )
  }
}

export default FormularioBusquedas
