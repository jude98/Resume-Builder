import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div`
  clear: right;
  margin: 10px;
  border: 2px solid black;
  padding: 20px;
`;

const Name = styled.p`
  margin: 0;
  padding: 10px;
  font-size: 35px;
  font-weight: 700;
  color: #ffffff;
`;

const Heading = styled.h3`
  color: #485e71;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: right;
`;

const SubHeading = styled.h4`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
`;

const SubData = styled.div`
  margin-top: 10px;
`;

const LineBreak = styled.hr`
  margin-top: 40px;
  height: 2px;
  border: 0;
  box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0.5);
`;

const RowStyled = styled(Row)`
  margin-bottom: 5px;
`;

const ResumeTemplate = (props) => {
  const { resumeData } = props || {};

  const getSkills = () => {
    const skills = resumeData.skills.join(", ");
    return skills;
  };
  return (
    <Container>
      <Row>
        <Col md={{ span: 4 }}>
          Phone: {resumeData.phone} <br /> Email : {resumeData.email}
        </Col>
        <Col md={{ span: 2, offset: 6 }} style={{ wordWrap: "break-word" }}>
          {resumeData.address}
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#485E71",
          margin: "20px 0 20px 0",
        }}
      >
        <Col md={{ span: 12 }}>
          <Name>{resumeData.name}</Name>
        </Col>
      </Row>
      {resumeData.objective && (
        <>
          <Row>
            <Col md={2}>
              <Heading>Objective</Heading>
            </Col>
            <Col md={{ span: 9, offset: 1 }}>{resumeData.objective}</Col>
          </Row>
          <LineBreak />
        </>
      )}
      <Row>
        <Col md={2}>
          <Heading>Skills</Heading>
        </Col>
        <Col md={{ span: 9, offset: 1 }}>{getSkills()}</Col>
      </Row>
      <LineBreak />
      <Row>
        <Col md={2}>
          <Heading>Education</Heading>
        </Col>
        <Col md={{ span: 9, offset: 1 }}>
          {resumeData.education && resumeData.education.length
            ? resumeData.education.map((eachEducation, i) => (
                <>
                  <SubHeading>Education {i + 1}</SubHeading>
                  <SubData>
                    <RowStyled>
                      <Col md={{ span: 3 }}>Institution :</Col>
                      <Col md={{ span: 9 }}>{eachEducation.institution}</Col>
                    </RowStyled>
                    <RowStyled>
                      <Col md={{ span: 3 }}>Degree :</Col>
                      <Col md={{ span: 9 }}>{eachEducation.degree}</Col>
                    </RowStyled>
                    <RowStyled>
                      <Col md={{ span: 3 }}>CGPA (on 10) :</Col>
                      <Col md={{ span: 9 }}>{eachEducation.cgpa}</Col>
                    </RowStyled>
                    <RowStyled>
                      <Col md={{ span: 3 }}>Year of Passout :</Col>
                      <Col md={{ span: 9 }}>{eachEducation.passout}</Col>
                    </RowStyled>
                  </SubData>
                </>
              ))
            : null}
        </Col>
      </Row>
      <LineBreak />
      <Row>
        <Col md={2}>
          <Heading>Experience</Heading>
        </Col>
        <Col md={{ span: 9, offset: 1 }}>
          {resumeData.experience && resumeData.experience.length
            ? resumeData.experience.map((eachExperience, i) => (
                <>
                  <SubHeading>Experience {i + 1}</SubHeading>
                  <SubData>
                    <RowStyled>
                      <Col md={{ span: 3 }}>Industry :</Col>
                      <Col md={{ span: 9 }}>{eachExperience.industry}</Col>
                    </RowStyled>
                    <RowStyled>
                      <Col md={{ span: 3 }}>Total Experience :</Col>
                      <Col md={{ span: 9 }}>{eachExperience.yearofexp}</Col>
                    </RowStyled>
                    <RowStyled>
                      <Col md={{ span: 3 }}>Role :</Col>
                      <Col md={{ span: 9 }}>{eachExperience.role}</Col>
                    </RowStyled>
                    <RowStyled>
                      <Col md={{ span: 3 }}>Tasks :</Col>
                      <Col md={{ span: 9 }}>{eachExperience.tasks}</Col>
                    </RowStyled>
                  </SubData>
                </>
              ))
            : null}
        </Col>
      </Row>
      {resumeData.links && (
        <>
          <LineBreak />
          <Row>
            <Col md={2}>
              <Heading>Project Links</Heading>
            </Col>
            <Col md={{ span: 9, offset: 1 }}>{resumeData.links}</Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default ResumeTemplate;
