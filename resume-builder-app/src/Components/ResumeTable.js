import React, { useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CreateResume from "../Components/CreateResume";
import ResumeTemplate from "../Components/Resume/ResumeTemplate";

const NoData = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #00aaff;
`;

const ButtonStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ResumeTable = () => {
  const allResumes = useSelector((state) => state.allResumes);
  const [actionSelected, setActionSelected] = useState("TABLE");
  const [currentResume, setCurrentResume] = useState({});

  const onClickEdit = (resume) => {
    setCurrentResume(resume);
    setActionSelected("EDIT");
  };

  const onClickView = (resume) => {
    setCurrentResume(resume);
    setActionSelected("VIEW");
  };

  return (
    <>
      {actionSelected === "EDIT" && (
        <>
          <ButtonStyled style={{ marginBottom: "-40px" }}>
            <Button variant="link" onClick={() => setActionSelected("TABLE")}>
              Click to go to table view
            </Button>
          </ButtonStyled>
          <CreateResume
            currentResume={currentResume}
            actionSelected={actionSelected}
          />
        </>
      )}
      {actionSelected === "VIEW" && (
        <>
          <ButtonStyled>
            <Button variant="link" onClick={() => setActionSelected("TABLE")}>
              Click to go to table view
            </Button>
          </ButtonStyled>
          <ResumeTemplate
            resumeData={currentResume}
            actionSelected={actionSelected}
          />
        </>
      )}
      {actionSelected === "TABLE" && (
        <Container style={{ marginTop: "50px" }}>
          {allResumes && allResumes.length === 0 ? (
            <NoData>No Resumes To Show</NoData>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Create On</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allResumes.map((resume) => (
                  <tr key={resume.id}>
                    <td>{resume.id}</td>
                    <td>{resume.name}</td>
                    <td>---</td>
                    <td>
                      <Actions>
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() => onClickEdit(resume)}
                        />
                        <FontAwesomeIcon
                          icon={faEye}
                          onClick={() => onClickView(resume)}
                        />
                      </Actions>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Container>
      )}
    </>
  );
};

export default ResumeTable;
