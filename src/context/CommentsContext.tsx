import { createContext } from "react";
import type { IUser } from "../types/User";
import type { IComment } from "../types/Comment";

interface CommentsState {
    comments: IComment[];
    currentUser: IUser;
    isLoading: boolean;
}

interface CommentsContextType {
    state: CommentsState;
    addComment: (content: string) => void;
    addReply: (commentId: number, content: string) => void;
    updateComment: (commentId: number, content: string) => void;
    updateReply: (commentId: number, replyId: number, content: string) => void;
    deleteComment: (commentId: string) => void;
    deleteReply: (commentId: string, replyId: string) => void;
    voteComment: (commentId: number, direction: "up" | "down") => void;
    voteReply: (commentId: number, replyId: number, direction: "up" | "down") => void;
}

const CommentsContext = createContext<CommentsContextType | undefined>(undefined);

export default CommentsContext;
