import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { TEACHER_ROLE } from "@/constants";
import { logout, selectUser } from "@/services/states/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@/services/states/redux/store";
import { Link } from "react-router-dom";

function HoverCardAvatar() {
    const currentUser = useAppSelector(selectUser);

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <HoverCard openDelay={0.5} closeDelay={0.5}>
            <HoverCardTrigger>
                <div className="group my-[12px] flex items-center px-[12px]">
                    <div className="m-[8px] h-[32px] w-[32px] cursor-pointer overflow-hidden rounded-full">
                        <img
                            src="https://github.com/shadcn.png"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </HoverCardTrigger>
            <HoverCardContent
                className="w-[260px] rounded-none p-0"
                sideOffset={0}
                align={"end"}
            >
                {/* {cart ? (
                        <>
                            <div className="max-h-[488px] overflow-y-auto first:border-0">
                                {cart.cartItems.map((cartItem) => (
                                    <div className="relative border-t-[1px]">
                                        <div className="flex items-start p-[16px]">
                                            <div className="h-[64px] w-[64px] shrink-0">
                                                <img
                                                    src={cartItem.course.image}
                                                    alt=""
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>

                                            <div className="ml-[12px]">
                                                <Link
                                                    to={`/course/${cartItem.course.id}`}
                                                    className="ud-heading-sm mb-1 ellipse-2-lines after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']"
                                                >
                                                    {cartItem.course.title}
                                                </Link>
                                                <div className="ud-text-xs ellipse-1-line">
                                                    {cartItem.course.user.name}
                                                </div>

                                                <div className="ud-heading-sm">
                                                    {formatCurrency(1000)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-[16px]">
                                <div className="ud-heading-lg">
                                    Total: ₫1,095,000{" "}
                                </div>

                                <NavLink
                                    to={`/cart/${cart.cartItems[0].cartId}`}
                                    className="ud-btn ud-btn-large ud-btn-primary ud-heading-md mt-[4px] w-full"
                                >
                                    Go to cart
                                </NavLink>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>Your cart is empty</div>

                            <Link to={"/"}>Keep shopping</Link>
                        </>
                    )} */}
                <div className="flex items-center p-[16px]">
                    <div className="h-[64px] w-[64px] cursor-pointer overflow-hidden rounded-full">
                        <img
                            src="https://github.com/shadcn.png"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="ml-[8px]">
                        <div className="ud-heading-md">Lai Quang Nam</div>
                        <div className="ud-text-xs ellipse-1-line mt-[0.4rem] block max-w-[15.4rem]">
                            lainam1132001@gmail.com
                        </div>
                    </div>
                </div>

                <div className="border-t-[1px] py-[8px]">
                    <div className="ud-text-sm relative px-[16px] py-[8px] hover:text-purple-700">
                        <Link
                            to="/my-learning"
                            className="after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']"
                        >
                            My Learning
                        </Link>
                    </div>
                    <div className="ud-text-sm relative px-[16px] py-[8px] hover:text-purple-700">
                        <Link
                            to="/cart"
                            className="after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']"
                        >
                            My Cart
                        </Link>
                    </div>
                    <div className="ud-text-sm relative px-[16px] py-[8px] hover:text-purple-700">
                        <Link
                            to="/my-learning/wishlist"
                            className="after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']"
                        >
                            Wishlist
                        </Link>
                    </div>

                    {currentUser ? (
                        currentUser.role === TEACHER_ROLE ? (
                            <div className="ud-text-sm relative px-[16px] py-[8px] hover:text-purple-700">
                                <Link
                                    to="/instructor"
                                    className="after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']"
                                >
                                    Instructor
                                </Link>
                            </div>
                        ) : (
                            <div className="ud-text-sm relative px-[16px] py-[8px] hover:text-purple-700">
                                <Link
                                    to="/register-teacher"
                                    className="after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']"
                                >
                                    Register Teacher
                                </Link>
                            </div>
                        )
                    ) : null}
                </div>

                {/*
                     <div className="border-t-[1px] py-[8px]">
                        <div className="ud-text-sm relative px-[16px] py-[8px] hover:text-purple-700">
                            <Link
                                to="/my-learning"
                                className="after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']"
                            >
                                Notification
                            </Link>
                        </div>
                    </div> */}

                <div className="border-t-[1px] py-[8px]">
                    <div className="ud-text-sm relative px-[16px] py-[8px] hover:text-purple-700">
                        <Link
                            to="/edit-account"
                            className="after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']"
                        >
                            Account settings
                        </Link>
                    </div>
                </div>
                <div className="border-t-[1px] py-[8px]">
                    <div className="ud-text-sm relative px-[16px] py-[8px] hover:text-purple-700">
                        <Link
                            to="/edit-profile"
                            className="after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']"
                        >
                            Edit profile
                        </Link>
                    </div>
                    <div className="ud-text-sm relative px-[16px] py-[8px] hover:text-purple-700">
                        <Link
                            to="/public-profile"
                            className="after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']"
                        >
                            Public profile
                        </Link>
                    </div>
                </div>

                <div className="border-t-[1px] py-[8px]">
                    <div className="ud-text-sm relative px-[16px] py-[8px] hover:text-purple-700">
                        <button
                            onClick={handleLogout}
                            className="after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']"
                        >
                            Log out
                        </button>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}

export default HoverCardAvatar;
