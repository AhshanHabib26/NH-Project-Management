"use client";

import { Button, Table } from "antd";
import Link from "next/link";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProjectData } from "@/utils/actions/fetchProjectData";
import NHLoader from "@/libs/loader/Loader";
import { TProjectDataType } from "@/types/types.global";



const AllProjectPage = () => {
  // const projects = getAllProjectsData();

  const { data: projectData, isLoading } = useQuery({
    queryKey: ["projectsData"],
    queryFn: fetchProjectData,
  });

  if (isLoading) {
    return <NHLoader />;
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: any) => (
        <div>
          <Link href={`/dashboard/all-project/${record.id}`}>
            <Button type="primary">View</Button>
          </Link>
          <Button className="mx-2" type="default">
            Edit
          </Button>
          <Button type="dashed">Delete</Button>
        </div>
      ),
    },
  ];

  const data = projectData?.map((project: TProjectDataType) => ({
    key: project.id,
    id: project.id,
    name: project.name,
    description: project.description,
  }));

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">All Projects Overview</h1>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default AllProjectPage;
