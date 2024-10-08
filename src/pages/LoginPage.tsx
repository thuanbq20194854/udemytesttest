import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResponseLogin, SignIn } from "@/models";
import { schemeSignIn } from "@/validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";
import { UserServiceApi } from "@/services/apis/userServiceApi";
import { useDispatch } from "react-redux";
import { finishLogin } from "@/services/states/redux/authSlice";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { setAuthLocalStorage } from "@/utils";

function LoginPage() {
    const { toast } = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<SignIn>({
        resolver: yupResolver(schemeSignIn),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [errorResponse, setErrorResponse] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // 2. Define a submit handler.
    const onSubmit = async (formData: SignIn) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        try {
            setIsLoading(true);
            const result = await UserServiceApi.login(formData);

            setAuthLocalStorage(result.token);
            reset();

            const payloadLogin: ResponseLogin = {
                token: result.token,
                user: result.user,
            };
            dispatch(finishLogin(payloadLogin));
            setErrorResponse("");
            navigate("/");

            toast({
                variant: "default",
                title: "Sign Up Successfully!",
            });
        } catch (err: A) {
            if (err.response.status === 401) {
                setErrorResponse("Email or password is incorrect!");
            } else if (err.response.status === 403) {
                setErrorResponse("Your account is blocked!");
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
                    Login
                </Button>
            </form>
        </div>
    );
}

export default LoginPage;
