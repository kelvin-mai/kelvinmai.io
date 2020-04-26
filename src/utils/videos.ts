import slugify from 'slugify';

interface YoutubeVideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    title: string;
  };
}

interface Video {
  videoId: string;
  title: string;
  publishedAt: string | Date;
}

interface Tutorial extends Video {
  tags: string[];
}

interface CourseVideo extends Video {
  ordinance: number;
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

export const videoFromYT = ({
  id: { videoId },
  snippet: { title, publishedAt },
}: YoutubeVideoItem): Video => {
  return {
    videoId,
    title,
    publishedAt,
  };
};

export const createTutorial = (
  item: YoutubeVideoItem,
  tags: string[]
): Tutorial => {
  return {
    ...videoFromYT(item),
    tags,
  };
};

export const createCourseVideoYT = (
  item: YoutubeVideoItem,
  index: number
): CourseVideo => {
  return {
    ordinance: index,
    ...videoFromYT(item),
  };
};

export const createCourse = ({
  title,
  videos,
  pid,
  tags,
  description,
}): Course => {
  const slug = slugify(title.toLocaleLowerCase());
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
