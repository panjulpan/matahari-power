import { Modal, Button, Container, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useMediaQuery } from "react-responsive";

const MyVerticallyCenteredModal = (props) => {
  const [selectDate, setSelectDate] = useState({
    start: new Date(),
    end: new Date(),
  });

  // const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Download Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col style={{ marginBottom: isMobile ? 15 : 0 }}>
              <p>Start Date: </p>
              <DatePicker
                selected={selectDate.start}
                onChange={(date) =>
                  setSelectDate({ ...selectDate, start: date })
                }
                style={{ borderRadius: 10, height: "50%" }}
              />
            </Col>
            <Col style={{ marginBottom: isMobile ? 15 : 0 }}>
              <p>End Date:</p>
              <DatePicker
                selected={selectDate.end}
                onChange={(date) => setSelectDate({ ...selectDate, end: date })}
                style={{ borderRadius: 10, height: "50%" }}
              />
            </Col>
            <Col style={{ display: "flex", alignItems: "flex-end" }}>
              <Button variant="primary" onClick={props.onHide}>
                Download
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
