import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { PiVideoDuotone } from "react-icons/pi";
import { MdOutlineMessage } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import HoverCardAvatar from "./components/HoverCardAvatar";

import UdemyLogo from "@/assets/svg/logo_udemy.svg";

function InstructorLayout() {
    return (
        <div>
            <div className="fixed z-10 h-[100vh] w-[200px] bg-[#2d2f31]">
                <div>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center text-white hover:bg-[#3e4143] ${isActive ? `bg-[#3e4143]` : ""}`
                        }
                    >
                        <div className="p-[16px]">
                            <img
                                src={UdemyLogo}
                                alt=""
                                width={91}
                                height={34}
                            />
                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/instructor/courses"
                        className={({ isActive }) =>
                            `flex items-center p-[16px] text-white hover:bg-[#3e4143] ${isActive ? `bg-[#3e4143]` : ""}`
                        }
                    >
                        <PiVideoDuotone size={24} />

                        <span className="ud-heading-md ml-[28px] text-white">
                            Courses
                        </span>
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/instructor/communication"
                        className={({ isActive }) =>
                            `flex items-center p-[16px] text-white hover:bg-[#3e4143] ${isActive ? `bg-[#3e4143]` : ""}`
                        }
                    >
                        <MdOutlineMessage size={24} />

                        <span className="ud-heading-md ml-[28px] text-white">
                            Communication
                        </span>
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/instructor/performance"
                        className={({ isActive }) =>
                            `flex items-center p-[16px] text-white hover:bg-[#3e4143] ${isActive ? `bg-[#3e4143]` : ""}`
                        }
                    >
                        <FaChartBar size={24} />

                        <span className="ud-heading-md ml-[28px] text-white">
                            Performance
                        </span>
                    </NavLink>
                </div>
            </div>

            <div className="fixed left-0 top-0 flex w-full items-center justify-end bg-red-500 text-black">
                <NavLink to="/" className={"px-[12px] text-[14px]"}>
                    Student
                </NavLink>
                <div className="cursor-pointer px-[12px]">
                    <IoNotificationsOutline size={24} />
                </div>

                <HoverCardAvatar />
            </div>
            <div className="pl-[200px] pt-[72px]">
                <Outlet />
            </div>
        </div>
    );
}

export default InstructorLayout;
