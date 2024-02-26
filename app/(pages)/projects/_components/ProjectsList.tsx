'use client';

export default function ProjectsList({ activeTab }: { activeTab: number }) {
  const scoredProjects = [
    {
      num: 1,
      name: 'sc haptic hand',
      categories: ['not sure', 'something else', 'another category'],
    },
    {
      num: 70,
      name: 'sc haptic hand',
      categories: ['not sure', 'something else'],
    },
  ];

  const unjudgedProjects = [
    {
      num: 75,
      name: 'unj haptic hand',
      categories: ['not sure', 'something else'],
    },
    {
      num: 75,
      name: 'unj haptic hand',
      categories: ['not sure', 'something else'],
    },
    {
      num: 75,
      name: 'unj haptic hand',
      categories: ['not sure', 'something else'],
    },
  ];

  const renderScoredProjects = () => {
    return <div>scored projects</div>;
  };
  const renderuUnjudgedProjects = () => {
    return <div>unjudgedProjects</div>;
  };

  return (
    <div>{activeTab ? renderScoredProjects() : renderuUnjudgedProjects()}</div>
  );
}
