import type { IComment } from "./Comment";

export interface IReply extends IComment {
    replyingTo: string;
}