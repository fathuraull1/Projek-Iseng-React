import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const FooterCompo = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold"> Movie Series</h3>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 812-9657-6635</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope-open"></i>
                <p className="m-0">movieseries@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col">
            <h5 className="fw-bold"> Menu </h5>
            <Link to=""> Home <i class="fa-solid fa-house-chimney-window"></i></Link>
            <Link to="trending"> Trending Movie <i class="fa-solid fa-ticket"></i></Link>
            <Link to="action"> Action Movie <i class="fa-solid fa-ticket"></i></Link>
            <Link to="horor"> Horor Movie <i class="fa-solid fa-ticket"></i></Link>
          </Col>
          <Col lg="4">
            <h5 className="fw-bold mb-2"> Sosial Media </h5>
            <div className="find">
              <input type="text" placeholder=""/>
              <button className="btn btn-danger rounded-end rounded-0"><i class="fa-solid fa-magnifying-glass"></i></button> 
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} By <span>Fathur Rachman</span></p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterCompo