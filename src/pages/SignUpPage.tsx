import { useForm } from "react-hook-form";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ResponseLogin, SignUp } from "@/models";
import { UserServiceApi } from "@/services/apis/userServiceApi";
import { finishLogin } from "@/services/states/redux/authSlice";
import { schemeSignUp } from "@/validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthLocalStorage } from "@/utils";

function SignUpPage() {
    const dispatch = useDispatch();
    const { toast } = useToast();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<SignUp>({
        resolver: yupResolver(schemeSignUp),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
    });

    const [errorResponse, setErrorResponse] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // 2. Define a submit handler.
    const onSubmit = async (formData: SignUp) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        try {
            setIsLoading(true);
            const result = await UserServiceApi.register(formData);

            setAuthLocalStorage(result.token);
            reset();

            const payloadLogin: ResponseLogin = {
                token: result.token,
                user: result.user,
            };

            dispatch(finishLogin(payloadLogin));
            setErrorResponse("");
            toast({
                variant: "default",
                title: "Sign Up Successfully!",
            });

            navigate("/");
        } catch (err: A) {
            if (err.response.status === 401) {
                setErrorResponse("Email or password is incorrect!");
            } else if (err.response.status === 403) {
                setErrorResponse("Your account is blocked!");
            } else if (err.response.status === 422) {
                setErrorResponse("Email already exist");
            } else {
                setErrorResponse("Something error server");
                toast({
                    variant: "destructive",
                    title: "Something error server!",
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mx-auto mt-[100px] w-[600px] rounded-md border-2 p-[24px]">
            {errorResponse && (
                <Alert variant="destructive" className="text-[16px]">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription className="text-[16px]">
                        {errorResponse}
                    </AlertDescription>
                </Alert>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="text-[32px]">
                <Label htmlFor="name" className="text-[16px]">
                    Name
                </Label>
                <Input className="text-[16px]" {...register("name")} />
                {errors.name && (
                    <p className="ud-text-sm mt-2 text-red-500">
                        {errors.name.message}
                    </p>
                )}
                <Label htmlFor="email" className="text-[16px]">
                    Email
                </Label>
                <Input className="text-[16px]" {...register("email")} />
                {errors.email && (
                    <p className="ud-text-sm mt-2 text-red-500">
                        {errors.email.message}
                    </p>
                )}
                <Label htmlFor="password" className="text-[16px]">
                    Password
                </Label>
                <Input
                    type="password"
                    className="text-[16px]"
                    {...register("password")}
                />

                {errors.password && (
                    <p className="ud-text-sm mt-2 text-red-500">
                        {errors.password.message}
                    </p>
                )}

                <Button disabled={isLoading} className="ud-heading-sm p-[16px]">
                    Sign Up
                </Button>
            </form>
        </div>
    );
}

export default SignUpPage;
