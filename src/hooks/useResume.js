import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { db } from "../config/firebase";
import { setContact, setEducation, setExperience, setHeader, setProjects, setSkills } from '../features/resume/slice';

export default () => {
    const dispatch = useDispatch();

    const fetchData = (collection, action, cb) => {
        db.collection(collection).onSnapshot((snapshot) => {
            const data = snapshot.docs.map((item) => { return { ...item.data(), id: item.id } });
            dispatch(action(data))
            if (cb) cb()
        })
    }
    const fetchResume = async (cb) => {
        const collections = [
            {
                collection: 'Contact',
                action: setContact
            },
            {
                collection: 'Education',
                action: setEducation
            },
            {
                collection: 'Experience',
                action: setExperience
            },
            {
                collection: 'Header',
                action: setHeader
            },
            {
                collection: 'Projects',
                action: setProjects
            },
            {
                collection: 'Skills',
                action: setSkills
            },
        ];
        console.log(collections)
        collections.forEach((value, index) => fetchData(value.collection, value.action, cb));
    }

    return { fetchResume };
}