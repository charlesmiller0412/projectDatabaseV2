import { NavSocial } from "./navSocial";

export const NavLinks = (props: any) => {
    return (
        <div className={props.className}>
            <div className="nav__links--portfolio">
                <a href="https://charlesmiller.dev/" target="__blank">
                    https://charlesmiller.dev
                </a>
            </div>
            <NavSocial matches={props.matches} />
        </div>
    );
};
