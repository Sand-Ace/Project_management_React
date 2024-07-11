import { useState } from "react";
import NewProject from "./Components/Newproject";
import Sidebar from "./Components/Sidebar";
import NoProjectSelected from "./Components/NoProjectSelected";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projectState, setprojectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setprojectState((prevState) => {
      let newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: Math.random(),
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setprojectState((prevstate) => {
      return {
        ...prevstate,
        tasks: prevstate.tasks.filter((task) => task.id !== id),
      };
    });
  }

  // This function changes selectedProjectId to null
  function handleStartAddProject() {
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSelectProject(id) {
    setprojectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleCancelAddProject() {
    setprojectState((prevstate) => {
      return {
        ...prevstate,
        selectedProjectId: undefined,
      };
    });
  }

  //we will get project from newProject component and add a new id on it
  function handleNewProjects(project) {
    setprojectState((prevState) => {
      let newProject = {
        ...project,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setprojectState((prevstate) => {
      return {
        ...prevstate,
        selectedProjectId: undefined,
        projects: prevstate.projects.filter(
          (project) => project.id !== prevstate.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  console.log(selectedProject);

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleNewProjects} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onClick={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onClick={handleStartAddProject}
        project={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
