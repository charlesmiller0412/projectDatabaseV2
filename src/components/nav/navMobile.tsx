import { useState } from "react";
import { MobileMenu } from "./components/mobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const NavMobile = (props: any) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="nav__mobile">
            <div
                className="nav__mobile--icons"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <FontAwesomeIcon
                    icon={menuOpen ? faXmark : faBars}
                    className={menuOpen ? "nav__mobile--icons-open" : ""}
                />
            </div>
            <MobileMenu
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                currentType={props.currentType}
                setCurrentType={props.setCurrentType}
                setSearchTerm={props.setSearchTerm}
                searchTerm={props.searchTerm}
                searchProjects={props.searchProjects}
                projects={props.projects}
            />
        </nav>
    );
};
