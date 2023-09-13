import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/index";
const FaqCompo = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
          <h2 className="text-center fw-bold">Top Comement</h2>
          </Col>
        </Row>
        <Row className=" row-cols-lg-2 row-cols-1 g-4 pt-4">
          {faq.map((comment) => {
            return(
              <Col key={comment.id}>
                <Accordion className="shadow-sm">
                  <Accordion.Item eventKey={comment.eventKey}>
                    <Accordion.Header>{comment.title}</Accordion.Header>
                      <Accordion.Body>
                        {comment.desc}
                      </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
              </Col>    
            );
          })}
          
        </Row>
    </Container>
    </div>
  )
}

export default FaqCompo