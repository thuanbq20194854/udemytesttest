import { string } from "yup";

export interface SignUp {
    name: string;
    email: string;
    password: string;
}

export interface SignIn {
    email: string;
    password: string;
}

export interface SignInByGoogle {
    token: string;
}

export interface ForgotPassword {
    email: string;
}

export interface ResetPassword {
    password: string;
    confirmPassword: string;
}

export interface ResetPasswordRequest {
    emailToken: string;
    password: string;
}

export interface ResponseLogin {
    token: string;
    user: User;
}

export interface ResponseSignUp {
    token: string;
    user: User;
}

export interface ResponseUpdateProfile {
    user: User;
}

export interface User {
    id: number;
    email: string;
    name: string;
    typeAccount: number;
    avatar: string | null;
    headline: string | null;
    biography: string | null;
    websiteURL: string | null;
    twitterURL: string | null;
    facebookURL: string | null;
    linkedInURL: string | null;
    youtubeURL: string | null;
    role: number;
    accountStripeID: string | null;
    accountStripeStatus: number | null;
    updated_at: string;
    created_at: string;
}

export interface ChangePassword {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export interface ResetChangePasswordRequest {
    old_password: string;
    new_password: string;
}

export interface UpdateAvatar {
    image?: File;
}

export interface UpdateProfile {
    name: string;
    headline?: string;
    biography?: string;
    twitter_url?: string;
    facebook_url?: string;
    linkedin_url?: string;
    youtube_url?: string;
    website_url?: string;
}

// export interface CreateCourse {
//     title: string;
//     category_id: number;
//     sub_category_id: number;
// }
