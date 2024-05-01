import { TProjectDataType } from "@/types/types.global";
import { Activity } from "lucide-react";
import React from "react";

interface IParams {
  projectId: string;
}

interface IProps {
  params: IParams;
}

const ProjectDetails: React.FC<IProps> = async ({ params }) => {
  const { projectId } = params;

  const res = await fetch(
    `https://d96cdd39-729e-4baf-a3b1-edfbe6f6eb01.mock.pstmn.io/projects/${projectId}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <div>
      <h1 className="text-xl font-semibold mb-5 text-slate-700">
        Project Details
      </h1>
      {data.data.map((project: TProjectDataType) => (
        <div key={project.id}>
          <div className=" border border-gray-200 p-5 rounded-md">
            <h1 className="text-lg">
              Project id: <span className=" text-slate-600">{project.id}</span>
            </h1>
            <h1 className="text-lg">
              Project name:{" "}
              <span className=" text-slate-600">{project.name}</span>
            </h1>
            <p className="text-lg">
              Project description:{" "}
              <span className=" text-slate-600">{project.description}</span>
            </p>
          </div>
          <div>
            <div>
              <h1 className="text-xl font-semibold my-5 text-slate-700">
                Task Details
              </h1>
              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
                {project.tasks.map((task) => (
                  <div
                    key={task.id}
                    className=" border border-gray-200 p-5 rounded-md"
                  >
                    <h1 className="text-lg">
                      Task title:{" "}
                      <span className=" text-slate-600">{task.title}</span>
                    </h1>
                    <p className="text-lg">
                      Task description:{" "}
                      <span className=" text-slate-600">
                        {task.description}
                      </span>
                    </p>
                    <p className="text-lg">
                      Task assignee:{" "}
                      <span className=" text-slate-600">{task.assignee}</span>
                    </p>
                    <p className="text-lg">
                      Task status:{" "}
                      <span
                        className={`${
                          task.status === "In Progress"
                            ? "text-amber-500"
                            : task.status === "Pending"
                            ? "text-red-500"
                            : "text-green-700"
                        }`}
                      >
                        {task.status}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold my-5 text-slate-700">
                Team Members
              </h1>
              <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
                {project.teamMembers.map((team) => (
                  <div
                    key={team.id}
                    className=" border border-gray-200 p-5 rounded-md"
                  >
                    <h1 className="text-lg">
                      Name: <span className=" text-slate-600">{team.name}</span>
                    </h1>
                    <p className="text-lg">
                      Role: <span className=" text-slate-600">{team.role}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold my-5 text-slate-700">
                Recent Activities
              </h1>
              <div>
                {project.recentActivities.map((recent) => (
                  <div key={recent.id}>
                    <div className=" flex items-center">
                      <Activity size={20} color="#4CA84C" />
                      <h1 className=" text-lg text-slate-700 ml-2">
                        {recent.description}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
