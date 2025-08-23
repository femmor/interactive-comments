import type { IComment } from "./Comment";
import type { IUser } from "./User";

type ActionType =
    | {
        type: "LOAD_INITIAL_DATA";
        payload: {
            comments: IComment[];
            currentUser: IUser;
        };
    }
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
            commentId: number;
            content: string;
            user: IUser;
            replyingTo: string | null;
        };
    }
    | {
        type: "UPDATE_COMMENT";
        payload: {
            commentId: number;
            content: string;
        };
    }
    | {
        type: "UPDATE_REPLY";
        payload: {
            commentId: number;
            replyId: number;
            content: string;
        };
    }
    | {
        type: "DELETE_COMMENT";
        payload: {
            commentId: number;
        };
    }
    | {
        type: "DELETE_REPLY";
        payload: {
            commentId: number;
            replyId: number;
        };
    }

    | {
        type: "VOTE_COMMENT";
        payload: {
            commentId: number;
            direction: "up" | "down";
        };
    }
    | {
        type: "VOTE_REPLY";
        payload: {
            commentId: number;
            replyId: number;
            direction: "up" | "down";
        };
    }

export type Action = ActionType;