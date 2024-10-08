import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Learning } from "@/models/learning";
import { formatCurrency } from "@/utils";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

interface IProps {
    wishList: Learning[];
}

function HoverCardWishlist(props: IProps) {
    const { wishList } = props;

    return (
        <HoverCard openDelay={0.5} closeDelay={0.5}>
            <HoverCardTrigger>
                <div className="group my-[12px] flex items-center px-[12px]">
                    <button className="flex items-center group-hover:text-app-blue-300">
                        <Link to={`/my-learning/wishlist`}>
                            <CiHeart size={24} />
                        </Link>
                    </button>
                </div>
            </HoverCardTrigger>

            <HoverCardContent
                className="w-[300px] rounded-none p-0"
                sideOffset={0}
                align={"end"}
            >
                <div className="max-h-[488px] overflow-y-auto first:border-0">
                    {wishList.map((wishListItem) => (
                        <div
                            className="relative border-t-[1px] p-[16px]"
                            key={wishListItem.id}
                        >
                            <div className="flex items-start">
                                <div className="h-[64px] w-[64px] shrink-0">
                                    <img
                                        src={wishListItem.course.image}
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="ml-[12px]">
                                    <Link
                                        to={`/course/${wishListItem.course.id}`}
                                        className="ud-heading-sm ellipse-2-lines mb-1 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']"
                                    >
                                        {wishListItem.course.title}
                                    </Link>
                                    <div className="ud-text-xs ellipse-1-line">
                                        {wishListItem.course.author.name}
                                    </div>

                                    <div className="ud-heading-sm">
                                        {formatCurrency(1000)}
                                    </div>
                                </div>
                            </div>

                            <button className="ud-btn ud-btn-medium ud-btn-secondary ud-heading-sm mt-[4px] w-full">
                                Add to wishList
                            </button>
                        </div>
                    ))}
                </div>
                <div className="p-[16px]">
                    <div className="ud-heading-lg">Total: ₫1,095,000 </div>

                    <NavLink
                        to={`/wishList/userIdFromReduxUser`}
                        className="ud-btn ud-btn-large ud-btn-primary ud-heading-md mt-[4px] w-full"
                    >
                        Go to wishList
                    </NavLink>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}

export default HoverCardWishlist;
