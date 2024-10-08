export interface Learning {
    id: number;
    userID: number;
    courseID: number;
    process?: number;
    type: CourseUtil;
    starCount?: number;
    comment?: string;
    course: CourseLearning;
    averageReview?: number;
    countReview?: number;
    lectureCount?: number;

    createdAt?: string;
}

export enum CourseUtil {
    STANDARD_TYPE = 1,
    WISH_LIST_TYPE = 2,
    ARCHIE = 3,
}

export enum CourseStatus {
    REVIEW_INIT = 0,
    REVIEW_PENDING,
    REVIEW_VERIFY,
}

export interface CourseLearning {
    id: number;
    title: string;
    reviewStatus: CourseStatus;
    image: string;
    price: PriceLearning;
    level: LevelLearning;
    author: AuthorLearning;
    // category: Category;
    // subCategory: Category;
    duration?: number;
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

interface AuthorLearning {
    id: number;
    name: string;
}
