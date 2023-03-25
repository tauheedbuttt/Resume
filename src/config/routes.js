import Resume from "../features/resume/Resume";
import CoverLetter from "../features/cover/CoverLetter";

export const protectedRoutes = [
]

export const publicRoutes = [
    { path: '/resume', element: <Resume /> },
    { path: '/cover-letter', element: <CoverLetter /> }
]