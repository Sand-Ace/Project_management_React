import Button from "./Button";

export default function Sidebar({
  onClick,
  project,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <Button onClick={onClick}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {project.map((project) => {
          let classes =
            "w-full text-left px-2 py1 rounded-sm my-1  hover:bg-stone-800 hover:tex-stone-200";
          if (project.id === selectedProjectId) {
            classes += "bg-stone-800 text-red-200";
          } else {
            classes += "text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={classes}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
