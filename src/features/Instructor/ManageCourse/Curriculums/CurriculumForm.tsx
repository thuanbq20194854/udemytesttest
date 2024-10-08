import { Curriculum } from "@/models";
import AddSectionForm from "./AddSectionForm";
import { CiFileOn } from "react-icons/ci";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

interface IProps {
    curriculums: Curriculum[];
}

function CurriculumForm({ curriculums }: IProps) {
    return (
        <div>
            <div className="border-2">
                <div className="group flex items-center gap-1 px-[8px] py-[19px]">
                    <span className="font-bold">Section 1:</span>
                    <CiFileOn className="ml-2" /> <span>Introduction</span>
                    <div className="bg-red flex items-center gap-1">
                        <MdEdit
                            size={20}
                            className="hidden cursor-pointer group-hover:block"
                        />
                        <MdDeleteOutline
                            size={20}
                            className="hidden cursor-pointer group-hover:block"
                        />
                    </div>
                </div>
                <div></div>
            </div>
            <AddSectionForm />
        </div>
    );
}

export default CurriculumForm;
