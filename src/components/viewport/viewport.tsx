import { ProjectDisplay } from "../projectDisplay/projectDisplay";
import About from "./components/about";
import { ProjectCard } from "./components/projectCard";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

export default function Viewport(props: any) {
    let projects = props.projects;
    let msg;

    const fetchActiveProject = async () => {
        try {
            const response = await fetch(
                `https://dbserver.onrender.com/api/projects/${props.currentProject}`
            );
            const json = await response.json();
            props.setActiveProject(json);
            props.setLoading(false);
            return;
        } catch (err: any) {
            console.error(err.message);
            props.setError(true);
        }
    };

    const handleClick = (e: any) => {
        props.setCurrentProject(e.target.id);
        setTimeout(() => {
            props.setShowProject(true);
        }, 500);
    };

    useEffect(() => {
        fetchActiveProject();
    }, [props.currentProject]);

    props.loading
        ? (msg = <p>loading...</p>)
        : props.error
        ? (msg = <p>Error...</p>)
        : (msg = (
              <div className="viewport__projectContainer">
                  {projects.map((project: any) => (
                      <ProjectCard
                          project={project}
                          key={uuidv4()}
                          onClick={handleClick}
                      />
                  ))}
              </div>
          ));
    return (
        <section className="viewport">
            {props.currentType === "about" ? <About /> : msg}
            {props.showProject ? (
                <ProjectDisplay
                    setShowProject={props.setShowProject}
                    currentProject={props.currentProject}
                    activeProject={props.activeProject}
                />
            ) : (
                ""
            )}
        </section>
    );
}
