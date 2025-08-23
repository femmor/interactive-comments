import type { IReply } from "./Reply";
import type { IUser } from "./User";

export interface IComment {
    id: string;
    content: string;
    score: number;
    createdAt: Date;
    user: IUser;
    replies: IReply[]
}

type ActionType =
    | {
        type: "ADD_COMMENT";
        payload: {
            content: string;
            user: IUser;
        };
    }
    | {
        type: "ADD_REPLY";
        payload: {
            commentId: string;
            content: string;
            user: IUser;
        };
    }
    | {
        type: "UPDATE_COMMENT";
        payload: {
            commentId: string;
            content: string;
        };
    }
    | {
        type: "DELETE_COMMENT";
        payload: {
            commentId: string;
        };
    }
    | {
        type: "DELETE_REPLY";
        payload: {
            commentId: string;
            replyId: string;
        };
    }
    | {
        type: "UPDATE_REPLY";
        payload: {
            commentId: string;
            replyId: string;
            content: string;
        };
    }
    | {
        type: "VOTE_COMMENT";
        payload: {
            commentId: string;
            direction: "up" | "down";
        };
    };

export type Action = ActionType;