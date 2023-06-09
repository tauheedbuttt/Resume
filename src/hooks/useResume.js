import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { db } from "../config/firebase";
import { setContact, setEducation, setExperience, setHeader, setProjects, setSkills } from '../features/resume/slice';

export default () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const fetchData = (collection, action, cb) => {
        db.collection(collection).onSnapshot((snapshot) => {
            const data = snapshot.docs.map((item) => { return { ...item.data(), id: item.id } });
            dispatch(action(data))
            if (cb) cb()
        })
    }
    const fetchResume = async () => {
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
        setLoading(true);
        collections.forEach((value, index) => fetchData(value.collection, value.action, index != collections?.length - 1 ? null : () => setLoading(false)));
    }

    return {
        loading,
        fetchResume
    };
}