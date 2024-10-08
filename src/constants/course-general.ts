// export const topicCourseManager = {
//     goals: "Intended learners",
//     Curriculum: "Curriculum",
//     Pricing: "Pricing",
// };
export const topicPaths = ["goals", "curriculum", "basics", "pricing"];

export const topicCourseManager = [
    {
        title: "Plan your course",
        children: [
            {
                path: "goals",
                title: "Intended learners",
            },
        ],
    },
    {
        title: "Create your content",
        children: [
            {
                path: "curriculum",
                title: "Curriculum",
            },
        ],
    },
    {
        title: "Publish your course",
        children: [
            {
                path: "basics",
                title: "Course landing page",
            },
            {
                path: "pricing",
                title: "Pricing",
            },
        ],
    },
];

export const LECTURE_TYPE = 1;
export const QUIZ_TYPE = 2;

// export const LECTURE_UPLOAD_VIDEO_TYPE = 1;
// export const LECTURE_UPLOAD_ARTICLE_TYPE = 2;
export const LECTURE_UPLOAD_ARTICLE_TYPE = 0;
export const LECTURE_REMOVE_ASSET_TYPE = 1;

export const LECTURE_RESOURCE_ASSET_TYPE = 1;
export const LECTURE_WATCH_ASSET_TYPE = 2;

export const DRAFT_STATUS = 0;
export const LIVE_STATUS = 1;

export const NEWEST_FILTER = 1;
export const OLDEST_FILTER = 2;
export const AZ_FILTER = 3;
export const ZA_FILTER = 4;

export const REVIEW_INIT_STATUS = 0;
export const REVIEW_PENDING_STATUS = 1;
export const REVIEW_VERIFY_STATUS = 2;
