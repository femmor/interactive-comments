import type { IReply } from "./Reply";
import type { IUser } from "./User";

export interface IComment {
    id: number;
    content: string;
    score: number;
    createdAt: string;
    user: IUser;
    replies: IReply[]
}
