import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "KaufDE",
    description:
      "An online store built with React and Tailwind CSS using the FakeStoreAPI. Features include product listing, category filtering, sorting, and add-to-cart functionality.",
    github: "https://github.com/sarangan16/online-store",
    live: "https://online-store-eight-khaki.vercel.app/",
  },
  {
    title: "Job Portal",
    description:
      "A job listing app that fetches real-time data from the Arbeitnow API. Includes filtering by job title and location for a tailored job search experience.",
    github: "https://github.com/sarangan16/jobhunt",
    live: "https://jobhunt-pink.vercel.app/",
  },
  {
    title: "Büro Krazy",
    description:
      "A location-based app to find public offices (Bürgerservice) across Germany. Users can filter by needed services and book a mock appointment for demo purposes. (Still in Process)",
    github: "https://github.com/sarangan16/buro_DE",
    live: "https://buro-de.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black text-xl"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
