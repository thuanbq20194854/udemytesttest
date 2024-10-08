import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CourseManangement from "./pages/CourseManangement";
import InstructorLayout from "./layouts/InstructorLayout";
import InstructorCourses from "./pages/InstructorCourses";
import SignUpPage from "./pages/SignUpPage";
import InsPerformance from "./pages/InsPerformance";
import Communication from "./pages/Communication";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={MainLayout}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                </Route>

                <Route path="/instructor" Component={InstructorLayout}>
                    <Route path="courses" element={<InstructorCourses />} />
                    <Route path="performance" element={<InsPerformance />} />
                    <Route path="communication" element={<Communication />} />
                </Route>

                <Route
                    path="/instructor/course/:courseId/manage/:content"
                    element={<CourseManangement />}
                />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
