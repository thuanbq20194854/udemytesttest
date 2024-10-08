import * as Yup from "yup";
import {
    AnswerQuestion,
    CreateAnswerLecture,
    CreateCourse,
    CreateCurriculum,
    CreateLecture,
    CreateNewList,
    CreateQuestionLecture,
    CreateQuiz,
    CreateSection,
    EditList,
    IntendedLearners,
    // LectureAdd,
    QuizAdd,
    UpdateAnswerLecture,
    UpdateCourseLandingPage,
    UpdateLecture,
    UpdateLectureArticle,
    UpdateLectureDesc,
    UpdateQuestionLecture,
    UpdateQuiz,
    UpdateResource,
    UpdateSection,
    UpdateVideoWatch,
} from "../models/course";

export const schemeCreateNewList: Yup.ObjectSchema<CreateNewList> = Yup.object({
    name: Yup.string()
        .required("Name is required")
        .max(60, "Name is greater than 60 characters"),
    description: Yup.string().max(
        200,
        "Description is greater than 200 characters",
    ),
});

export const schemeEditList: Yup.ObjectSchema<EditList> = Yup.object({
    id: Yup.number().required("Id is required"),
    name: Yup.string()
        .required("Name is required")
        .max(60, "Name is greater than 60 characters"),
    description: Yup.string().max(
        200,
        "Description is greater than 200 characters",
    ),
});

export const schemeCreateCourse: Yup.ObjectSchema<CreateCourse> = Yup.object({
    title: Yup.string()
        .required("Title is required")
        .max(60, "Title is greater than 60 characters"),

    sub_category_id: Yup.number()
        .required()
        .test("require", "Subcategory is required", (data) => data != -1),

    category_id: Yup.number()
        .required()
        .test("require", "Category is required", (data) => data != -1),
});

export const schemeUpdateIntendedLeaner: Yup.ObjectSchema<IntendedLearners> =
    Yup.object({
        outcomes: Yup.array()
            .required()
            .of(
                Yup.object().shape({
                    value: Yup.string()
                        .required("Outcome is required")
                        .max(150, "Greater than 150 characters"), // Each 'value' should not be empty
                }),
            )
            .min(4, "At least 4 outcomes are required"),
        requirements: Yup.array()
            .required("Requirement is required")
            .of(
                Yup.object().shape({
                    value: Yup.string()
                        .required("Requirement is required")
                        .max(150, "Greater than 150 characters"), // Each 'value' should not be empty
                }),
            ),
        intended_for: Yup.array()
            .required("Intended for is required")
            .of(
                Yup.object().shape({
                    value: Yup.string()
                        .required("Intended for is required")
                        .max(150, "Greater than 150 characters"), // Each 'value' should not be empty
                }),
            ),
    });

// export const schemeAddLecture: Yup.ObjectSchema<LectureAdd> = Yup.object({
//     title: Yup.string().required("Title is require").max(80, "Title is greater than 80 characters"),
// });

// export const schemeAddQuiz: Yup.ObjectSchema<QuizAdd> = Yup.object({
//     title: Yup.string()
//         .required("Title is require")
//         .max(80, "Title is greater than 80 characters"),
//     desc: Yup.string().max(400, "Description is greater than 400 characters"),
// });

export const schemeAddCurriculum: Yup.ObjectSchema<CreateCurriculum> =
    Yup.object({
        course_id: Yup.number().required("Course id is required"),
        title: Yup.string()
            .required("Title is required")
            .max(80, "Title is greater than 80 characters"),
    });

export const schemeAddLecture: Yup.ObjectSchema<CreateLecture> = Yup.object({
    curriculum_id: Yup.number().required("Curriculum id is required"),
    title: Yup.string()
        .required("Title is required")
        .max(80, "Title is greater than 80 characters"),
});

export const schemeAddQuiz: Yup.ObjectSchema<CreateQuiz> = Yup.object({
    curriculum_id: Yup.number().required("Curriculum id is required"),

    title: Yup.string()
        .required("Title is required")
        .max(80, "Title is greater than 80 characters"),
    description: Yup.string().max(
        500,
        "description is greater than 500 characters",
    ),
});

export const schemeUpdateQuiz: Yup.ObjectSchema<UpdateQuiz> = Yup.object({
    curriculum_id: Yup.number().required("Curriculum id is required"),
    lecture_id: Yup.number().required("Lecture id is required"),

    title: Yup.string()
        .required("Title is required")
        .max(80, "Title is greater than 80 characters"),
    description: Yup.string()
        .nullable()
        .max(500, "description is greater than 500 characters"),
});

export const schemeUpdateLecture: Yup.ObjectSchema<UpdateLecture> = Yup.object({
    curriculum_id: Yup.number().required("Curriculum id is required"),
    lecture_id: Yup.number().required("Lecture id is required"),
    title: Yup.string()
        .required("Title is required")
        .max(80, "Title is greater than 80 characters"),
});

export const schemeUpdateLectureDesc: Yup.ObjectSchema<UpdateLectureDesc> =
    Yup.object({
        curriculum_id: Yup.number().required("Curriculum id is required"),
        lecture_id: Yup.number().required("Lecture id is required"),
        description: Yup.string().max(
            500,
            "Description is greater than 500 characters",
        ),
    });

export const schemeUpdateLectureArticle: Yup.ObjectSchema<UpdateLectureArticle> =
    Yup.object({
        curriculum_id: Yup.number().required("Curriculum id is required"),
        lecture_id: Yup.number().required("Lecture id is required"),
        article: Yup.string().max(
            2000,
            "Article is greater than 2000 characters",
        ),
    });

export const schemeCreateQuestionAnswer: Yup.ObjectSchema<AnswerQuestion> =
    Yup.object({
        answers: Yup.array()
            .required()
            .of(
                Yup.object().shape({
                    answer_text: Yup.string()
                        .required("Answer is required")
                        .max(200, "Answer is greater than 200 characters"),
                    id: Yup.number().required("Id is required"),
                    explain: Yup.string().max(
                        500,
                        "Explain is greater than 500 characters",
                    ),
                    // Each 'value' should not be empty
                }),
            ),
        question: Yup.string().required("Question is required"),
        // is_correct: Yup.str,
        isCorrect: Yup.string().required("Need choose answer correct"),
        curriculumID: Yup.number().required("Curriculum id is required"),
        lectureID: Yup.number().required("Lecture id is required"),
    });

const MAX_FILE_SIZE_VIDEO = 1024 * 1024 * 100;

const SUPPORTED_FORMATS = ["video/mp4"];
export const schemeUpdateVideoWatch: Yup.ObjectSchema<UpdateVideoWatch> =
    Yup.object({
        curriculum_id: Yup.number().required("Curriculum id is required"),
        lecture_id: Yup.number().required("Lecture id is required"),
        video: Yup.mixed<FileList>()
            .required("Video file is required")
            .test(
                "require",
                "Video file is required",
                (file) => file.length === 1,
            )
            .test(
                "fileFormat",
                "Unsupported Format",
                (file) =>
                    file.length === 1 && // Check if `file` is not an empty list
                    SUPPORTED_FORMATS.includes(file[0].type),
            )
            .test(
                "fileSize",
                "File too large. Max file 100 MB",
                (file) =>
                    file.length === 1 && // Check if `files` is not an empty list
                    file[0].size <= MAX_FILE_SIZE_VIDEO,
            ),
    });

export const schemeUploadResource: Yup.ObjectSchema<UpdateResource> =
    Yup.object({
        curriculum_id: Yup.number().required("Curriculum id is required"),
        lecture_id: Yup.number().required("Lecture id is required"),
        resource: Yup.mixed<FileList>()
            .required("Resource file is required")
            .test(
                "require",
                "Resource file is required",
                (file) => file.length === 1,
            )
            .test(
                "fileSize",
                "File too large. Max file 100 MB",
                (file) =>
                    file.length === 1 && // Check if `files` is not an empty list
                    file[0].size <= MAX_FILE_SIZE_VIDEO,
            ),
    });

export const schemeUpdateCourseLanding: Yup.ObjectSchema<UpdateCourseLandingPage> =
    Yup.object({
        title: Yup.string()
            .required("Title is required")
            .max(60, "Title is greater than 60 characters "),
        subtile: Yup.string().max(
            120,
            "Subtitle is greater than 120 characters",
        ),
        primarily_teach: Yup.string().max(
            120,
            "Primarily teach is greater than 120 characters",
        ),
        sub_category_id: Yup.number()
            .required("Subcategory is required")
            .test("require", "Subcategory is required", (data) => data != -1),
        category_id: Yup.number()
            .required("Category is required")
            .test("require", "Danh mục là bắt buộc", (data) => data != -1),
        description: Yup.string().max(
            2000,
            "Description is greater than 2000 characters ",
        ),
        level_id: Yup.number(),
        language_id: Yup.number(),
    });

export const schemeUpdateSection: Yup.ObjectSchema<UpdateSection> = Yup.object({
    title: Yup.string()
        .required("Title is required")
        .max(80, "Title is greater than 80 characters"),
    description: Yup.string().max(
        200,
        "Description is greater than 200 characters",
    ),
    id: Yup.number().required("Id Section is required"),
});

export const schemeCreateSection: Yup.ObjectSchema<CreateSection> = Yup.object({
    title: Yup.string()
        .required("Title is required")
        .max(80, "Title is greater than 80 characters"),
    description: Yup.string().max(
        200,
        "Description is greater than 200 characters",
    ),
});

export const schemeCreateQuestionLecture: Yup.ObjectSchema<CreateQuestionLecture> =
    Yup.object({
        title: Yup.string()
            .required("Title is required")
            .max(150, "Title is greater than 150 characters"),
        description: Yup.string().max(
            500,
            "Description is greater than 500 characters",
        ),
        lectureID: Yup.number().required("Lecuter id is required"),
        courseID: Yup.number().required("Course id is required"),
    });

export const schemeUpdateQuestionLecture: Yup.ObjectSchema<UpdateQuestionLecture> =
    Yup.object({
        title: Yup.string()
            .required("Title is required")
            .max(150, "Title is greater than 150 characters"),
        description: Yup.string().max(
            500,
            "Description is greater than 500 characters",
        ),
        idQuestionLecture: Yup.number().required(
            "lecture question id is required",
        ),
    });

export const schemeCreateAnswerLecture: Yup.ObjectSchema<CreateAnswerLecture> =
    Yup.object({
        answer: Yup.string()
            .required("Answer is required")
            .max(500, "Answer is greater than 500 characters"),
    });

export const schemeUpdateAnswerLecture: Yup.ObjectSchema<UpdateAnswerLecture> =
    Yup.object({
        answer: Yup.string()
            .required("Answer is required")
            .max(500, "Answer is greater than 500 characters"),
    });
