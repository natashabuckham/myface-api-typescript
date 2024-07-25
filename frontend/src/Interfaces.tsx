export interface UserModel {
    id: number;
    profileImageUrl: string;
    coverImageUrl: string
    name: string;
    username: string;
    email: string;
}

export interface PostModel {
    postedBy: UserModel;
    imageUrl: string;
    message: string;
    createdAt: string
}