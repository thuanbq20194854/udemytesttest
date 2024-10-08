import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export interface ItemMenu {
    name: string;
    id: number;
    // submenu?: ItemMenu[];
    groupName?: string;
    parentID: number | null;
    children: ItemMenu[] | null;
    // root: boolean;
}

const itemMenuData: ItemMenu[] = [
    {
        name: "Type 1",
        id: 1,
        parentID: null,
        children: [
            {
                name: "Sub 1",
                id: 11,
                parentID: null,
                children: null,
            },
            {
                name: "Sub 2",
                id: 12,
                parentID: null,
                children: null,
            },
        ],
    },
    {
        name: "Type 2",
        id: 2,
        parentID: null,
        children: [
            {
                name: "Sub 13",
                id: 13,
                parentID: null,
                children: null,
            },
            {
                name: "Sub 14",
                id: 14,
                parentID: null,
                children: null,
            },
        ],
    },
    {
        name: "Type 3",
        id: 3,
        parentID: null,
        children: [],
    },
];

function CategoryMenuDropdown() {
    const [menuItems, setMenuItems] = useState<ItemMenu[]>(itemMenuData);

    const [isHover, setIsHover] = useState<boolean>(false);

    const [itemIsHover, setItemIsHover] = useState<boolean>(false);

    const [selectedFirstLevelCategory, setSelectedFirstLevelCategory] =
        useState<number | null>(1);

    const renderSecondLevelCategories = menuItems.find(
        (firstLevelItem) => firstLevelItem.id === selectedFirstLevelCategory,
    )?.children;

    return (
        // <div className="relative cursor-pointer text-xs group" onMouseEnter={ () => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <div className="ud-text-sm group relative cursor-pointer">
            <span className="hover:text-app-blue-300">Category</span>
            <div className="group/hover absolute hidden w-[250px] border-[1px] bg-white group-hover:block">
                {menuItems.map((parentItem) => (
                    <li
                        className="relative px-[8px] py-[8px] hover:text-app-blue-300"
                        onMouseEnter={() =>
                            setSelectedFirstLevelCategory(parentItem.id)
                        }
                        key={parentItem.id}
                    >
                        <Link to={"/"}>
                            {parentItem.name}
                            <MdKeyboardArrowRight className="absolute right-0 top-[8px]" />
                        </Link>
                    </li>
                ))}
            </div>
            {selectedFirstLevelCategory && (
                <div className="group/hover absolute left-[250px] hidden w-[250px] border-[1px] border-l-0 bg-white group-hover:block">
                    {renderSecondLevelCategories?.map((parentItem) => (
                        <li
                            className="relative px-[8px] py-[8px] hover:text-app-blue-300"
                            key={parentItem.id}
                        >
                            <Link to={`${parentItem.id}`}>
                                {parentItem.name}
                                <MdKeyboardArrowRight className="absolute right-0 top-[8px]" />
                            </Link>
                        </li>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CategoryMenuDropdown;
