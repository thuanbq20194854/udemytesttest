import { CourseLearning, Learning } from "./../models/learning";

const fakeCourseLearning: CourseLearning = {
    id: 1,
    title: "Microsoft Excel: Advanced Excel Formulas & Functions",
    reviewStatus: 1,
    image: "https://img-b.udemycdn.com/course/240x135/516446_4935_5.jpg",
    price: {
        id: 1,
        tier: "20 dollor",
        value: 200,
    },
    level: {
        id: 1,
        name: "Beginning",
    },
    author: {
        id: 1,
        name: "Chris Dutton",
    },
    // category: Category,
    // subCategory: Category,
    duration: 720,
};

export const fakeWishList: Learning[] = [
    {
        id: 1,
        userID: 1,
        courseID: 1,
        process: 70,
        type: 2,
        starCount: 4,
        comment: "HEHHE",
        course: fakeCourseLearning,
        averageReview: 3.5,
        // countReview?: number,
        // lectureCount?: number,

        createdAt: "2023-10-27T08:22:13.775Z",
    },
    {
        id: 2,
        userID: 1,
        courseID: 1,
        process: 70,
        type: 2,
        starCount: 4,
        comment: "HEHHE",
        course: fakeCourseLearning,
        averageReview: 3.5,
        // countReview?: number,
        // lectureCount?: number,

        createdAt: "2023-10-27T08:22:13.775Z",
    },
    {
        id: 3,
        userID: 1,
        courseID: 1,
        process: 70,
        type: 2,
        starCount: 4,
        comment: "HEHHE",
        course: fakeCourseLearning,
        averageReview: 3.5,
        // countReview?: number,
        // lectureCount?: number,

        createdAt: "2023-10-27T08:22:13.775Z",
    },
    {
        id: 4,
        userID: 1,
        courseID: 1,
        process: 70,
        type: 2,
        starCount: 4,
        comment: "HEHHE",
        course: fakeCourseLearning,
        averageReview: 3.5,
        // countReview?: number,
        // lectureCount?: number,

        createdAt: "2023-10-27T08:22:13.775Z",
    },
];
