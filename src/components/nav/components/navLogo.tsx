import logo from "../../../assets/logoName.png";
import mobileLogo from "../../../assets/navLogoLight.png";

export const NavLogo = (props: any) => {
    return (
        <div className="nav__logo">
            <a href="/">
                <picture>
                    <img
                        src={props.matches ? mobileLogo : logo}
                        alt="logo"
                        className={
                            props.matches
                                ? "nav__logo--mobile"
                                : "nav__logo--desktop"
                        }
                        width={props.matches ? "100px" : "140px"}
                        height={props.matches ? "28px" : "60px"}
                    />
                </picture>
            </a>
        </div>
    );
};
