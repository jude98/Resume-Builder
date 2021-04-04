import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ResumeForm from "./Resume/ResumeForm";
import { saveNewResume } from "../actions/ResumeActions";

const formInitialData = {
  name: "",
  email: "",
  address: "",
  phone: "",
  education: [],
  experience: [],
  skills: [],
};

const skillsOptions = [
  { value: "python", label: "python" },
  { value: "javaScript", label: "javaScript" },
  { value: "C", label: "C" },
  { value: "Java", label: "Java" },
];

const CreateResume = () => {
  const resumeValues = useSelector((state) => state.resumeValues);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let validated = false;
    let validatedFields = {};
    Object.entries(resumeData).forEach(([key, value]) => {
      if (!value || (Array.isArray(value) && !value.length)) {
        console.log(key, value);
        validatedFields = { ...validatedFields, [key]: false };
        validated = true;
      }
    });
    if (!validated) disptach(saveNewResume(resumeData));
    else setValidFields({ ...validFields, ...validatedFields });
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
      console.log(index);
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
    console.log();
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

  return (
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
  );
};

export default CreateResume;
