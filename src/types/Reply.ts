import type { IUser } from "./User";

export interface IReply {
    id: string;
    content: string;
    author: IUser;
    createdAt: Date;
    updatedAt: Date;
}