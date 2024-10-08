import {
    ChangePassword,
    ForgotPassword,
    ResetPassword,
    SignIn,
    SignUp,
    UpdateAvatar,
    UpdateProfile,
} from "../models/auth";
import * as Yup from "yup";

export const schemeSignUp: Yup.ObjectSchema<SignUp> = Yup.object({
    name: Yup.string()
        .required("Full name is required")
        .min(2, "Full name is less than 2 characters")
        .max(30, "Full name is greater than 30 characters"),

    email: Yup.string()
        .required("Email name is required")
        .email("Email is invalid"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password is less than 8 characters")
        .max(30, "Password is greater than 30 characters"),
});

export const schemeSignIn: Yup.ObjectSchema<SignIn> = Yup.object({
    email: Yup.string()
        .required("Email name is required")
        .email("Email is invalid"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password is less than 8 characters")
        .max(30, "Password is greater than 30 characters"),
});

export const schemeForgotPassword: Yup.ObjectSchema<ForgotPassword> =
    Yup.object({
        email: Yup.string()
            .required("Email name is required")
            .email("Email is invalid"),
    });

export const schemeResetPassword: Yup.ObjectSchema<ResetPassword> = Yup.object({
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password is less than 8 characters"),
    confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
});

export const schemeChangePassword: Yup.ObjectSchema<ChangePassword> =
    Yup.object({
        currentPassword: Yup.string()
            .required("Mật khẩu hiển tại là bắt buộc")
            .min(8, "Mật khẩu hiển tại nhỏ hơn 8 ký tự"),
        newPassword: Yup.string()
            .required("New password is required")
            .min(8, "New password is less than 8 characters"),
        confirmPassword: Yup.string()
            .required("Confirm new password is required")
            .oneOf([Yup.ref("newPassword")], "New password must match"),
    });

const MAX_FILE_SIZE = 1024 * 1024 * 5; //5MB

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

export const schemeUpdateImage: Yup.ObjectSchema<UpdateAvatar> = Yup.object({
    image: Yup.mixed<File>()
        .test(
            "fileFormat",
            "Unsupported Format",
            (file) =>
                !file || // Check if `file` is defined
                file.length === 0 || // Check if `file` is not an empty list
                SUPPORTED_FORMATS.includes(file.type),
        )
        .test(
            "fileSize",
            "File too large. Max file 5 MB",
            (file) =>
                !file || // Check if `file` is defined
                file.length === 0 || // Check if `files` is not an empty list
                file.size <= MAX_FILE_SIZE,
        ),
});

export const schemeUpdateProfile: Yup.ObjectSchema<UpdateProfile> = Yup.object({
    name: Yup.string()
        .required("Name is required")
        .min(2, "Full name is less than 2 characters")
        .max(30, "Full name is greater than 100 characters"),
    headline: Yup.string().max(255, "Headline is greater than 100 characters"),
    biography: Yup.string().max(
        600,
        "Biography is greater than 600 characters",
    ),
    twitter_url: Yup.string().max(
        255,
        "Twitter url is greater than 255 characters",
    ),
    facebook_url: Yup.string().max(
        255,
        "Facebook url is greater than 255 characters",
    ),
    youtube_url: Yup.string().max(
        255,
        "Youtube url is greater than 255 characters",
    ),
    website_url: Yup.string().max(
        255,
        "Website is greater than 255 characters",
    ),
    linkedin_url: Yup.string().max(
        255,
        "LinkedIn url is greater than 255 characters",
    ),
});
