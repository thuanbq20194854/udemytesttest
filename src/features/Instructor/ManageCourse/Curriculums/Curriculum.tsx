import { Skeleton } from "@/components/ui/skeleton";
import CurriculumForm from "./CurriculumForm";
import { useCourseManagementContext } from "../ManageCourseContext";

function Curriculum() {
    const { course } = useCourseManagementContext();
    return !course ? (
        <Skeleton className="mx-auto h-96 w-96 rounded-md" />
    ) : (
        <CurriculumForm curriculums={course.curriculums} />
    );
}

export default Curriculum;
