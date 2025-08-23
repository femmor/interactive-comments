import type { IComment } from "./Comment";
import type { IUser } from "./User";

export interface ICommentsData {
    currentUser: IUser;
    comments: IComment[];
}