import CustomPagination from "@/components/CustomPagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    AZ_FILTER,
    NEWEST_FILTER,
    OLDEST_FILTER,
    ZA_FILTER
} from "@/constants";
import CourseItem from "@/features/Instructor/CourseList/CourseItem";
import { Course } from "@/models";
import { useLayoutEffect, useState } from "react";

function InstructorCourses() {
    const [sortBy, setSortBy] = useState(NEWEST_FILTER);
    const [searchInput, setSearchInput] = useState("");

    const [paginationInfo, setPaginationInfo] = useState({
        totalItem: 50,
        totalPage: 10,
        size: 5,
    });

    const [currentPage, setCurrentPage] = useState(1);

    const [courses, setCourses] = useState<Course[]>([]);
    useLayoutEffect(() => {}, [sortBy, searchInput, currentPage]);

    const handleSortChange = (sort: string) => {
        setSortBy(+sort);
    };

    const handleInputChange = (value: string) => {
        setSearchInput(value);
    };

    return (
        <div className="text-black">
            <div className="ud-heading-serif-xxl p-[32px]">Courses</div>
            <div className="flex items-center px-[32px]">
                <div className="flex flex-1 items-center">
                    {/* <Command className="w-[250px]">
                        <CommandInput
                            className="w-[250px]"
                            placeholder="Search course by title..."
                            value={searchInput}
                            onValueChange={(value) => handleInputChange(value)}
                        />
                    </Command> */}
                    <Input
                        className="w-[250px] rounded-r-none"
                        placeholder="Search course by title..."
                        value={searchInput}
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                    <Button className="rounded-l-none" type="submit">
                        Search
                    </Button>

                    <div className="ml-4">
                        <Select onValueChange={handleSortChange}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={AZ_FILTER + ""}>
                                    A-Z
                                </SelectItem>
                                <SelectItem value={ZA_FILTER + ""}>
                                    Z-A
                                </SelectItem>
                                <SelectItem value={NEWEST_FILTER + ""}>
                                    NEWEST
                                </SelectItem>
                                <SelectItem value={OLDEST_FILTER + ""}>
                                    OLDEST
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <form className="justify-end">
                    <Button variant={"outline"}>Create New Course</Button>
                </form>
            </div>

            <div className="px-[32px]">
                {courses.map((courseItem) => (
                    <CourseItem courseItem={courseItem} />
                ))}
            </div>

            <div>
                {paginationInfo.totalPage >= 2 && (
                    <CustomPagination
                        totalPage={paginationInfo.totalPage}
                        currentPage={currentPage}
                        onPageChange={(value) => setCurrentPage(value)}
                    />
                )}
            </div>
        </div>
    );
}

export default InstructorCourses;
