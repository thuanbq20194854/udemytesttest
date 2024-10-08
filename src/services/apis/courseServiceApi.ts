import {
    ARCHIE,
    AZ_FILTER,
    NEWEST_FILTER,
    OLDEST_FILTER,
    STANDARD_TYPE,
    ZA_FILTER,
} from "../../constants";
// import {
//     ENTIRE_COURSE,
//     THIS_LECTURE,
// } from "../../features/LeaningLecture/QASection";
// import { ALL_RATING } from "../../features/LeaningLecture/ReviewsSection";
import {
    FilterCoursesCategory,
    FilterQuestionAuthor,
    FilterReviewAuthor,
    FilterStudentAuthor,
} from "../../models";
import { axiosClientService } from "./axiosClientService";

export const CourseServiceApi = {
    getCourses: (
        page: number,
        size: number,
        subCategoryID: number,
    ): Promise<any> => {
        const url = `/courses?size=${size}&page=${page}&subCategoryID=${subCategoryID}`;
        return axiosClientService.get(url);
    },
    createCourse: (data: any): Promise<any> => {
        const url = "/courses";
        return axiosClientService.post(url, data);
    },

    createCurriculum: (data: any): Promise<any> => {
        const url = "/curriculums";
        return axiosClientService.post(url, data);
    },

    getCurriCulumsByCourseByID: (id: number): Promise<any> => {
        const url = `/courses/${id}/curriculums`;
        return axiosClientService.get(url);
    },
    getDetailCurriCulumsByCourseByID: (id: number): Promise<any> => {
        const url = `/courses/${id}/curriculums/auth`;
        return axiosClientService.get(url);
    },

    getCourseByID: (id: number): Promise<any> => {
        const url = `/courses/${id}`;
        return axiosClientService.get(url);
    },

    submitReviewCourseByID: (id: number): Promise<any> => {
        const url = `/courses/${id}/submit-review`;
        return axiosClientService.put(url);
    },

    createLecture: (data: any): Promise<any> => {
        const url = `/lectures`;
        return axiosClientService.post(url, data);
    },

    createQuiz: (data: any): Promise<any> => {
        const url = `/quizs`;
        return axiosClientService.post(url, data);
    },

    createQuestion: (data: any): Promise<any> => {
        const url = `/questions`;
        return axiosClientService.post(url, data);
    },

    createAnswer: (data: any): Promise<any> => {
        const url = `/answers`;
        return axiosClientService.post(url, data);
    },

    updateQuestion: (data: any, id: number): Promise<any> => {
        const url = `/questions/${id}`;
        return axiosClientService.put(url, data);
    },

    updateAnswer: (data: any, id: number): Promise<any> => {
        const url = `/answers/${id}`;
        return axiosClientService.put(url, data);
    },

    deleteQuestion: (id: number): Promise<any> => {
        const url = `/questions/${id}`;
        return axiosClientService.delete(url);
    },

    updateQuiz: (data: any, id: number): Promise<any> => {
        const url = `/quizs/${id}`;
        return axiosClientService.put(url, data);
    },

    deleteQuiz: (id: number): Promise<any> => {
        const url = `/quizs/${id}`;
        return axiosClientService.delete(url);
    },

    updateLecture: (data: any, id: number): Promise<any> => {
        const url = `/lectures/${id}`;
        return axiosClientService.put(url, data);
    },

    updateVideoLecture: (data: any, id: number): Promise<any> => {
        const url = `/lectures/${id}/video`;
        return axiosClientService.put(url, data);
    },

    updateResourceLecture: (data: any, id: number): Promise<any> => {
        const url = `/lectures/${id}/resource`;
        return axiosClientService.put(url, data);
    },

    deleteLecture: (id: number): Promise<any> => {
        const url = `/lectures/${id}`;
        return axiosClientService.delete(url);
    },

    updateCourse: (data: any, id: number): Promise<any> => {
        const url = `/courses/${id}`;
        return axiosClientService.put(url, data);
    },

    updateCurriculum: (data: any, id: number): Promise<any> => {
        const url = `/curriculums/${id}`;
        return axiosClientService.put(url, data);
    },

    deleteCurriculum: (id: number): Promise<any> => {
        const url = `/curriculums/${id}`;
        return axiosClientService.delete(url);
    },

    getCoursesDetail: (
        id: number,
        page: number,
        size: number,
        search: string | null,
        filter: number | null,
    ): Promise<any> => {
        let url = `/courses?userID=${id}&size=${size}&page=${page}`;
        if (search) {
            url += `&search=${search}`;
        }

        if (filter === NEWEST_FILTER) {
            url += `&filterOrder=${NEWEST_FILTER}`;
        }

        if (filter === OLDEST_FILTER) {
            url += `&filterOrder=${OLDEST_FILTER}`;
        }

        if (filter === AZ_FILTER) {
            url += `&filterOrder=${AZ_FILTER}`;
        }

        if (filter === ZA_FILTER) {
            url += `&filterOrder=${ZA_FILTER}`;
        }

        return axiosClientService.get(url);
    },

    getTopCategories: (): Promise<any> => {
        const url = `/categories/top`;
        return axiosClientService.get(url);
    },

    getLearnings: (
        types: number[],
        page: number,
        size: number,
        userId: number,
    ): Promise<any> => {
        let url = `learnings?userID=${userId}&order=DESC&page=${page}&size=${size}&types=${types.join(
            ",",
        )}`;
        return axiosClientService.get(url);
    },

    getCoursePurchase: (
        page: number,
        size: number,
        userId: number,
    ): Promise<any> => {
        let url = `learnings?userID=${userId}&order=DESC&page=${page}&size=${size}&types=${[
            STANDARD_TYPE,
            ARCHIE,
        ].join(",")}`;
        return axiosClientService.get(url);
    },

    updateLearnings: (id: number, data: any): Promise<any> => {
        let url = `/learnings/${id}`;
        return axiosClientService.put(url, data);
    },

    getTopicLearnings: (page: number, size: number): Promise<any> => {
        let url = `/topic-learnings?size=${size}&page=${page}&order=DESC`;
        // let url = `/topic-learnings/?page=${page}&size=${size}`;
        return axiosClientService.get(url);
    },

    updateTopicLearnings: (id: number, data: any): Promise<any> => {
        let url = `/topic-learnings/${id}`;
        // let url = `/topic-learnings/?page=${page}&size=${size}`;
        return axiosClientService.put(url, data);
    },
    deleteTopicLearnings: (id: number): Promise<any> => {
        let url = `/topic-learnings/${id}`;
        // let url = `/topic-learnings/?page=${page}&size=${size}`;
        return axiosClientService.delete(url);
    },

    createTopicLearnings: (data: any): Promise<any> => {
        let url = `/topic-learnings`;
        // let url = `/topic-learnings/?page=${page}&size=${size}`;
        return axiosClientService.post(url, data);
    },

    addCourseToTopicLearnings: (data: any): Promise<any> => {
        let url = `/topic-learnings/course`;
        // let url = `/topic-learnings/?page=${page}&size=${size}`;
        return axiosClientService.post(url, data);
    },

    removeCourseToTopicLearnings: (
        topicId: number,
        learningId: number,
    ): Promise<any> => {
        let url = `/topic-learnings/course/${topicId}/${learningId}`;
        // let url = `/topic-learnings/?page=${page}&size=${size}`;
        return axiosClientService.delete(url);
    },

    removeWishList: (id: number): Promise<any> => {
        let url = `/learnings/wish-course/${id}`;
        // let url = `/topic-learnings/?page=${page}&size=${size}`;
        return axiosClientService.delete(url);
    },

    addWishList: (courseID: any): Promise<any> => {
        let url = `/learnings/wish-course/${courseID}`;
        // let url = `/topic-learnings/?page=${page}&size=${size}`;
        return axiosClientService.post(url);
    },
    getCourseByUserID: (
        page: number,
        size: number,
        id: number,
    ): Promise<any> => {
        let url = `/courses?userID=${id}&size=${size}&page=${page}&order=DESC`;

        // let url = `/topic-learnings/?page=${page}&size=${size}`;
        return axiosClientService.get(url);
    },

    reportCourse: (data: any): Promise<any> => {
        let url = `/reports`;
        // let url = `/topic-learnings/?page=${page}&size=${size}`;
        return axiosClientService.post(url, data);
    },

    // getReviews: (
    //     id: number,
    //     page: number,
    //     size: number,
    //     filter: number | null,
    //     search: string | null,
    // ): Promise<any> => {
    //     let url = `/courses/${id}/reviews?page=${page}&size=${size}&order=DESC`;
    //     if (filter) {
    //         if (filter !== ALL_RATING) {
    //             url += `&starCount=${filter}`;
    //         }
    //     }

    //     if (search) {
    //         url += `&search=${search}`;
    //     }

    //     return axiosClientService.get(url);
    // },

    getOverallReviewByCourseID: (id: number): Promise<any> => {
        let url = `/courses/${id}/reviews-overall`;
        return axiosClientService.get(url);
    },

    createQuestionLecture: (data: any): Promise<any> => {
        let url = `/question-lectures`;
        return axiosClientService.post(url, data);
    },

    // getQuestionLectures: (
    //     courseID: number,
    //     lectureID: number | null,
    //     page: number,
    //     size: number,
    //     filter: number | null,
    //     search: string,
    // ): Promise<any> => {
    //     // let url = `question-lectures/?page=${page}&size=${size}&orderBy=created_at DESC&filters={"field":"course_id","value":"${courseID}","comparison":"equals"}`;
    //     let url = `question-lectures?page=${page}&size=${size}&order=DESC`;
    //     if (filter === ENTIRE_COURSE) {
    //         url += `&courseID=${courseID}`;
    //     }

    //     if (filter === THIS_LECTURE && lectureID) {
    //         url += `&lectureID=${lectureID}`;
    //     }
    //     if (search) {
    //         url += `&search=${search}`;
    //     }
    //     return axiosClientService.get(url);
    // },

    getAnswerLectures: (
        questionLectureID: number,
        page: number,
        size: number,
    ): Promise<any> => {
        let url = `answer-lectures?page=${page}&size=${size}&order=DESC&questionLectureID=${questionLectureID}`;

        return axiosClientService.get(url);
    },

    updateQuestionLectures: (id: number, data: any): Promise<any> => {
        let url = `/question-lectures/${id}`;

        return axiosClientService.put(url, data);
    },

    deleteQuestionLectures: (id: number): Promise<any> => {
        let url = `/question-lectures/${id}`;

        return axiosClientService.delete(url);
    },

    createAnswerLecture: (data: any): Promise<any> => {
        let url = `/answer-lectures`;
        return axiosClientService.post(url, data);
    },

    updateAnswerLectures: (id: number, data: any): Promise<any> => {
        let url = `/answer-lectures/${id}`;

        return axiosClientService.put(url, data);
    },

    deleteAnswerLectures: (id: number): Promise<any> => {
        let url = `/answer-lectures/${id}`;

        return axiosClientService.delete(url);
    },

    getCoursesCategory: (
        id: number,
        size: number,
        page: number,
        filter: FilterCoursesCategory,
    ): Promise<any> => {
        let url = `/courses/category-auth/${id}?page=${page}&size=${size}`;

        if (filter.sort) {
            url += `&sortCourse=${filter.sort}`;
        }

        if (filter.rating) {
            url += `&rating=${filter.rating}`;
        }

        if (
            filter?.duration &&
            Array.isArray(filter.duration) &&
            filter.duration.length
        ) {
            url += `&durations=${filter.duration.join(",")}`;
        }

        if (
            filter?.level &&
            Array.isArray(filter.level) &&
            filter.level.length
        ) {
            url += `&levels=${filter.level.join(",")}`;
        }
        return axiosClientService.get(url);
    },

    getNotAuthCoursesCategory: (
        id: number,
        size: number,
        page: number,
        filter?: FilterCoursesCategory,
    ): Promise<any> => {
        let url = `/courses/category/${id}?page=${page}&size=${size}`;

        if (filter?.sort) {
            url += `&sort=${filter.sort}`;
        }

        if (filter?.rating) {
            url += `&rating=${filter.rating}`;
        }

        if (
            filter?.duration &&
            Array.isArray(filter.duration) &&
            filter.duration.length
        ) {
            url += `&durations=${filter.duration.join(",")}`;
        }

        if (
            filter?.level &&
            Array.isArray(filter.level) &&
            filter.level.length
        ) {
            url += `&levels=${filter.level.join(",")}`;
        }
        return axiosClientService.get(url);
    },

    getNotAuthCoursesCategoryShow: (
        id: number,
        size: number,
        page: number,
    ): Promise<any> => {
        let url = `/courses/category/${id}/show?page=${page}&size=${size}`;

        return axiosClientService.get(url);
    },

    getCoursesSearch: (
        search: string,
        size: number,
        page: number,
        filter: FilterCoursesCategory,
    ): Promise<any> => {
        let url = `/courses/search-auth?page=${page}&size=${size}&search=${search}`;

        if (filter.sort) {
            url += `&sortCourse=${filter.sort}`;
        }

        if (filter.rating) {
            url += `&rating=${filter.rating}`;
        }

        if (
            filter.duration &&
            Array.isArray(filter.duration) &&
            filter.duration.length
        ) {
            url += `&durations=${filter.duration.join(",")}`;
        }

        if (
            filter.level &&
            Array.isArray(filter.level) &&
            filter.level.length
        ) {
            url += `&levels=${filter.level.join(",")}`;
        }
        return axiosClientService.get(url);
    },

    getNotAuthCoursesSearch: (
        search: string,
        size: number,
        page: number,
        filter: FilterCoursesCategory,
    ): Promise<any> => {
        let url = `/courses/search?page=${page}&size=${size}&search=${search}`;

        if (filter.sort) {
            url += `&sortCourse=${filter.sort}`;
        }

        if (filter.rating) {
            url += `&rating=${filter.rating}`;
        }

        if (
            filter.duration &&
            Array.isArray(filter.duration) &&
            filter.duration.length
        ) {
            url += `&durations=${filter.duration.join(",")}`;
        }

        if (
            filter.level &&
            Array.isArray(filter.level) &&
            filter.level.length
        ) {
            url += `&levels=${filter.level.join(",")}`;
        }
        return axiosClientService.get(url);
    },

    searchGlobal: (
        search: string,
        size: number,
        page: number,
    ): Promise<any> => {
        let url = `/courses/search-global?page=${page}&size=${size}&search=${search}`;
        return axiosClientService.get(url);
    },

    getCoursesAuthor: (size: number, page: number): Promise<any> => {
        let url = `/courses/author?page=${page}&size=${size}&orderBy=updated_at DESC`;
        return axiosClientService.get(url);
    },

    getReviewsAuthor: (
        size: number,
        page: number,
        filter: FilterReviewAuthor,
    ): Promise<any> => {
        let url = `/courses/reviews/author?page=${page}&size=${size}`;

        if (filter.sort) {
            url += `&sort=${filter.sort}`;
        }

        if (filter.course_id) {
            if (filter.course_id !== "-1") {
                url += `&courseID=${filter.course_id}`;
            }
        }

        if (
            filter.rating &&
            Array.isArray(filter.rating) &&
            filter.rating.length
        ) {
            url += `&ratings=${filter.rating.join(",")}`;
        }

        if (
            filter.reply &&
            Array.isArray(filter.reply) &&
            filter.reply.length
        ) {
            url += `&reply=${filter.reply.join(",")}`;
        }

        return axiosClientService.get(url);
    },

    getUsersEnrollAuthor: (
        size: number,
        page: number,
        filter: FilterStudentAuthor,
    ): Promise<any> => {
        let url = `/courses/users/author?page=${page}&size=${size}`;

        if (filter.course_id) {
            if (filter.course_id !== "-1") {
                url += `&courseID=${filter.course_id}`;
            }
        }

        return axiosClientService.get(url);
    },

    getQuestionLecturesAuthor: (
        page: number,
        size: number,
        filter: FilterQuestionAuthor,
    ): Promise<any> => {
        let url = `question-lectures/author?page=${page}&size=${size}`;

        if (filter.search != null) {
            url += `&search=${filter.search}`;
        }

        if (filter.sort != null) {
            url += `&order=${filter.sort}`;
        }

        if (filter.course_id != null) {
            if (filter.course_id !== "-1") {
                url += `&courseID=${filter.course_id}`;
            }
        }
        return axiosClientService.get(url);
    },
    getOverviewCourseAuthor: (courseID: string): Promise<any> => {
        let url = `/courses/overview/author`;

        if (courseID) {
            if (courseID !== "-1") {
                url += `?courseID=${courseID}`;
            }
        }

        return axiosClientService.get(url);
    },

    markLecture: (lectureID: number, data: any): Promise<any> => {
        let url = `/lectures/${lectureID}/mark`;

        return axiosClientService.post(url, data);
    },
};
