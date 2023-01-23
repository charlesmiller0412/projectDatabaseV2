import { useEffect, useState } from "react";
import Nav from "./components/nav/nav";
import Viewport from "./components/viewport/viewport";

function ProjectDatabase() {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentType, setCurrentType] = useState("favorites");
    const [currentProject, setCurrentProject] = useState(null);
    const [showProject, setShowProject] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const [searchTerm, setSearchTerm] = useState<any>("");
    const [searchResults, setSearchResults] = useState<any>("");

    const fetchProjects = async () => {
        try {
            const response = await fetch(
                "https://dbserver.onrender.com/api/projects/"
            );
            const json = await response.json();
            setProjects(json);
            setLoading(false);
            return;
        } catch (err: any) {
            console.error(err.message);
            setError(true);
        }
    };

    const filteredProjects = projects.filter((project: any) => {
        if (currentType === "favorites") {
            return project.favorite === true;
        } else if (currentType === "all") {
            return projects;
        } else {
            return project.type === currentType;
        }
    });

    useEffect(() => {
        fetchProjects();
    }, []);

    // search for input
    function searchProjects(searchTerm: any) {
        setCurrentType("all");
        setSearchTerm(searchTerm);
        if (searchTerm !== "") {
            const searchResults = projects.filter((project: any) =>
                Object.values(project)
                    .join("")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            );
            setSearchResults(searchResults);
        }
    }

    return (
        <div className="projectDatabase">
            <Nav
                setCurrentType={setCurrentType}
                currentType={currentType}
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
                searchProjects={searchProjects}
                projects={projects}
            />
            <Viewport
                projects={searchTerm !== "" ? searchResults : filteredProjects}
                error={error}
                setError={setError}
                loading={loading}
                setLoading={setLoading}
                currentType={currentType}
                showProject={showProject}
                setShowProject={setShowProject}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                activeProject={activeProject}
                setActiveProject={setActiveProject}
            />
        </div>
    );
}

export default ProjectDatabase;
