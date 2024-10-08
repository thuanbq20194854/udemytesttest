import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Cart } from "@/models/cart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

interface IProps {
    cart: Cart | null;
}

const formatCurrency = (money: number) => {
    const countCharacter = String(money).length;

    const countStep = countCharacter / 3;

    const remaining = countCharacter % 3;

    let result = String(money);

    for (let step = 1; step <= countStep; step++) {
        const index = result.indexOf(",");

        if (index === -1) {
            result = result.slice(0, -3) + "," + result.slice(-3);
        } else {
            if (remaining === 0 && step === countStep) {
                return result;
            } else {
                result =
                    result.slice(0, index - 3) + "," + result.slice(index - 3);
            }
        }
    }

    return "₫" + result;
};

function HoverCardCart(props: IProps) {
    const { cart } = props;

    return (
        <HoverCard openDelay={0.5} closeDelay={0.5}>
            <HoverCardTrigger>
                <div className="group my-[12px] flex items-center px-[12px]">
                    <button className="relative flex items-center group-hover:text-app-blue-300">
                        <Link to={`/cart/cartId`}>
                            <AiOutlineShoppingCart size={24} />
                        </Link>
                        {cart && cart.cartItems.length > 0 && (
                            <div className="text-md absolute right-[-10px] top-[-10px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-purple-700 text-white">
                                {cart.cartItems.length}
                            </div>
                        )}
                    </button>
                </div>
            </HoverCardTrigger>
            <HoverCardContent
                className="w-[300px] rounded-none p-0"
                sideOffset={0}
                align={"end"}
            >
                {cart ? (
                    <>
                        <div className="max-h-[488px] overflow-y-auto first:border-0">
                            {cart.cartItems.map((cartItem) => (
                                <div
                                    className="relative border-t-[1px] p-[16px]"
                                    key={cartItem.course.id}
                                >
                                    <div className="flex items-start">
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
                                                className="ud-heading-sm ellipse-2-lines mb-1 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']"
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
                )}
            </HoverCardContent>
        </HoverCard>
    );
}

export default HoverCardCart;
