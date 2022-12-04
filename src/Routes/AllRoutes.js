import { createBrowserRouter } from "react-router-dom";
import AttendanceTable from "../Pages/AttendanceTable/AttendanceTable";
import LogIn from "../Pages/LogIn/LogIn";
import Names from "../Pages/SignUp/Names/Names";
import Password from "../Pages/SignUp/Password/Password";
import PhoneAndEmail from "../Pages/SignUp/PhoneAndEmail/PhoneAndEmail";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <LogIn></LogIn>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>,
        children: [
            {
                path: '/signup',
                element: <Names></Names>
            },
            {
                path: '/signup/phoneandemail',
                element: <PhoneAndEmail></PhoneAndEmail>
            },
            {
                path: '/signup/password',
                element: <Password></Password>
            }
        ]
    },
    {
        path: '/attendance',
        element: <AttendanceTable></AttendanceTable>
    }
])

export default router