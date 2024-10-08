import { fakeDataCart } from "@/data/cart";
import { fakeWishList } from "@/data/learning";
import { useAppSelector } from "@/hooks/redux-hooks";
import CategoryMenuDropdown from "@/layouts/components/CategoryMenuDropdown";
import HoverCardAvatar from "@/layouts/components/HoverCardAvatar";
import HoverCardCart from "@/layouts/components/HoverCardCart";
import HoverCardWishlist from "@/layouts/components/HoverCardWishlist";
import { Cart } from "@/models/cart";
import { Learning } from "@/models/learning";
import { selectIsLoggedIn } from "@/services/states/redux/authSlice";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function Header() {
    const navigate = useNavigate();
    const [wishList, setWishList] = useState<Learning[]>([]);
    const [cart, setCart] = useState<Cart | null>(null);

    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    useEffect(() => {
        setWishList(fakeWishList);

        setCart(fakeDataCart);
    }, []);

    console.log("isLoggedIn: ", isLoggedIn);
    return (
        <div className="ud-text-sm flex items-center gap-[8px] px-[24px] py-[12px]">
            <NavLink to={"/"}>
                <img
                    src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                    alt="udemy"
                    className="h-[34px] w-[91px]"
                />
            </NavLink>

            <CategoryMenuDropdown />

            <div className="flex flex-1 items-center rounded-full border-[1px] border-solid border-app-gray-600 py-[12px] pl-[12px] pr-[24px]">
                <IoIosSearch />
                <form className="ml-[12px] w-full">
                    <input
                        type="text"
                        placeholder="Search for anything"
                        className="w-full"
                    />
                </form>
            </div>

            <div className="flex items-center hover:text-app-blue-300">
                <Link to={"/registerTeacher"}>Register Teacher</Link>
            </div>

            <HoverCardWishlist wishList={wishList} />
            <HoverCardCart cart={cart} />
            <HoverCardAvatar />

            {isLoggedIn && (
                <>
                    <Button
                        variant={"outline"}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </Button>
                    <Button onClick={() => navigate("/sign-up")}>
                        Sign Up
                    </Button>
                </>
            )}

            {/* 
      - CategoryDropdown 
      - Search

      - Teach
      - My Learning
      - Cart
      - Wishlist
      - Notification
      - AvatarDropdown
      
      - Login
      - Sing Up


      */}
        </div>
    );
}

export default Header;
