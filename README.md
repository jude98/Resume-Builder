# Resume-Builder
React App to automatically build a resume in a specific template by getting data from the user

[Live Demo of the app](https://jude98.github.io/Resume-Builder/) 🖇️

## About

This application is used to create resume for a given template with the datas collected from the user. 
It has mainly three pages : HOME, CREATE RESUME and EDIT/VIEW

#### HOME

The landing page of the application. There is routing to navigate through the nav links.

#### CREATE RESUME

The page for user to fill resume data in form. There are a set of mandatory and non-mandatory fields and only on filling mandatory fields, the form gets submited.
The live update of resume can be seen on right. The resume is not auto saving. Only gets saved when we click save button. Upon save validation happens. 
On the right side above the built resume, there is option for viewing, on click will save the resume (validate) and takes to view mode. From there we can switch to edit mode. 

**To note: Once on crerate mode, we cannot create another from there, it can only be used for editing or creating one resume. To create another resume, we have to navigate to other page and again click on create resume nav link.**

**DONOT FORGET TO SAVE THE RESUME BEFORE SWITCHING TABS**


#### EDIT/VIEW

This is a table view of all created resumes. Each row has action to view or edit resume. On click on each action on respective row, it will take to corresponding pages. On click on edit icon, we can edit the existing resume and on click on view icon, we can view the resume.

**While on edit or view mode gone from table view, the link on top "go to table view" takes back to table view**

**To note: There is no option implemented to download the resume to local, planning for next phase** 😃


