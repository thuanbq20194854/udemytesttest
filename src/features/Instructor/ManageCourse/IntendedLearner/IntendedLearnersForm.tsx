import { Button } from "@/components/ui/button";
import { GoPlus } from "react-icons/go";
import { Course, IntendedLearners, IntendedLearnersSend } from "@/models";
import { schemeUpdateIntendedLeaner } from "@/validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { MdDeleteOutline } from "react-icons/md";
import { RxDragHandleHorizontal } from "react-icons/rx";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { CourseServiceApi } from "@/services/apis";

interface IProps {
    course: Course;
}

function IntendedLearnersForm({ course }: IProps) {
    const { setCourse } = useCourseManagementContext();
    const initOutComes = () => {
        if (!course.outComes || course.outComes.length === 0) {
            return [
                {
                    value: "",
                },
                {
                    value: "",
                },
                {
                    value: "",
                },
                {
                    value: "",
                },
            ];
        } else {
            return course.outComes.map((item) => ({
                value: item,
            }));
        }
    };
    const initIntended = () => {
        if (!course.intendedFor || course.intendedFor.length === 0) {
            return [
                {
                    value: "",
                },
            ];
        } else {
            return course.intendedFor.map((item) => ({
                value: item,
            }));
        }
    };
    const initRequirement = () => {
        if (!course.requirements || course.requirements.length === 0) {
            return [
                {
                    value: "",
                },
            ];
        } else {
            return course.requirements.map((item) => ({
                value: item,
            }));
        }
    };
    const {
        handleSubmit,
        register,
        formState: { errors },
        control,
    } = useForm<IntendedLearners>({
        resolver: yupResolver(schemeUpdateIntendedLeaner),
        defaultValues: {
            intended_for: initIntended(),
            outcomes: initOutComes(),
            requirements: initRequirement(),
        },
    });

    const {
        fields: fieldOutcomes,
        append: appendOutcomes,
        remove: removeOutcomes,
        swap: swapOutcomes,
    } = useFieldArray({
        control,
        name: "outcomes", // unique name for your Field Array
    });
    const {
        fields: fieldRequirement,
        append: appendRequirement,
        remove: removeRequirement,
        swap: swapRequirement,
    } = useFieldArray({
        control,
        name: "requirements", // unique name for your Field Array
    });
    const {
        fields: fieldIntendedFor,
        append: appendIntendedFor,
        remove: removeIntendedFor,
        swap: swapIntendedFor,
    } = useFieldArray({
        control,
        name: "intended_for", // unique name for your Field Array
    });

    // drag, add , delelte , validate rule

    const onSubmit = async (formData: IntendedLearners) => {
        try {
            const formSend: IntendedLearnersSend = {
                intended_for:
                    formData.intended_for?.map((item) => item.value) ?? [],
                requirements:
                    formData.requirements?.map((item) => item.value) ?? [],
                outcomes: formData.outcomes?.map((item) => item.value) ?? [],
            };
            await CourseServiceApi.updateCourse(formSend, course.id);

            setCourse((prev) => ({
                ...prev,
                outComes: formSend.outcomes,
                intendedFor: formSend.intended_for,
                requirements: formSend.requirements,
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const onDragEndOutComes = (result: A) => {
        if (!result.destination) return;

        swapOutcomes(result.source.index, result.destination.index);
    };
    const onDragEndRequirements = (result: A) => {
        if (!result.destination) return;

        swapRequirement(result.source.index, result.destination.index);
    };
    const onDragEndIntendedFor = (result: A) => {
        console.log("result: ", result);

        if (!result.destination) return;

        swapIntendedFor(result.source.index, result.destination.index);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-12 py-6 text-2xl font-bold">
                Intended Learners
            </div>

            <div className="px-12">
                <p className="mb-2 font-bold">
                    What will students learn in your course?
                </p>
                <p>
                    You must enter at least 4 learning objectives or outcomes
                    that learners can expect to achieve after completing your
                    course.
                </p>

                <DragDropContext onDragEnd={onDragEndOutComes}>
                    <Droppable droppableId="outcomes">
                        {(provided) => (
                            <ul
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {fieldOutcomes.map(({ id }, index) => (
                                    <Draggable
                                        key={id}
                                        draggableId={id}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <>
                                                <li
                                                    className="group mb-2 flex items-center"
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <Input
                                                        className="w-[70%]"
                                                        maxLength={150}
                                                        {...register(
                                                            `outcomes.${index}.value`,
                                                        )}
                                                    />

                                                    <button
                                                        className={`hidden hover:bg-[#5f606111] group-hover:block`}
                                                        disabled={
                                                            fieldOutcomes.length ===
                                                            4
                                                        }
                                                    >
                                                        <MdDeleteOutline
                                                            size={28}
                                                            onClick={() =>
                                                                removeOutcomes(
                                                                    index,
                                                                )
                                                            }
                                                        />
                                                    </button>

                                                    <button className="hidden cursor-pointer hover:bg-[#5f606111] group-hover:block">
                                                        <RxDragHandleHorizontal
                                                            size={28}
                                                        />
                                                    </button>
                                                </li>

                                                {errors.outcomes &&
                                                    errors.outcomes?.[
                                                        index
                                                    ] && (
                                                        <p className="ud-text-sm mt-2 text-red-500">
                                                            {
                                                                errors.outcomes[
                                                                    index
                                                                ].value?.message
                                                            }
                                                        </p>
                                                    )}
                                            </>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>

                {errors.outcomes && errors.outcomes.root && (
                    <p className="ud-text-sm mt-2 text-red-500">
                        {errors.outcomes.root.message}
                    </p>
                )}
                <Button
                    variant={"outline"}
                    className="mb-4"
                    onClick={() =>
                        appendOutcomes({
                            value: "",
                        })
                    }
                >
                    <GoPlus />
                    Add more to your response
                </Button>

                <p className="mb-2 font-bold">
                    What are the requirements or prerequisites for taking your
                    course?
                </p>
                <p>
                    List the required skills, experience, tools or equipment
                    learners should have prior to taking your course. If there
                    are no requirements, use this space as an opportunity to
                    lower the barrier for beginners.
                </p>
                <DragDropContext onDragEnd={onDragEndRequirements}>
                    <Droppable droppableId="requirements">
                        {(provided) => (
                            <ul
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {fieldRequirement.map(({ id }, index) => (
                                    <Draggable
                                        key={id}
                                        draggableId={id}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <>
                                                <li
                                                    className="group mb-2 flex items-center"
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <Input
                                                        className="w-[70%]"
                                                        maxLength={150}
                                                        {...register(
                                                            `requirements.${index}.value`,
                                                        )}
                                                    />

                                                    <button
                                                        className={`hidden hover:bg-[#5f606111] group-hover:block`}
                                                    >
                                                        <MdDeleteOutline
                                                            size={28}
                                                            onClick={() =>
                                                                removeRequirement(
                                                                    index,
                                                                )
                                                            }
                                                        />
                                                    </button>

                                                    <button className="hidden cursor-pointer hover:bg-[#5f606111] group-hover:block">
                                                        <RxDragHandleHorizontal
                                                            size={28}
                                                        />
                                                    </button>
                                                </li>

                                                {errors.requirements &&
                                                    errors.requirements?.[
                                                        index
                                                    ] && (
                                                        <p className="ud-text-sm mt-2 text-red-500">
                                                            {
                                                                errors
                                                                    .requirements[
                                                                    index
                                                                ].value?.message
                                                            }
                                                        </p>
                                                    )}
                                            </>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>

                <Button
                    variant={"outline"}
                    className="mb-4"
                    onClick={() => appendRequirement({ value: "" })}
                >
                    <GoPlus />
                    Add more to your response
                </Button>
                <p className="mb-2 font-bold">Who is this course for?</p>
                <p>
                    Write a clear description of the intended learners for your
                    course who will find your course content valuable. This will
                    help you attract the right learners to your course.
                </p>
                <DragDropContext onDragEnd={onDragEndIntendedFor}>
                    <Droppable droppableId="intended_for">
                        {(provided) => (
                            <ul
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {fieldIntendedFor.map(({ id }, index) => (
                                    <Draggable
                                        key={id}
                                        draggableId={id}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <>
                                                <li
                                                    className="group mb-2 flex items-center"
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <Input
                                                        className="w-[70%]"
                                                        maxLength={150}
                                                        {...register(
                                                            `intended_for.${index}.value`,
                                                        )}
                                                    />

                                                    <button
                                                        className={`hidden hover:bg-[#5f606111] group-hover:block`}
                                                    >
                                                        <MdDeleteOutline
                                                            size={28}
                                                            onClick={() =>
                                                                removeIntendedFor(
                                                                    index,
                                                                )
                                                            }
                                                        />
                                                    </button>

                                                    <button className="hidden cursor-pointer hover:bg-[#5f606111] group-hover:block">
                                                        <RxDragHandleHorizontal
                                                            size={28}
                                                        />
                                                    </button>
                                                </li>

                                                {errors.intended_for &&
                                                    errors.intended_for?.[
                                                        index
                                                    ] && (
                                                        <p className="ud-text-sm mt-2 text-red-500">
                                                            {
                                                                errors
                                                                    .intended_for[
                                                                    index
                                                                ].value?.message
                                                            }
                                                        </p>
                                                    )}
                                            </>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>

                <Button
                    variant={"outline"}
                    className="mb-4"
                    onClick={() => appendIntendedFor({ value: "" })}
                >
                    <GoPlus />
                    Add more to your response
                </Button>

                <div>
                    <Button className="ml-auto" type="submit">
                        Submit
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default IntendedLearnersForm;
