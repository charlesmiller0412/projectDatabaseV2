import { v4 as uuidv4 } from "uuid";

export const ProjectCard = (props: any) => {
    return (
        <div
            className="viewport__projectContainer--projectCard"
            id={props.project._id}
            onClick={props.onClick}
        >
            <div className="viewport__projectContainer--projectCard--image">
                <div className="viewport__projectCard--image-gradient"></div>
                <img src={props.project.imgurl} alt={props.project.title} />
            </div>
            <div className="viewport__projectContainer--projectCard--title">
                {props.project.title}
                <span className="viewport__projectContainer--projectCard--title-type">
                    {props.project.type}
                </span>
            </div>
            <div className="viewport__projectContainer--projectCard--skills">
                {props.project.languages.map((skill: any) => (
                    <span key={uuidv4()}>{skill}</span>
                ))}
            </div>
        </div>
    );
};
