import type { IUser } from "./User";

export interface IComment {
    id: string;
    content: string;
    author: IUser;
    createdAt: Date;
    updatedAt: Date;
}