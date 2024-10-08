import { Price, Category, Language, Level } from "./category";

export interface GetInstructorCourse {}

export interface CourseItem {
    image: string;
    title: string;
    subTitle: string;
    author: string;
    reviews: number;
    price: number;
    countReviews: number;
    isBestseller: boolean;
    updateAt: string;
    totalTime: string;
    intendedFor: string[];
    level: string;
}

export interface CreateCourse {
    title: string;
    category_id: string;
    sub_category_id: string;
}

export interface CreateNewList {
    name: string;
    description?: string;
}

export interface EditList {
    id: number;
    name: string;
    description?: string;
}

export interface IntendedLearners {
    outcomes: {
        value: string;
    }[];
    requirements?: {
        value: string;
    }[];
    intended_for?: {
        value: string;
    }[];
}

export interface IntendedLearnersSend {
    outcomes: string[];
    requirements: string[];
    intended_for: string[];
}

// export interface LectureAdd {
//     title: string;
// }

export interface QuizAdd {
    title: string;
    desc?: string;
}

export interface CreateCurriculum {
    course_id: number;
    title: string;
}

export interface CreateLecture {
    curriculum_id: number;
    title: string;
}

export interface CreateQuiz {
    curriculum_id: number;
    title: string;
    description?: string;
}

export interface CreateQuestion {
    lecture_id: number;
    title: string;
}

export interface CreateAnswer {
    question_id: number;
    answer_text: string;
    is_correct: boolean;
    explain?: string;
}

export interface CreateAnswerForm {
    id: number;
    answer_text: string;
    explain?: string;
}

export interface AnswerQuestion {
    curriculumID: number;
    lectureID: number;
    question: string;
    isCorrect: string;
    answers: CreateAnswerForm[];
}

export interface Lecture {
    id: number;
    title: string;
    type: number;
    article: string | null;
    curriculumID: number;
    description: string | null;
    isPromotional: boolean;
    learningLectures: {
        id: number;
        lectureId: number;
        learningId: number;
        isDone: boolean;
        updatedAt: string;
        createdAt: string;
    }[];
    assets: Asset[];
    questions: Question[];
    order: number;
    updated_at: string;
    created_at: string;
}

export interface Asset {
    id: number;
    bunnyId: string;
    url: string;
    type: number;
    duration: number;
    name?: string;
    size: number;
    lectureId: number;
    updated_at: string;
    created_at: string;
}

export interface Question {
    id: number;
    lectureID: number;
    title: string;
    answers: Answer[];
    updated_at: string;
    created_at: string;
}

export interface Curriculum {
    id: number;
    title: string;
    description: string | null;
    courseID: number;
    lectures: Lecture[];
    updated_at: string;
    created_at: string;
}

export interface Course {
    id: number;
    outComes: string[] | null;
    intendedFor: string[] | null;
    requirements: string[] | null;
    productIdStripe: string;
    levelId: number | null;
    categoryId: number;
    subCategoryId: number;
    title: string;
    reviewStatus: number;
    welcomeMessage: string | null;
    congratulationsMessage: string | null;
    subtitle: string | null;
    primarilyTeach: string | null;
    description: string | null;
    languageId: number | null;
    priceId: number | null;
    userID: number | null;
    promotionalVideo: string | null;
    image: string | null;
    curriculums: Curriculum[];
    updated_at: string;
    created_at: string;
}

export interface Answer {
    id: number;
    answerText: string;
    explain: string | null;
    isCorrect: boolean;
    questionID: number;
    updated_at: string;
    created_at: string;
}

export interface UpdateQuestion {
    id: number;
    title: string;
    lectureID: number;
    curriculumID: number;
}

export interface UpdateAnswer {
    id: number;
    answerText: string;
    isCorrect: boolean;
    explain?: string;
    lectureID: number;
    curriculumID: number;
}

export interface UpdateQuiz {
    curriculum_id: number;
    lecture_id: number;
    title: string;
    description?: string | null;
}

export interface UpdateLecture {
    curriculum_id: number;
    lecture_id: number;
    title: string;
}

export interface UpdateLectureDesc {
    curriculum_id: number;
    lecture_id: number;
    description?: string;
}

export interface UpdateLectureArticle {
    curriculum_id: number;
    lecture_id: number;
    article?: string;
}

export interface UpdateVideoWatch {
    curriculum_id: number;
    lecture_id: number;
    video: FileList;
}

export interface UpdateResource {
    curriculum_id: number;
    lecture_id: number;
    resource: FileList;
}

export interface UpdateCourseImage {
    image?: File;
}

export interface UpdateCourseLandingPage {
    title: string;
    subtile?: string;
    description?: string;
    primarily_teach?: string;
    category_id: number;
    sub_category_id: number;
    level_id?: number;
    language_id?: number;
}

export interface UpdateSection {
    id: number;
    title: string;
    description?: string;
}

export interface CreateSection {
    title: string;
    description?: string;
    courseId: number;
}

export interface PaginationInfo {
    totalPage: number;
    totalItem: number;
    size: number;
}

export interface TopCategory {
    created_at: string;
    id: number;
    name: string;
    parentID: number;
    updated_at: string;
}

export interface CourseShow {
    id: number;
    outComes: string[] | null;
    intendedFor: string[] | null;
    requirements: string[] | null;
    productIdStripe: string;
    level: Level | null;
    category: Category | null;
    subCategory: Category | null;
    title: string;
    reviewStatus: number;
    welcomeMessage: string | null;
    congratulationsMessage: string | null;
    subtitle: string | null;
    primarilyTeach: string | null;
    description: string | null;
    status: number;
    language: Language | null;
    price: Price | null;
    user: UserShow;
    promotionalVideo: string | null;
    image: string | null;
    curriculums: Curriculum[];
    averageReview: number;
    countReview: number;
    countStudent: number;
    duration: number;
    updated_at: string;
    created_at: string;
}

interface UserShow {
    id: number;
    name: string;
}

export interface Learning {
    id: number;
    userID: number;
    courseID: number;
    averageReview?: number;
    countReview?: number;
    process: number | null;
    type: number;
    startCount: number | null;
    comment: string | null;
    course: CourseLearning;
    // updated_at: string;
    lectureCount: number;
    createdAt: string;
}

export interface CourseLearning {
    id: number;
    level: LevelLearning;
    outComes: string[] | null;
    title: string;
    status: number;
    price: PriceLearning;
    subtitle: string | null;
    reviewStatus: number;
    author: UserShow;
    image: string | null;
    duration: number;
    curriculums: Curriculum[];
    updated_at: string;
    created_at: string;
}

export interface TopicLearning {
    id: number;
    title: string;
    description: string | null;
    userID: number;
    learnings: Learning[];
    updated_at: string;
    created_at: string;
}

interface LevelLearning {
    id: number;
    name: string;
}

interface PriceLearning {
    id: number;
    tier: string;
    value: number;
}

export interface CartUser {
    id: number;
    name: string;
}

export interface ContentCourse {
    type: "quiz" | "video" | "article" | "undefine";
    id: number;
    curriculumID: number;
    index: number;
    content: ContentQuiz | ContentVideo | ContentArticle | null;
}

export interface ContentQuiz {
    questions: Question[];
    title: string;
    indexNumber: string;
}

export interface ContentVideo {
    url: string;
}

export interface ContentArticle {
    article: string;
    title: string;
}

export interface NavigateLecture {
    lecture: Lecture;
    indexNumber: number;
    curriculumID: number;
}

export interface StatAuthor {
    user: InfoAuthor;
    averageReview: number;
    countReview: number;
    countStudent: number;
    totalCourse: number;
}

interface InfoAuthor {
    id: number;
    name: string;
    avatar: string | null;
    biography: string | null;
}

export interface OverallReviewCourse {
    // learnings: LearningReview[]
    averageReview: number;
    totalReview: number;
    overall: OverallStar;
}

export interface LearningReview {
    id: number;
    type: number;
    starCount: number | null;
    comment: string | null;
    user: UserReview;
    updatedAt: string;
    createdAt: string;
    updatedStarCount: string;
}

interface UserReview {
    id: number;
    name: string;
    avatar?: string;
}

interface OverallStar {
    fiveStar: number;
    fourStar: number;
    threeStar: number;
    twoStar: number;
    oneStar: number;
}

export interface CreateQuestionLecture {
    lectureID: number;
    courseID: number;
    title: string;
    description?: string;
}

export interface UpdateQuestionLecture {
    idQuestionLecture: number;
    title: string;
    description?: string;
}

export interface UpdateAnswerLecture {
    answer: string;
}

export interface QuestionLecture {
    id: number;
    courseID: number;
    lectureID: number;
    user: UserQuestionLecture;
    title: string;
    description: string | null;
    totalAnswer: number;
    updatedAt: string;
    createdAt: string;
}

export interface QuestionLectureAuthor {
    id: number;
    course: CourseQuestionLecture;
    lectureID: number;
    user: UserQuestionLecture;
    title: string;
    description: string | null;
    totalAnswer: number;
    updatedAt: string;
    createdAt: string;
}

interface CourseQuestionLecture {
    id: number;
    image: string | null;
    title: string;
}

export interface AnswerLecture {
    id: number;
    questionLectureID: number;
    user: UserQuestionLecture;
    answer: string;
    updatedAt: string;
    createdAt: string;
}

interface UserQuestionLecture {
    id: number;
    avatar: string | null;
    name: string;
}

export interface CreateAnswerLecture {
    answer: string;
}

export interface FilterCoursesCategory {
    rating: string | null;
    sort: string | null;
    duration: string[] | boolean;
    level: string[] | boolean;
}

export interface CategoryCourse {
    id: number;
    level: LevelLearning;
    category: Category;
    subCategory: Category;
    title: string;
    outComes: string[] | null;
    purchasedDate: string;
    subtitle: string | null;
    price: PriceLearning;
    review_status: number;
    isPurchased: boolean;
    user: UserShow;
    image: string | null;
    reviewStatus: number;
    countReview: number;
    averageReview: number;
    duration: number;
    totalLecture: number;
    updatedAt: string;
    createdAt: string;
}

export interface OverallCategoryCourse {
    tierOneRatingCount: number;
    tierTwoRatingCount: number;
    tierThreeRatingCount: number;
    tierFourRatingCount: number;
    tierOneDurationCount: number;
    tierTwoDurationCount: number;
    allLevelCount: number;
    beginnerLevelCount: number;
    intermediateLevelCount: number;
    expertLevelCount: number;
}

export interface SearchDataItem {
    course: CourseSearch | null;
    teacher: TeacherSearch | null;
}

interface CourseSearch {
    id: number;
    title: string;
    name_author: string;
    image: string | null;
}

interface TeacherSearch {
    id: number;
    name: string;
    avatar: string | null;
}

interface TeacherSearch {
    id: number;
    name: string;
    avatar: string | null;
}

export interface ReviewAuthor {
    course: CourseReviewAuthor;
    user: UserReviewAuthor;
    comment: string | null;
    starCount: number;
    // average_current: number;
    updateAt: string;
    updatedStarCount: string;
    createdAt: string;
}

interface CourseReviewAuthor {
    id: number;
    image: string | null;
    title: string;
}

interface UserReviewAuthor {
    id: number;
    avatar: string | null;
    name: string;
}

export interface FilterReviewAuthor {
    course_id: string | null;
    sort: string | null;
    reply: string[] | boolean;
    rating: string[] | boolean;
}

export interface FilterOverviewAuthor {
    course_id: string | null;
}

export interface FilterQuestionAuthor {
    course_id: string | null;
    sort: string | null;
    search: string | null;
}

export interface FilterStudentAuthor {
    course_id: string | null;
}

export interface StudentAuthor {
    id: number;
    name: string;
    avatar: string | null;
    course: CourseStudentAuthor;
    createdAt: string;
}

interface CourseStudentAuthor {
    id: number;
    title: string;
    image: string | null;
}

export interface OverviewCourse {
    enrollments: {
        total: number;
        totalThisMonth: number;
        detailStats: number[];
    };
    ratings: {
        total: number;
        totalThisMonth: number;
        detailStats: number[];
    };
    revenues: {
        total: number;
        totalThisMonth: number;
        detailStats: number[];
    };
}

interface Revenue {
    total: number;
    totalThisMonth: number;
    detailStats: number[];
}
