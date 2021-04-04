import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import CreatableSelect from "react-select/creatable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

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

const SubmitButtonStyled = styled(Button)`
  float: right;
  margin: 25px;
`;

const LinkButtonStyled = styled(Button)`
  float: right;
  text-decoration: none !important;
  font-size: 13px;
`;

const Error = styled.div`
  margin-top: 5px;
  color: red;
  font-size: 14px;
  display: flex;
`;

const ErrorMsg = styled.p`
  margin: -2px 0 0 5px;
`;

const ResumeForm = (props) => {
  const {
    skillsOptions,
    currentSkills,
    resumeData,
    validFields,
    currentEducation,
    currentExperience,
    handleSkillsAdd,
    onCreateOption,
    handleSubmit,
    onChangeField,
    onChangeEducation,
    onAddEducation,
    onRemoveEducation,
    onChangeExperience,
    onAddExperience,
    onRemoveExperience,
  } = props;

  return (
    <div style={{ padding: "50px" }}>
      <Form>
        <SubmitButtonStyled variant="primary" onClick={handleSubmit}>
          SAVE RESUME
        </SubmitButtonStyled>
        <Form.Row style={{ clear: "both" }}>
          <Form.Group controlId="name" as={Col} md={12}>
            <Form.Label>
              <InputLabelRequired>Name</InputLabelRequired>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Full Name"
              onChange={onChangeField}
            />
            {!validFields.name && (
              <Error>
                <FontAwesomeIcon icon={faExclamationCircle} />
                <ErrorMsg>Please enter your name</ErrorMsg>
              </Error>
            )}
          </Form.Group>
          <Form.Group controlId="email" as={Col} md={12}>
            <Form.Label>
              <InputLabelRequired>Email</InputLabelRequired>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email id"
              onChange={onChangeField}
            />
            {!validFields.email && (
              <Error>
                <FontAwesomeIcon icon={faExclamationCircle} />
                <ErrorMsg>Please enter your email id</ErrorMsg>
              </Error>
            )}
          </Form.Group>
          <Form.Group controlId="phone" as={Col} md={12}>
            <Form.Label>
              <InputLabelRequired>Phone</InputLabelRequired>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              onChange={onChangeField}
            />
            {!validFields.phone && (
              <Error>
                <FontAwesomeIcon icon={faExclamationCircle} />
                <ErrorMsg>Please enter your phone number</ErrorMsg>
              </Error>
            )}
          </Form.Group>
          <Form.Group controlId="address" as={Col} md={12}>
            <Form.Label>
              <InputLabel>Address</InputLabel>
            </Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              placeholder="Enter Address"
              onChange={onChangeField}
            />
          </Form.Group>
          <Form.Group controlId="education" as={Col} md={12}>
            <Form.Label>
              <InputLabelRequired>Education</InputLabelRequired>
            </Form.Label>
            <Form.Group controlId="institution">
              <Form.Control
                value={currentEducation.institution || ""}
                type="text"
                placeholder="Enter Institution/ College name"
                onChange={onChangeEducation}
              />
            </Form.Group>
            <Form.Group controlId="degree">
              <Form.Control
                value={currentEducation.degree || ""}
                type="text"
                placeholder="Enter degree enrolled"
                onChange={onChangeEducation}
              />
            </Form.Group>
            <Form.Group controlId="cgpa">
              <Form.Control
                value={currentEducation.cgpa || ""}
                type="text"
                placeholder="CGPA on the scale 10"
                onChange={onChangeEducation}
              />
            </Form.Group>
            <Form.Group controlId="passout">
              <Form.Control
                value={currentEducation.passout || ""}
                type="text"
                placeholder="Enter passout year"
                onChange={onChangeEducation}
              />
            </Form.Group>
            {!validFields.education && (
              <Error>
                <FontAwesomeIcon icon={faExclamationCircle} />
                <ErrorMsg>Please enter all education details</ErrorMsg>
              </Error>
            )}
            <LinkButtonStyled variant="link" onClick={onAddEducation}>
              Add Education
            </LinkButtonStyled>
            {resumeData.education && resumeData.education.length
              ? resumeData.education.map((education, i) => (
                  <div key={i}>
                    <Form.Group controlId={`institution${i}`}>
                      <Form.Control
                        name="institution"
                        value={education.institution || ""}
                        type="text"
                        placeholder="Enter Institution/ College name"
                        onChange={(e) => onChangeEducation(e, i)}
                      />
                    </Form.Group>
                    <Form.Group controlId={`degree${i}`}>
                      <Form.Control
                        name="degree"
                        value={education.degree || ""}
                        type="text"
                        placeholder="Enter degree enrolled"
                        onChange={(e) => onChangeEducation(e, i)}
                      />
                    </Form.Group>
                    <Form.Group controlId={`cgpa${i}`}>
                      <Form.Control
                        name="cgpa"
                        value={education.cgpa || ""}
                        type="text"
                        placeholder="CGPA on the scale 10"
                        onChange={(e) => onChangeEducation(e, i)}
                      />
                    </Form.Group>
                    <Form.Group controlId={`passout${i}`}>
                      <Form.Control
                        name="passout"
                        value={education.passout || ""}
                        type="text"
                        placeholder="Enter passout year"
                        onChange={() => onChangeEducation(i)}
                      />
                    </Form.Group>
                    <LinkButtonStyled
                      variant="link"
                      style={{ color: "red" }}
                      onClick={(e) => onRemoveEducation(e, i)}
                    >
                      Remove Education
                    </LinkButtonStyled>
                  </div>
                ))
              : null}
          </Form.Group>
          <Form.Group controlId="experience" as={Col} md={12}>
            <Form.Label>
              <InputLabelRequired>Experience</InputLabelRequired>
            </Form.Label>
            <Form.Group controlId="industry">
              <Form.Control
                value={currentExperience.industry || ""}
                type="text"
                placeholder="Enter Industry/ Company name"
                onChange={onChangeExperience}
              />
            </Form.Group>
            <Form.Group controlId="yearofexp">
              <Form.Control
                value={currentExperience.yearofexp || ""}
                type="text"
                placeholder="Enter total years of experience"
                onChange={onChangeExperience}
              />
            </Form.Group>
            <Form.Group controlId="role">
              <Form.Control
                value={currentExperience.role || ""}
                type="text"
                placeholder="Enter your role on the industry"
                onChange={onChangeExperience}
              />
            </Form.Group>
            <Form.Group controlId="tasks">
              <Form.Control
                value={currentExperience.tasks || ""}
                type="text"
                as="textarea"
                placeholder="Enter day to day task on industry"
                onChange={onChangeExperience}
              />
            </Form.Group>
            {!validFields.experience && (
              <Error>
                <FontAwesomeIcon icon={faExclamationCircle} />
                <ErrorMsg>Please enter all experience details</ErrorMsg>
              </Error>
            )}
            <LinkButtonStyled variant="link" onClick={onAddExperience}>
              Add Experience
            </LinkButtonStyled>
            {resumeData.experience && resumeData.experience.length
              ? resumeData.experience.map((experience, i) => (
                  <div key={i}>
                    <Form.Group controlId={`industry${i}`}>
                      <Form.Control
                        name="industry"
                        value={experience.industry || ""}
                        type="text"
                        placeholder="Enter Industry/ Company name"
                        onChange={(e) => onChangeExperience(e, i)}
                      />
                    </Form.Group>
                    <Form.Group controlId={`yearofexp${i}`}>
                      <Form.Control
                        name="yearofexp"
                        value={experience.yearofexp || ""}
                        type="text"
                        placeholder="Enter total years of experience"
                        onChange={(e) => onChangeExperience(e, i)}
                      />
                    </Form.Group>
                    <Form.Group controlId={`role${i}`}>
                      <Form.Control
                        name="role"
                        value={experience.role || ""}
                        type="text"
                        placeholder="Enter your role on the industry"
                        onChange={(e) => onChangeExperience(e, i)}
                      />
                    </Form.Group>
                    <Form.Group controlId={`tasks${i}`}>
                      <Form.Control
                        name="tasks"
                        value={experience.tasks || ""}
                        type="text"
                        as="textarea"
                        placeholder="Enter day to day task on industry"
                        onChange={(e) => onChangeExperience(e, i)}
                      />
                    </Form.Group>
                    <LinkButtonStyled
                      variant="link"
                      style={{ color: "red" }}
                      onClick={onRemoveExperience}
                    >
                      Remove Experience
                    </LinkButtonStyled>
                  </div>
                ))
              : null}
          </Form.Group>
          <Form.Group controlId="skills" as={Col} md={12}>
            <Form.Label>
              <InputLabelRequired>Skills</InputLabelRequired>
            </Form.Label>
            <CreatableSelect
              isMulti
              value={currentSkills}
              options={skillsOptions}
              onChange={handleSkillsAdd}
              onCreateOption={onCreateOption}
            />
            {!validFields.skills && (
              <Error>
                <FontAwesomeIcon icon={faExclamationCircle} />
                <ErrorMsg>Please enter your skills</ErrorMsg>
              </Error>
            )}
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default ResumeForm;
