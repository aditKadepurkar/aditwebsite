"use client";

import { useState, useEffect } from "react";

type Project = {
    number: string;
    title: string;
    authors: string[];
    description: string;
    date: string;
    src: string;
  };

  async function fetchData(url: string): Promise<Project[]> {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: Project[] =  JSON.parse(await res.json());
      return data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }


  interface ProjectProps {
    project: Project;
  }
  
  function Project({ project }: ProjectProps) {
    return (
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        {/* Render additional project details */}
      </div>
    );
  }


function ProjectLoader() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [projects, setProjects] = useState<Project[]>([]);
  
    useEffect(() => {
      fetchData("http://0.0.0.0:7000/projects")
        .then(data => {
          setProjects(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (projects.length === 0) {
      return <div>No projects available.</div>;
    }
  
    return <Project project={projects[0]} />;
  }
  
  export default ProjectLoader;