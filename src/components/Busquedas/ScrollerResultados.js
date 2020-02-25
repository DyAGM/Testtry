import React from "react"
import '../../assets/css/Busquedas.css'

import {Row, Col, Container, Card, OverlayTrigger, Tooltip, Button} from 'react-bootstrap'
import LazyLoad from 'react-lazyload';
import ProgressButton from 'react-progress-button'

class CardPregunta extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const options = this.props.respuestas.map(function(e){
      return  <li>{e}</li>
    })
    return(
    <Card id='card_pregunta_encontrada'>
      <Card.Header id='card_pregunta_encontrada_header'>Pregunta {this.props.numero}</Card.Header>
      <Card.Body>
          <p>{this.props.enunciado}</p>
          <ol type = "A"> {options} </ol>

      </Card.Body>
      <Card.Footer>
        <OverlayTrigger
          key='top'
          placement='top'
          overlay={
            <Tooltip>{this.props.correcta}</Tooltip>
          }
        >
          <Button variant="secondary">Mostrar respuesta</Button>
        </OverlayTrigger>
      </Card.Footer>

    </Card>
    )
  }
}


class ScrollerResultados extends React.Component{
  constructor(props){
    super(props)
    this.state={
      numero_preguntas_encontradas: 0,
      array_card_preguntas: [],
      adding_components: false
    }
  }


  refreshPreguntasEncontradas(){
    var num_resultados = this.props.estado.resultados.length
    var array_resultados = this.props.estado.resultados
    this.setState({numero_preguntas_encontradas: num_resultados})
    var array_preguntas_aux = []
    for (var i = 0; i < num_resultados; i++) {
    	array_preguntas_aux.push(<CardPregunta numero={i} enunciado={array_resultados[i].enunciado} correcta={array_resultados[i].verdadera} respuestas={array_resultados[i].respuestas} key={"pregunta-" + i} />);
    }
    this.setState({array_card_preguntas: array_preguntas_aux})
  }

  render(){
    return(
      <Card id='search_result_card'>
        <Card.Header id='card_header' > Resultados:  {this.state.numero_preguntas_encontradas}</Card.Header>
        <Card.Body id='card_body_result_container'>
          <Container fluid='true'>
            <Row top="xs">
              <Col id='search_result_container'>
                  <LazyLoad once>
                      <React.Fragment>
                       {this.state.array_card_preguntas.map(pregunta => (
                         <React.Fragment key={pregunta.props.numero}>
                           <CardPregunta numero={pregunta.props.numero} enunciado={pregunta.props.enunciado} respuestas={pregunta.props.respuestas} correcta={pregunta.props.correcta}/>
                         </React.Fragment>
                       ))}
                     </React.Fragment>
                 </LazyLoad>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    )
  }
}

export default ScrollerResultados