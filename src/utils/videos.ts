import slugify from 'slugify';

interface Tutorial {
  videoId: string;
  title: string;
  publishedAt: string | Date;
  tags: string[];
}

interface CourseVideo {
  ordinance: number;
  videoId: string;
  title: string;
  publishedAt: string | Date;
}

interface Course {
  title: string;
  slug: string;
  pid: string;
  lastUpdated: string | Date;
  description: string;
  image: string;
  tags: string[];
  videos: CourseVideo[];
}

export const createTutorial = ({
  videoId,
  title,
  publishedAt,
  tags,
}): Tutorial => {
  return { videoId, title, publishedAt, tags };
};

export const createCourse = ({
  title,
  videos,
  pid,
  tags,
  description,
}): Course => {
  const slug = slugify(title);
  const lastUpdated = new Date(
    Math.max(...videos.map(v => new Date(v.publishedAt)))
  );
  return {
    title,
    slug,
    pid,
    lastUpdated,
    description,
    image: `${slug}.jpg`,
    tags,
    videos,
  };
};
