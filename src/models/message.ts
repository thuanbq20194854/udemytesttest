export interface Channel {
    id: number;
    user: ChatUserShow;
    latestMessage: LatestMessageShow;
}

interface LatestMessageShow {
    user: ChatUserShow;
    text: string;
    createdAt: string;
}

export interface ChatUserShow {
    id: number;
    name: string;
    avatar: string | null;
}
export interface LatestMessage {
    _id: string;
    channelId: string;
    senderId: number;
    message: {
        text: string;
    };
    create_at: string;
}
export interface Message {
    id: number;
    fromUser: ChatUserShow;
    toUser: ChatUserShow;
    text: string;
    createdAt: string;
}
