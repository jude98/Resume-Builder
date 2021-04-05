import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ResumeForm from "./Resume/ResumeForm";
import { Row, Col, Button, Toast } from "react-bootstrap";
import { saveNewResume } from "../actions/ResumeActions";
import ResumeTemplate from "./Resume/ResumeTemplate";
import styled from "styled-components";

const ToastStyledError = styled(Toast)`
  font-size: 20px;
  position: absolute;
  top: 10vh;
  left: 50%;
  height: 10vh;
  background-color: #ff0000;
  color: #ffffff;
  text-align: center;
`;

const ToastStyledSuccess = styled(Toast)`
  font-size: 20px;
  position: absolute;
  top: 10vh;
  left: 50%;
  height: 10vh;
  background-color: green;
  color: #ffffff;
  text-align: center;
`;

const formInitialData = {
  name: "",
  email: "",
  address: "",
  phone: "",
  objective: "",
  education: [],
  experience: [],
  skills: [],
  links: "",
};

const skillsOptions = [
  { value: "python", label: "python" },
  { value: "javaScript", label: "javaScript" },
  { value: "C", label: "C" },
  { value: "Java", label: "Java" },
];

const CreateResume = (props) => {
  const allResumes = useSelector((state) => state.allResumes);
  const { actionSelected, currentResume } = props || {};
  const disptach = useDispatch();
  const [resumeData, setResumeData] = useState(formInitialData);
  const [currentSkills, setCurrentSkills] = useState([]);
  const [currentEducation, setCurrentEducation] = useState({});
  const [currentExperience, setCurrentExperience] = useState({});
  const [validFields, setValidFields] = useState({
    name: true,
    email: true,
    phone: true,
    education: true,
    experience: true,
    skills: true,
  });
  const [resumeSuccess, setResumeSuccess] = useState(false);
  const [resumeError, setResumeError] = useState(false);
  const [viewType, setViewType] = useState("EDIT_VIEW");

  useEffect(() => {
    if (actionSelected && actionSelected === "EDIT") {
      // setResumeData({ ...formInitialData, education: [], experience: [] })
      setResumeData(currentResume);
      const skills = currentResume.skills.map((skill) => ({
        value: skill,
        label: skill,
      }));
      setCurrentSkills(skills);
    } else {
      setResumeData({
        ...formInitialData,
        education: [],
        experience: [],
        id: allResumes.length + 1,
      });
    }
  }, [actionSelected, currentResume]);

  const handleSkillsAdd = (skills) => {
    setCurrentSkills(skills);
    const skillsReduced = skills.reduce((acc, skill) => {
      return [...acc, skill.label];
    }, []);
    setResumeData({ ...resumeData, skills: skillsReduced });
    setValidFields({ ...validFields, skills: true });
  };

  const onCreateOption = (skill) => {
    const newSkill = { value: skill, label: skill };
    skillsOptions.push(newSkill);
    setCurrentSkills([...currentSkills, newSkill]);
    const { skills } = resumeData;
    skills.push(skill);
    setResumeData({ ...resumeData, skills });
    setValidFields({ ...validFields, skills: true });
  };

  const validateData = () => {
    let validated = false;
    let validatedFields = {};
    Object.entries(resumeData).forEach(([key, value]) => {
      if (!value || (Array.isArray(value) && !value.length)) {
        if (key !== "objective" && key !== "address" && key !== "links") {
          validatedFields = { ...validatedFields, [key]: false };
          validated = true;
        }
      }
    });
    return {
      validated,
      validatedFields,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { validated, validatedFields } = validateData();
    if (!validated) {
      disptach(saveNewResume(resumeData));
      setResumeSuccess(true);
      // if (!actionSelected) {
      //   setResumeData({ ...formInitialData, education: [], experience: [] });
      //   setCurrentExperience([]);
      //   setCurrentEducation([]);
      //   setCurrentSkills([]);
      // }
    } else {
      setResumeError(true);
      setValidFields({ ...validFields, ...validatedFields });
    }
  };

  const onChangeField = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    const updatedData = { ...resumeData, [id]: value };
    setResumeData(updatedData);
    setValidFields({ ...validFields, [id]: true });
  };

  const onChangeEducation = (e, index) => {
    e.preventDefault();
    const { id, value, name } = e.target;
    if (index >= 0) {
      const { education } = resumeData;
      const updatedEducation = education.map((each, i) => {
        if (i === index) {
          return {
            ...each,
            [name]: value,
          };
        }
        return each;
      });
      setResumeData({ ...resumeData, education: updatedEducation });
      return;
    }
    setCurrentEducation({ ...currentEducation, [id]: value });
    setValidFields({ ...validFields, education: true });
  };

  const onAddEducation = () => {
    const { education } = resumeData;
    if (
      !currentEducation.institution ||
      !currentEducation.degree ||
      !currentEducation.cgpa ||
      !currentEducation.passout
    )
      setValidFields({ ...validFields, education: false });
    else {
      education.push(currentEducation);
      setResumeData({ ...resumeData, education });
      setCurrentEducation({});
    }
  };

  const onRemoveEducation = (index) => {
    const { education } = resumeData;
    education.splice(index, 1);
    setResumeData({ ...resumeData, education });
  };

  const onChangeExperience = (e, index) => {
    e.preventDefault();
    const { id, value, name } = e.target;
    if (index >= 0) {
      const { experience } = resumeData;
      const updatedExperience = experience.map((each, i) => {
        if (i === index) {
          return {
            ...each,
            [name]: value,
          };
        }
        return each;
      });
      setResumeData({ ...resumeData, experience: updatedExperience });
      return;
    }
    setCurrentExperience({ ...currentExperience, [id]: value });
    setValidFields({ ...validFields, experience: true });
  };

  const onAddExperience = () => {
    const { experience } = resumeData;
    if (
      !currentExperience.industry ||
      !currentExperience.yearofexp ||
      !currentExperience.role ||
      !currentExperience.tasks
    )
      setValidFields({ ...validFields, experience: false });
    else {
      experience.push(currentExperience);
      setResumeData({ ...resumeData, experience });
      setCurrentExperience({});
    }
  };

  const onRemoveExperience = (index) => {
    const { experience } = resumeData;
    experience.splice(index, 1);
    setResumeData({ ...resumeData, experience });
  };

  const onClickView = () => {
    const { validated, validatedFields } = validateData();
    if (!validated) {
      disptach(saveNewResume(resumeData));
      setResumeSuccess(true);
      setViewType("RESUME_VIEW");
      if (
        props.changeTableLink &&
        typeof props.changeTableLink === "function"
      ) {
        props.changeTableLink(true);
      }
    } else {
      setValidFields({ ...validFields, ...validatedFields });
      setResumeError(true);
    }
  };

  const onClickEdit = () => {
    if (props.changeTableLink && typeof props.changeTableLink === "function") {
      props.changeTableLink(false);
    }
    setViewType("EDIT_VIEW");
  };

  return (
    <>
      <ToastStyledError
        onClose={() => setResumeError(false)}
        show={resumeError}
        delay={2000}
        autohide
      >
        <Toast.Body style={{ padding: "20px" }}>
          Fill all the fields in Resume
        </Toast.Body>
      </ToastStyledError>
      <ToastStyledSuccess
        onClose={() => setResumeSuccess(false)}
        show={resumeSuccess}
        delay={2000}
        autohide
      >
        <Toast.Body style={{ padding: "20px" }}>
          Resume Saved Successfully
        </Toast.Body>
      </ToastStyledSuccess>
      {viewType === "EDIT_VIEW" && (
        <Row>
          <Col md={6}>
            <ResumeForm
              resumeData={resumeData}
              currentSkills={currentSkills}
              skillsOptions={skillsOptions}
              currentEducation={currentEducation}
              currentExperience={currentExperience}
              validFields={validFields}
              handleSkillsAdd={handleSkillsAdd}
              onCreateOption={onCreateOption}
              handleSubmit={handleSubmit}
              onChangeField={onChangeField}
              onChangeEducation={onChangeEducation}
              onAddEducation={onAddEducation}
              onRemoveEducation={onRemoveEducation}
              onChangeExperience={onChangeExperience}
              onAddExperience={onAddExperience}
              onRemoveExperience={onRemoveExperience}
            />
          </Col>
          <Col md={6} style={{ marginTop: "60px" }}>
            <Button
              variant="primary"
              style={{ float: "right", margin: "20px" }}
              onClick={onClickView}
            >
              VIEW RESUME
            </Button>
            <ResumeTemplate resumeData={resumeData} />
          </Col>
        </Row>
      )}
      {viewType === "RESUME_VIEW" && (
        <>
          <Row>
            <Col md={{ span: 4, offset: 8 }}>
              <Button
                variant="primary"
                style={{ float: "right", margin: "20px" }}
                onClick={onClickEdit}
                // onClick={() => setViewType("EDIT_VIEW")}
              >
                EDIT RESUME
              </Button>
            </Col>
          </Row>
          <ResumeTemplate resumeData={resumeData} />
        </>
      )}
    </>
  );
};

export default CreateResume;
