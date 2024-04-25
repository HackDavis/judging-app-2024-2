'use client';

import { useState } from 'react';
import ProjectsHeader from './_components/ProjectsHeader';
import ProjectsList from './_components/ProjectsList';
import { useSubmissions } from '@hooks/useSubmissions';
// import SearchBar from './_components/SearchBar';

export default function Judges() {
  const [activeTab, setActiveTab] = useState(0);
  const { loading, submissions } = useSubmissions();
  return (
    <div>
      {!loading && JSON.stringify(submissions)}
      <ProjectsHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* <SearchBar /> */}
      <ProjectsList activeTab={activeTab} />
    </div>
  );
}
