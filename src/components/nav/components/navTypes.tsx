import { useState } from "react";
import { NavSearch } from "./navSearch";
import { useMediaQuery } from "usehooks-ts";

export const NavTypes = (props: any) => {
    const matches = useMediaQuery("(max-width: 833px)");
    const [showSearch, setShowSearch] = useState(false);
    const handleClick = (e: any) => {
        props.setCurrentType(e.target.id);
        props.setSearchTerm("");
        setShowSearch(false);
        if (matches) {
            props.setMenuOpen(false);
        }
    };

    const types = [
        { name: "favorites", id: "favorites" },
        { name: "web", id: "web" },
        { name: "apps", id: "app" },
        { name: "portfolios", id: "portfolio" },
        { name: "designs", id: "design" },
        { name: "all", id: "all" },
        { name: "about", id: "about" },
    ];

    return (
        <div className="nav__types">
            <ul className={props.className}>
                {types.map((type: any) => (
                    <li>
                        <button
                            className={
                                props.currentType === type.id
                                    ? "nav__types--list-active nav__types--list-mobile-active"
                                    : ""
                            }
                            id={type.id}
                            onClick={handleClick}
                            key={type.name}
                        >
                            {type.name}
                        </button>
                    </li>
                ))}
                <NavSearch
                    setSearchTerm={props.setSearchTerm}
                    searchTerm={props.searchTerm}
                    searchProjects={props.searchProjects}
                    projects={props.projects}
                    showSearch={showSearch}
                    setShowSearch={setShowSearch}
                />
            </ul>
        </div>
    );
};
