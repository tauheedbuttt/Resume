import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
  name: 'resume',
  initialState:{
    resume: {
      contact: {},
      education: {},
      experience: {},
      header: {},
      projects: {},
      skills: {},
    }
  },
  reducers: {
    setContact: (state, action) => {
      state.resume.contact = action.payload
    },
    setEducation: (state, action) => {
      state.resume.education = action.payload
    },
    setExperience: (state, action) => {
      state.resume.experience = action.payload
    },
    setHeader: (state, action) => {
      state.resume.header = action.payload
    },
    setProjects: (state, action) => {
      state.resume.projects = action.payload
    },
    setSkills: (state, action) => {
      state.resume.skills = action.payload
    },
  }
})

export const {setContact, setEducation, setExperience, setHeader, setProjects, setSkills} = resumeSlice.actions;
export default resumeSlice.reducer