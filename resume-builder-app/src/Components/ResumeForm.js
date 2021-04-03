import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import styled from "styled-components";

const InputLabelRequired = styled.label`
  padding-right: 20px;
  white-space: break-spaces;
  display: inline-block;
  color: #2a2d37;
  size: 14px;
  line-height: 19px;
  font-weight: 400;
  &:after {
    color: #df2e2e;
    font-size: 14px;
    line-height: 1;
    content: "*";
    margin: 0 8px 0 8px;
  }
`;

const InputLabel = styled.label`
  padding-right: 20px;
  white-space: break-spaces;
  display: inline-block;
  color: #2a2d37;
  size: 14px;
  line-height: 19px;
  font-weight: 400;
`;

const ButtonStyled = styled(Button)`
  float: right;
  margin: 25px;
`;

const ResumeForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
  };

  const onChangeField = (e) => {
    console.log(e.target.id, e.target.value);
  };

  return (
    <div style={{ padding: "50px" }}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <ButtonStyled variant="primary" type="submit">
          SAVE RESUME
        </ButtonStyled>
        <Form.Row style={{ clear: "both" }}>
          <Form.Group controlId="name" as={Col} md={6}>
            <Form.Label>
              <InputLabelRequired>Name</InputLabelRequired>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Full Name"
              onChange={onChangeField}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="email" as={Col} md={6}>
            <Form.Label>
              <InputLabelRequired>Email</InputLabelRequired>
            </Form.Label>
            <Form.Control required type="text" placeholder="Enter Email id" />
            <Form.Control.Feedback type="invalid">
              Please enter your email
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default ResumeForm;
