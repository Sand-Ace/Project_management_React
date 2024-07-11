import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

// First landing page//
export default function NoProjectSelected({ onClick }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectImage}
        alt="An empty tast list"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected.
      </h2>
      <p className="text-stone-400 mb-4">Get started with new one</p>
      <p className="mt-8">
        <Button onClick={onClick}>Create new project</Button>
      </p>
    </div>
  );
}
