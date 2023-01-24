import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "usehooks-ts";
import { useEffect } from "react";

export const NavSearch = (props: any) => {
    const matches = useMediaQuery("(min-width: 834px)");

    const handleClick = () => {
        matches ? props.setShowSearch(!props.showSearch) : "";
    };

    return (
        <form
            className={
                props.showSearch
                    ? "nav__types--search nav__types--search-active"
                    : "nav__types--search"
            }
        >
            <input
                className={
                    props.showSearch
                        ? "nav__types--search-input nav__types--search-input-active"
                        : "nav__types--search-input"
                }
                id="searchInput"
                type="search"
                placeholder="Search..."
                value={props.searchTerm}
                onChange={(e) => props.searchProjects(e.target.value)}
                autoFocus
            />
        </form>
    );
};
