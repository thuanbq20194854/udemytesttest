export interface Notification {
    id: number;
    fromUserId: number;
    toUserId: number;
    title: string;
    body: string;
    isRead: boolean;
    entityType: string;
    type: NotificationType;
    resourceID: number;
    updated_at: string;
    created_at: string;
}

export enum NotificationType {
    INSTRUCTOR = "INSTRUCTOR",
    STUDENT = "STUDENT",
}
