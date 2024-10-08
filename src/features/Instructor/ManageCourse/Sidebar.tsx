import { Button } from "@/components/ui/button";
import { topicCourseManager } from "@/constants";
import { GoCheckCircle, GoCircle } from "react-icons/go";
import { NavLink, useParams } from "react-router-dom";

function Sidebar() {
    const { courseId } = useParams();
    return (
        <div className="min-w-[264px] max-w-[286px] pb-8 pr-6 pt-8">
            {topicCourseManager.map((sidebarItem, parentIndex) => (
                <div key={parentIndex}>
                    <p className="mb-2 font-bold">{sidebarItem.title}</p>

                    {sidebarItem.children.map((childItem, index) => (
                        <div
                            className="relative mb-4 flex items-center hover:bg-[#b6babd11]"
                            key={index}
                        >
                            {location.pathname.includes(childItem.path) ? (
                                <GoCheckCircle size={20} />
                            ) : (
                                <GoCircle size={20} />
                            )}
                            <span className="ml-2 text-[16px]">
                                <NavLink
                                    to={`/instructor/course/${courseId}/manage/${childItem.path}`}
                                >
                                    {childItem.title}
                                </NavLink>
                            </span>
                        </div>
                    ))}
                </div>
            ))}

            <Button>Submit for Review</Button>
        </div>
    );
}

export default Sidebar;
