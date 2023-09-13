import { Container, Row, Col } from "react-bootstrap";
import AvengerImage from "../assets/img/kelas/avenger.jpg";
import { kelasTerbaru} from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqCompo from "../components/FaqCompo";
import { SliderCompo } from "../components/SliderCompo";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center mybg">
        <Container>
          <Row className="w-100 min-vh-100 header-box d-flex align-items-center"> 
            <Col lg="6">
            <h1 className="mb-lg-4 mb-2">
            Trendng Movie <br/> <span>Movie Series</span>
            </h1>
            <p className="mb-lg-4 mb-2">
              Deretan List Movie Trending Dari Jumlah View Di Minggu Ini
            </p>
            <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2" onClick={() => navigate("/horor")}>Lihat Trending <i class="fa-solid fa-film fa-bounce"></i></button>
            <button className="btn btn-outline-success btn-lg rounded-1 mb-xs-0 mb-2"> Buy VIP <i class="fa-solid fa-crown fa-fade"></i></button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
            <SliderCompo/>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="trending w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold">Deretan Trending Hari Ini</h1>
            <p className="text-center">Reset Berdasarkan Dari Banyak View</p>
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
          <Row>
            <Col className="text-center">
            <button className="btn btn-success rounded-5 btn-lg" onClick={() => navigate("/action")}> Lihat Semua Trending 
            <i class="fa-sharp fa-solid fa-film fa-bounce"></i></button>

            </Col>
          </Row>
        </Container>
      </div>

      {/* FAQ */}
          <FaqCompo/>
      {/* END FAQ */}
    </div>
  )
}

export default HomePage