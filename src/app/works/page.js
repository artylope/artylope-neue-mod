'use client';
import { nanoid } from 'nanoid';
import works from '@/data/works.json';
import WorkCard from '@/components/WorkCard';

const page = () => {
  console.log('eee', works);
  const worksListItems = works.map((work) => {
    return work.published ? (
      <>
        <WorkCard
          key={nanoid()}
          slug={`/works/${work.slug}`}
          title={work.title}
          desc={work.desc}
          locked={work.private}
          author={work.owner}
          tags={work.tags}
        />
      </>
    ) : (
      ''
    );
  });

  return (
    <main className="flex-grow">
      <div className="container">
        <h1 className="text-3xl">Works</h1>
        {worksListItems}
      </div>
    </main>
  );
};

export default page;
