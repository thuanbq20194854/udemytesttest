import { formatCurrency } from "@/utils";
import RatingStar from "./RatingStar";
import { Link } from "react-router-dom";
import { CourseShow } from "@/models";

interface Props {
    course: CourseShow;
}

function CourseCard({ course }: Props) {
    return (
        <div>
            <div className="border-[1px]">
                <img
                    src={
                        course.image
                            ? course.image
                            : "https://s.udemycdn.com/course/200_H/placeholder.jpg"
                    }
                    alt=""
                    className=""
                    height={288}
                />
            </div>

            <div className="ud-heading-md ellipse-2-lines mt-2">
                <Link
                    to="/course/123123123"
                    className="after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']"
                >
                    {course.title}
                </Link>
            </div>
            <div className="ellipse-1-line ud-text-xs mt-2">
                {course.user.name}
            </div>

            <div className="ud-text-xs courses-center mt-4 flex">
                <RatingStar averageStar={course.averageReview} />
                <span className="ml-2">{`(${course.countReview})`}</span>
            </div>

            <div className="ud-heading-md mt-4">
                {formatCurrency(course.price?.value ?? 0)}
            </div>
        </div>
    );
}

export default CourseCard;
