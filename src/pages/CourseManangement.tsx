import { Button } from "@/components/ui/button";
import CurriculumSection from "@/features/Instructor/ManageCourse/Curriculums/Curriculum";
import IntendedLearners from "@/features/Instructor/ManageCourse/IntendedLearner/IntendedLearners";
import Sidebar from "@/features/Instructor/ManageCourse/Sidebar";
import { CourseServiceApi } from "@/services/apis";
import { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { Course, Curriculum } from "@/models";

function CourseManangement() {
    const { courseId, content } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [course, setCourse] = useState<Course | object>({});
    const [curriculums, setCurriculums] = useState<Curriculum[]>([]);

    const [courseNotFound, setCouseNotFound] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);

    useLayoutEffect(() => {
        if (!location.pathname.includes(content || "")) {
            navigate(`/instructor/course/${courseId}/manage/goals`);
        }

        const getCourse = async () => {
            try {
                const result = await CourseServiceApi.getCourseByID(
                    courseId ? +courseId : 0,
                );

                setCourse(result);
            } catch (e: any) {
                console.log(e);
                if (e.response.status === 404) {
                    setCouseNotFound(true);
                }
            }
        };

        const getCurriculums = async () => {
            try {
                const result =
                    await CourseServiceApi.getCurriCulumsByCourseByID(
                        courseId ? +courseId : 0,
                    );

                // update course curriculum
                setCourse((prev) => {
                    return {
                        ...prev,
                        curriculums: result.curriculum ?? [],
                    };
                });

                // setIsLoading(false);
            } catch (e: any) {
                console.log(e);
                if (e.response.status === 404) {
                    setCouseNotFound(true);
                }
            }
        };

        const fetchData = async () => {
            setIsLoading(true);
            await Promise.all([getCourse(), getCurriculums()]);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return courseNotFound ? (
        <NotFound />
    ) : (
        <div>
            {/* Header */}
            <div className="w-fullfixed top-0">
                <div className="flex items-center gap-2 bg-[#2d2f31] px-4 py-3 text-white shadow-lg">
                    <Button variant={"outline"} className="bg-transparent">
                        Back to courses
                    </Button>
                    <p className="font-bold">cours NAME</p>
                    <div className="bg-[#6a6f73] p-1 font-semibold uppercase text-[#f7f9fa]">
                        Draft
                    </div>
                    <div>0min of video content uploaded</div>

                    <Button
                        className="ml-auto justify-items-end"
                        variant={"secondary"}
                    >
                        Save
                    </Button>
                </div>
            </div>
            {/* Sidebar */}

            <div className="mx-3 flex px-6 pb-64 pt-8">
                <Sidebar />

                <div className="flex-1">
                    {location.pathname.includes("/manage/goals") && (
                        <IntendedLearners />
                    )}
                    {location.pathname.includes("/manage/curriculum") && (
                        <CurriculumSection />
                    )}
                </div>
            </div>

            {/* MainContent */}
        </div>
    );
}

export default CourseManangement;
