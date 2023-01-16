import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export const NavSocial = (props: any) => {
    const links = [
        {
            name: "github",
            link: "https://www.github.com/charlesmiller0412",
            icon: faGithub,
            label: "My GitHub Account",
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/charlesmiller0412",
            icon: faLinkedin,
            label: "My LinkedIn Profile",
        },
        {
            name: "instagram",
            link: "https://instagram.com/millerswebdev",
            icon: faInstagram,
            label: "My Instagram Account",
        },
        {
            name: "twitter",
            link: "https://twitter.com/millersWebDev",
            icon: faTwitter,
            label: "My Twitter Account",
        },
        {
            name: "email",
            link: "mailto:charles@charlesmiller.dev",
            icon: faAt,
            label: "Email me at charles@charlesmiller.dev",
        },
    ];
    return (
        <div className="nav__links--social">
            {links.map((link: any) => (
                <a href={link.link} target="__blank" aria-label={link.label}>
                    <FontAwesomeIcon
                        icon={link.icon}
                        size={props.matches ? "xl" : "2xl"}
                    />
                </a>
            ))}
        </div>
    );
};
