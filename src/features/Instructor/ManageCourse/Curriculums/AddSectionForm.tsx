import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateSection } from "@/models";
import { CourseServiceApi } from "@/services/apis";
import { schemeCreateSection } from "@/validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";

function AddSectionForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateSection>({
        defaultValues: {
            title: "",
            description: "",
        },
        resolver: yupResolver(schemeCreateSection),
    });

    const [openForm, setOpenForm] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleCancel = () => {
        setOpenForm(false);
    };

    const onSubmit = async (formData: CreateSection) => {
        try {
            setLoading(true);

            const formSend: CreateSection = {
                ...formData,
                courseId: course.id,
            };
            // api
            const result = await CourseServiceApi.createCurriculum(formSend);

            console.log("result: ", result);

            // update course
            setCourse((prev) => {
                return {
                    ...prev,
                    curriculums: [...prev.curriculums, result],
                };
            });
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-4">
            {!openForm ? (
                <Button variant={"outline"} onClick={() => setOpenForm(true)}>
                    <IoMdAdd />
                    <span className="ml-2">Section</span>
                </Button>
            ) : (
                <div className="border-2 p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Label title="Title">Title</Label>
                            <Input {...register("title")} />
                            {errors.title && (
                                <p className="ud-text-sm mt-2 text-red-500">
                                    {errors.title.message}
                                </p>
                            )}
                        </div>

                        <div className="mt-4">
                            <Label title="Description">Description</Label>
                            <Input {...register("description")} />
                            {errors.description && (
                                <p className="ud-text-sm mt-2 text-red-500">
                                    {errors.description.message}
                                </p>
                            )}
                        </div>

                        <div className="mt-4 flex justify-end">
                            <Button
                                className="ml-auto"
                                variant={"outline"}
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="ml-4"
                                type="submit"
                                disabled={loading}
                            >
                                Add Section
                            </Button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default AddSectionForm;
