import { NavLinks } from "./navLinks";
import { NavTypes } from "./navTypes";

export const MobileMenu = (props: any) => {
    return (
        <div
            className={
                props.menuOpen
                    ? "nav__mobile--menu-show nav__mobile--menu"
                    : "nav__mobile--menu"
            }
        >
            <NavTypes
                className={"nav__types--list-mobile"}
                currentType={props.currentType}
                setCurrentType={props.setCurrentType}
                setMenuOpen={props.setMenuOpen}
                setSearchTerm={props.setSearchTerm}
                searchTerm={props.searchTerm}
                searchProjects={props.searchProjects}
                projects={props.projects}
            />
            <NavLinks className={"nav__links-mobile"} />
        </div>
    );
};
