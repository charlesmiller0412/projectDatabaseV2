import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useClickOutside } from "../../hooks/useClickOutside";
export const ProjectDisplay = (props: any) => {
    const wrapperRef = useRef(null);

    useClickOutside(wrapperRef, props);

    const handleClick = () => {
        props.setShowProject(false);
    };

    return (
        <div className="projectDisplay">
            <div className="projectDisplay__container" ref={wrapperRef}>
                <picture className="projectDisplay__container--image">
                    <img
                        src={props.activeProject.imgurl}
                        alt={props.activeProject.title}
                    />
                </picture>
                <div className="projectDisplay__container--title">
                    <h1>{props.activeProject.title}</h1>
                    <span className="projectDisplay__container--title-type">
                        {props.activeProject.type}
                    </span>
                </div>
                <div className="projectDisplay__container--skills">
                    {props.activeProject.languages.map((skill: any) => (
                        <span
                            className="projectDisplay__container--skills-skill"
                            key={uuidv4()}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
                <p className="projectDisplay__container--description">
                    {props.activeProject.description}
                </p>
                <div className="projectDisplay__container--links">
                    <a
                        href={props.activeProject.codeurl}
                        target="__blank"
                        className="projectDisplay__container--links-dark"
                    >
                        source code
                    </a>
                    <a
                        href={props.activeProject.siteurl}
                        target="__blank"
                        className="projectDisplay__container--links-light"
                    >
                        live site
                    </a>
                </div>
                <span
                    className="projectDisplay__container--close"
                    onClick={handleClick}
                >
                    close
                </span>
            </div>
        </div>
    );
};
