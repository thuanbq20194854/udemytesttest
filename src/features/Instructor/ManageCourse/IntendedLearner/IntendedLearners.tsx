import { Skeleton } from "@/components/ui/skeleton";
import { Course } from "@/models";
import IntendedLearnersForm from "./IntendedLearnersForm";


interface IProps {
    course? : Course,
    setCourse: 
}
function IntendedLearners() {
    return !course ? (
        <Skeleton className="mx-auto h-96 w-96 rounded-md" />
    ) : (
        <IntendedLearnersForm course={course} />
    );
}

export default IntendedLearners;
