import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "usehooks-ts";

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
            <div
                className={
                    props.showSearch
                        ? "nav__types--search-icon nav__types--search-icon-active"
                        : "nav__types--search-icon"
                }
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input
                className={
                    props.showSearch
                        ? "nav__types--search-input nav__types--search-input-active"
                        : "nav__types--search-input"
                }
                type="search"
                placeholder="Search..."
                value={props.searchTerm}
                onChange={(e) => props.searchProjects(e.target.value)}
            />
        </form>
    );
};
