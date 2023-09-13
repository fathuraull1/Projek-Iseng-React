import { Container, Row, Col  } from "react-bootstrap";
import { kelasTerbaru} from "../data/index";


const ActionPage = () => {
  return (
    <div className="action-page min-vh-100">
        <Container >
          <Row>
            <Col>
            <h1 className="text-center fw-bold">
              Action Movie 
            </h1>
            <p className="text-center fw-bold">
              List Movie Action Terkini
            </p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return(
                <Col key={kelas.id}>
                  <img src={kelas.image} alt="unplash.com" className="w-100 mb-5 rounded-top"/>
                  <div className="star mb-2 px-1">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-3 px-2">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between">
                    <button className="btn btn-danger rounded-1 mb-xs-0 mb-2"onClick={() => navigate("/")}> Watch Trailer <i class="fa-sharp fa-solid fa-tv fa-shake"></i></button>
                    <button className="btn btn-outline-success rounded-1 mb-xs-0 mb-2"> Buy VIP <i class="fa-solid fa-crown fa-fade"></i></button>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
    </div>
  )
}

export default ActionPage