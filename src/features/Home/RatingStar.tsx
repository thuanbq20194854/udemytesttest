import { IoMdStarOutline } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";

interface Props {
    averageStar: number;
}

function RatingStar(props: Props) {
    const { averageStar } = props;

    const floor = Math.floor(averageStar);

    const remainPercent = (averageStar % 1) * 100;

    return (
        <div className="flex items-center gap-1">
            <span className="ud-heading-sm mr-2">{averageStar}</span>
            {Array(5)
                .fill(0)
                .map((starItem, index) => {
                    let fillPercent = 100;
                    const starOrder = index + 1;

                    if (starOrder > floor + 1) {
                        fillPercent = 0;
                    }

                    if (starOrder === floor + 1) {
                        fillPercent = Math.round(remainPercent * 10) / 10;
                    }

                    console.log("starOrder: ", starOrder);
                    console.log("fillPercent: ", fillPercent);

                    return (
                        <div className="relative inline-block" key={index}>
                            <IoMdStarOutline size={18} color="#df890c" />
                            <div
                                className={`absolute left-0 top-0 w-[${fillPercent}%] overflow-hidden`}
                            >
                                <IoStarSharp size={18} color="#df890c" />
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default RatingStar;
