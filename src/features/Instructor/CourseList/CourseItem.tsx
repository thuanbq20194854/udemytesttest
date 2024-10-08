import { Progress } from "@/components/ui/progress";

import { REVIEW_INIT_STATUS, REVIEW_VERIFY_STATUS } from "@/constants";
import { Course } from "@/models";
import { NavLink } from "react-router-dom";

interface IProps {
    courseItem: Course;
}

function CourseItem({ courseItem }: IProps) {
    return (
        <div className="group flex cursor-pointer items-center">
            <div className="h-[118px] w-[118px]">
                <img
                    src={
                        courseItem.image ??
                        "https://s.udemycdn.com/course/200_H/placeholder.jpg"
                    }
                    alt=""
                    className="object-cover"
                />
            </div>

            <div className="relative flex flex-1 items-center p-4">
                <div className="h-[118px] w-[30%] flex-col">
                    <div className="">
                        <NavLink
                            to={`/instructor/course-management/${courseItem.id}`}
                        >
                            {courseItem.title}
                        </NavLink>
                    </div>
                    <div className="">
                        <span
                            className={
                                courseItem.reviewStatus === REVIEW_INIT_STATUS
                                    ? `font-bold`
                                    : undefined
                            }
                        >
                            Draft
                        </span>
                        <span
                            className={`${
                                courseItem.reviewStatus === REVIEW_VERIFY_STATUS
                                    ? `font-bold`
                                    : undefined
                            } ml-2`}
                        >
                            Public
                        </span>
                    </div>
                </div>

                <div className="flex flex-1 items-center">
                    <p className="font-bold">Finish your course</p>
                    <Progress value={60} className="ml-4 w-[50%]" />
                </div>

                <div className="absolute left-0 top-0 hidden h-full w-full bg-[#ffffffe6] group-hover:block">
                    <div className="flex h-full w-full items-center justify-center font-bold">
                        Edit / manage course
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseItem;
