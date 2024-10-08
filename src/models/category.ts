export interface CategoryItem {
    title: string;
    image: string;
    url: string;
}

export interface Language {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: number;
    name: string;
    parentID: number | null;
    children: Category[] | null;
    created_at: string;
    updated_at: string;
}

export interface Price {
    id: number;
    tier: string;
    value: number;
    created_at: string;
    updated_at: string;
}
// children: null;
// created_at: "2023-10-08T16:20:43.9+07:00";
// id: 2;
// name: "WebPython";
// parent: null;
// parent_id: null;
// updated_at: "2023-10-08T16:20:43.9+07:00";
export interface Level {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface IssueType {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}
