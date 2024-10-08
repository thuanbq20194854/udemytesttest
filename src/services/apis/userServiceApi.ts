import { STUDENT_ROLE, TEACHER_ROLE } from "../../constants";
import {
    ForgotPassword,
    ResetPasswordRequest,
    SignIn,
    SignInByGoogle,
    SignUp,
} from "../../models/auth";
import { axiosClientService } from "./axiosClientService";

export const UserServiceApi = {
    // login: (data: Login) => {
    //     const url = "api/auth/login";
    //     return axiosClient.post(url, data);
    // },
    register: (data: SignUp): Promise<any> => {
        const url = "/auth/register";
        return axiosClientService.post(url, data);
    },
    login: (data: SignIn): Promise<any> => {
        const url = "/auth/login";
        return axiosClientService.post(url, data);
    },

    loginByGoogle: (data: SignInByGoogle): Promise<any> => {
        const url = "/auth/login-google";
        return axiosClientService.post(url, data);
    },

    forgotPassword: (data: ForgotPassword): Promise<any> => {
        const url = "/auth/forgot-password";
        return axiosClientService.post(url, data);
    },
    resetPassword: (data: ResetPasswordRequest): Promise<any> => {
        const url = "/auth/reset-password";
        return axiosClientService.post(url, data);
    },

    requestTeacher: (): Promise<any> => {
        const url = "/users/request-teacher";
        return axiosClientService.post(url);
    },

    verifyTeacher: (data: any): Promise<any> => {
        const url = "/users/verify-teacher";
        return axiosClientService.post(url, data);
    },

    changePassword: (data: any): Promise<any> => {
        const url = "/users/change-password";
        return axiosClientService.post(url, data);
    },
    updateProfile: (data: any): Promise<any> => {
        const url = "/users/me";
        return axiosClientService.put(url, data);
    },

    getUserByID: (id: number): Promise<any> => {
        const url = `/users/${id}`;
        return axiosClientService.get(url);
    },

    searchStudent: (
        search: string,
        size: number,
        page: number,
        role: number,
    ): Promise<any> => {
        let url = `/users?page=${page}&size=${size}&search=${search}`;

        // const roles = []

        if (role === TEACHER_ROLE) {
            url += `&roles=${STUDENT_ROLE}`;
        }

        if (role === STUDENT_ROLE) {
            url += `&roles=${TEACHER_ROLE}`;
        }

        return axiosClientService.get(url);
    },

    getStatAuthor: (id: number): Promise<any> => {
        let url = `/users/${id}/instructor/stat`;
        // let url = `/topic-learnings/?page=${page}&size=${size}`;
        return axiosClientService.get(url);
    },
    // logout: () => {
    //     const url = "api/auth/logout";
    //     return axiosClient.post(url);
    // },
    // refreshToken: (): Promise<Tokens> => {
    //     const url = "api/auth/refreshToken";
    //     return axiosClient.post(url);
    // },
};
