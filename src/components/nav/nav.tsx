import { useMediaQuery } from "usehooks-ts";
import { NavLinks } from "./components/navLinks";
import { NavLogo } from "./components/navLogo";
import { NavMobile } from "./navMobile";
import { NavTypes } from "./components/navTypes";

export default function Nav(props: any) {
    const matches = useMediaQuery("(max-width: 833px)");

    return (
        <nav className="nav">
            <NavLogo matches={matches} />
            <NavTypes
                className={"nav__types--list"}
                currentType={props.currentType}
                setCurrentType={props.setCurrentType}
                setSearchTerm={props.setSearchTerm}
                searchTerm={props.searchTerm}
                searchProjects={props.searchProjects}
                projects={props.projects}
            />
            <NavLinks matches={matches} className={"nav__links"} />
            <NavMobile
                currentType={props.currentType}
                setCurrentType={props.setCurrentType}
                setSearchTerm={props.setSearchTerm}
                searchTerm={props.searchTerm}
                searchProjects={props.searchProjects}
                projects={props.projects}
            />
        </nav>
    );
}
