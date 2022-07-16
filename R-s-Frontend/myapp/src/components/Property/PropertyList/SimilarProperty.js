import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Col, Row } from "react-bootstrap";
function SimilarProperty(){
    <div>
    <h1>Similar Properties</h1>
    <div className="row">
      <div className="col-4">
        <Col className="mr-5">
          <Link to="/propertylist" className="link">
            <Card className="card-hover">
              <Card.Img variant="top" src="/assets/images/house6.jpg" />

              <Card.Body>
                <h5 className="card-title">Beautiful house</h5>
                <p className="card-text">preety house</p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </div>
      <div className="col-4">
        <Col className="mr-5">
          <Link to="/propertylist" className="link">
            <Card className="card-hover">
              <Card.Img variant="top" src="/assets/images/house6.jpg" />

              <Card.Body>
                <h5 className="card-title">Beautiful house</h5>
                <p className="card-text">preety house</p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </div>
    </div>
  </div>
}
export default SimilarProperty;