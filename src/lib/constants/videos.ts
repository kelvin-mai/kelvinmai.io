export type VideoEntry = {
  id: string;
  title: string;
  publishedAt: string;
  tags?: string[];
};

export type PlaylistEntry = {
  id: string;
  title: string;
  description?: string;
  image: string;
  tags?: string[];
  videos: VideoEntry[];
};

export type VideoData = {
  standalone: VideoEntry[];
  playlists: PlaylistEntry[];
};

export function getVideoUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function getPlaylistUrl(id: string) {
  return `https://www.youtube.com/playlist?list=${id}`;
}

export function getVideoThumbnail(id: string) {
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

export const videos: VideoData = {
  standalone: [
    {
      id: 'iy6AJzlqdUw',
      title:
        'Dynamically Create a Shacn Registry and Documentation with Next.js and Fumadocs',
      publishedAt: '2025-01-01T00:00:00Z',
      tags: ['typsescript', 'react', 'nextjs'],
    },
    {
      id: '_bmuH5XONww',
      title: 'Use Shadcn Style Recat Components in ClojureScript',
      publishedAt: '2025-04-22T00:00:00Z',
      tags: ['clojure', 'react', 'ClojureScript'],
    },
    {
      id: 'C3drtMt4g2E',
      title: 'Dynamically Render Render Resume PDFs in Next.js Wtth react-pdf',
      publishedAt: '2025-04-15:00:00:00Z',
      tags: ['typescipt', 'react', 'nextjs'],
    },
    {
      id: 'oKdE1oMs6Gk',
      title: 'Reagent Calorie Counter',
      publishedAt: '2022-08-22T15:00:15Z',
      tags: ['clojure', 'react', 'ClojureScript'],
    },
    {
      id: 'ZkJcVCW9GqY',
      title: 'Clojure Crash Course',
      publishedAt: '2021-08-17T15:00:15Z',
      tags: ['clojure'],
    },
    {
      id: 'ODsoc2QQyyU',
      title: 'Clojure Configuration Variables Using Aero',
      publishedAt: '2021-01-28T17:00:23Z',
      tags: ['clojure'],
    },
    {
      id: 'BEMksAV5Cww',
      title: 'Manage REPL state with Integrant',
      publishedAt: '2021-01-26T17:00:04Z',
      tags: ['clojure'],
    },
    {
      id: 'NV7i-3P5SUY',
      title: 'How To Write Unit Tests In Clojure',
      publishedAt: '2021-01-19T17:00:16Z',
      tags: ['clojure'],
    },
    {
      id: 'a23UPryyOww',
      title: 'My neovim Clojure config is NOT Fireplace',
      publishedAt: '2020-12-08T08:00:02Z',
      tags: ['clojure'],
    },
    {
      id: 'xmqKgTD1WFE',
      title: 'Golang TDD Password Cracker',
      publishedAt: '2020-10-06T16:00:27Z',
      tags: ['golang'],
    },
    {
      id: 'KW8jls13YOY',
      title: 'Golang Port Scanner',
      publishedAt: '2020-09-29T16:00:10Z',
      tags: ['golang'],
    },
    {
      id: 'p61lhOvQg2Q',
      title: 'How to Set Up shadow-cljs',
      publishedAt: '2020-07-10T05:49:57Z',
      tags: ['clojure', 'ClojureScript'],
    },
    {
      id: '3AWXM8CN6FA',
      title: 'Introduction to Clojure Ring',
      publishedAt: '2020-07-10T07:00:00Z',
      tags: ['clojure'],
    },
    {
      id: 'feNNPKHCYFg',
      title: 'Deno REST API with Dactyl and DenoDB',
      publishedAt: '2020-06-29T07:00:14Z',
      tags: ['deno', 'typescript'],
    },
    {
      id: 'IEE6wwZ3_9s',
      title: 'Local Databases with Docker and Docker Compose',
      publishedAt: '2020-06-15T07:00:10Z',
      tags: ['Docker', 'MongoDB', 'PostgreSQL'],
    },
    {
      id: 'H6X6AJZna98',
      title: 'Weather App in ReasonML and React',
      publishedAt: '2020-06-12T07:00:05Z',
      tags: ['ReasonML', 'React'],
    },
    {
      id: '0CMmML7Q6Ds',
      title: 'How to Set Up webpack for ReasonML and React',
      publishedAt: '2020-06-10T07:00:00Z',
      tags: ['ReasonML', 'webpack', 'react'],
    },
    {
      id: 'ntMezAkFPYM',
      title: 'Typing Speed Test with React Context',
      publishedAt: '2020-06-08T07:00:14Z',
      tags: ['React'],
    },
    {
      id: '8ftCqZ2-7cQ',
      title: 'Pomodoro Timer with ReasonML and React Hooks',
      publishedAt: '2020-06-01T07:00:03Z',
      tags: ['ReasonML', 'React'],
    },
    {
      id: 'wN0YpP8Ckpc',
      title: 'Recoil State Management for React',
      publishedAt: '2020-05-19T07:00:11Z',
      tags: ['React', 'recoil'],
    },
    {
      id: 'dZd9tZe5w3M',
      title: 'How to use NestJS Config',
      publishedAt: '2020-05-13T07:00:12Z',
      tags: ['NestJS'],
    },
    {
      id: 'Jx-3uMnMuPU',
      title: 'NestJS GraphQL Authentication',
      publishedAt: '2020-05-12T07:00:03Z',
      tags: ['NestJS', 'GraphQL'],
    },
    {
      id: 'q4zlpiGtOxY',
      title: 'NestJS Schema First GraphQL Server',
      publishedAt: '2020-05-07T07:00:26Z',
      tags: ['NestJS', 'GraphQL'],
    },
    {
      id: 'r0TP4DdXeIk',
      title: 'Swagger in NestJS',
      publishedAt: '2020-03-26T08:00:00Z',
      tags: ['Swagger', 'NestJS'],
    },
    {
      id: 'yVk_ImBQqms',
      title: 'Simple Web Server in Clojure deps.edn',
      publishedAt: '2020-03-15T07:00:00Z',
      tags: ['Clojure'],
    },
    {
      id: 'J9m71iuSvlE',
      title: 'Clojure deps.edn Introduction',
      publishedAt: '2020-03-14T15:00:12Z',
      tags: ['Clojure'],
    },
    {
      id: 'Sa-MaCmS0gk',
      title: 'Clojurescript - Random Quote Generator',
      publishedAt: '2019-12-12T08:00:06Z',
      tags: ['Clojure', 'ClojureScript', 'React'],
    },
    {
      id: 'mEY_XFpzMP0',
      title: 'Clojure Deck of Cards',
      publishedAt: '2019-12-09T08:00:11Z',
      tags: ['Clojure'],
    },
    {
      id: 'BmeuZGgMnO4',
      title: 'Clojure for Visual Studio Code',
      publishedAt: '2019-12-08T08:00:00Z',
      tags: ['Clojure', 'Visual Studio Code'],
    },
    {
      id: '7z0W5J6m6VQ',
      title: 'JavaScript Review - Array Higher Order Functions',
      publishedAt: '2019-06-23T16:48:46Z',
      tags: ['JavaScript'],
    },
    {
      id: 't620S8-cwWg',
      title: 'Scala Play Framework Introduction',
      publishedAt: '2019-06-17T16:00:11Z',
      tags: ['Scala', 'Play'],
    },
    {
      id: '_apb4hfUjOk',
      title: 'C# DotNET Core - Todo Rest API',
      publishedAt: '2019-05-21T18:00:04Z',
      tags: ['C#', '.Net'],
    },
    {
      id: 'YuRY8_wJhjU',
      title: 'Binary To Decimal in Javascript without parseInt',
      publishedAt: '2019-04-23T17:00:02Z',
      tags: ['JavaScript'],
    },
    {
      id: 'Bu4zmLEWQW8',
      title: 'React Atom for State Management',
      publishedAt: '2019-04-22T17:00:03Z',
      tags: ['React'],
    },
    {
      id: 'd_BuEAl_CVM',
      title: 'JavaScript Review - Nested Destructuring',
      publishedAt: '2019-03-13T17:00:04Z',
      tags: ['JavaScript'],
    },
    {
      id: 'GE7RjyO3w68',
      title: 'File Uploads in NestJS and Multer',
      publishedAt: '2019-03-11T17:00:04Z',
      tags: ['NestJS', 'Multer'],
    },
    {
      id: 'vHLY2-ZCOiI',
      title: 'NextJS And NestJS Together',
      publishedAt: '2019-02-20T18:00:03Z',
      tags: ['NestJS', 'NextJS', 'React'],
    },
    {
      id: 'DF1MXRg-J48',
      title: 'Factorial in Swift',
      publishedAt: '2019-02-13T19:47:35Z',
      tags: ['Swift'],
    },
    {
      id: 'ieTWSk3tJrs',
      title: 'Parcel Wikipedia Search Engine',
      publishedAt: '2019-02-11T19:00:05Z',
      tags: ['Parcel', 'JavaScript'],
    },
    {
      id: 'NHtOwT35mW0',
      title: 'Fibonacci Sequence in Clojure',
      publishedAt: '2019-02-04T00:58:46Z',
      tags: ['Clojure'],
    },
    {
      id: 'j35sK3HzEog',
      title: 'Brave Clojure Catching Vampires',
      publishedAt: '2019-01-27T19:00:02Z',
      tags: ['Clojure'],
    },
    {
      id: 'hnUNq1zz5b4',
      title: 'Brave Clojure Hitting Hobbits',
      publishedAt: '2019-01-23T18:00:03Z',
      tags: ['Clojure'],
    },
    {
      id: 'ELtZxATN5lQ',
      title: 'NestJS - Websockets',
      publishedAt: '2018-12-31T15:58:35Z',
      tags: ['NestJS'],
    },
    {
      id: 'W60mhHXespM',
      title: 'Reagent - Markdown Previewer',
      publishedAt: '2018-12-26T19:00:03Z',
      tags: ['Clojure', 'ClojureScript', 'React'],
    },
    {
      id: '69lLzjXwuww',
      title: 'How to build an Angular component Library',
      publishedAt: '2018-08-07T19:00:01Z',
      tags: ['Angular'],
    },
    {
      id: 'fkOstSFTiuw',
      title: 'How to set up NestJS from scratch',
      publishedAt: '2018-07-26T19:00:30Z',
      tags: ['NestJS'],
    },
  ],
  playlists: [
    {
      id: 'PLBeQxJQNprbjDQ4fJi58jOcZYA8VYauVh',
      title: 'Go Anon Board',
      image: '/images/playlists/go-anon-board.jpg',
      tags: ['golang', 'postgres'],
      videos: [
        {
          id: 'V3T5d1TZ3wA',
          title: 'Go Anon Board [1] - Production Ready Set Up',
          publishedAt: '2021-03-09T15:00:12Z',
        },
        {
          id: '5kYYnXuPwek',
          title: 'Go Anon Board [2] - GORM Database Connection',
          publishedAt: '2021-03-11T15:00:05Z',
        },
        {
          id: 'eJNlz3c_yPU',
          title: 'Go Anon Board [3] - Business Logic',
          publishedAt: '2021-03-17T14:00:28Z',
        },
        {
          id: 'N-w9yok22W4',
          title: 'Go Anon Board [4] - Feature Complete',
          publishedAt: '2021-03-24T14:00:06Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbhUU5hrPlENx4V3jVhDK2_F',
      title: 'NextJS Jobs Listings',
      image: '/images/playlists/next-jobs.png',
      tags: ['NextJS', 'react', 'typescript'],
      videos: [
        {
          id: '-nDGZK9sbYI',
          title: 'NextJS Job Listings [1] - Project Setup',
          publishedAt: '2021-02-02T17:00:01Z',
        },
        {
          id: '1eFHGrJarEQ',
          title: 'NextJS Job Listings [2] - Card UI',
          publishedAt: '2021-02-04T17:00:01Z',
        },
        {
          id: 'g8gpi-6x8ro',
          title: 'NextJS Job Listings [3] - Job Page',
          publishedAt: '2021-02-09T15:00:16Z',
        },
        {
          id: 'Z4fPxqH38MQ',
          title: 'NextJS Job Listings [4] - Search Widgets',
          publishedAt: '2021-02-11T15:00:11Z',
        },
        {
          id: 'bA3zLZK4Ay8',
          title: 'NextJS Job Listings [5] - Pagination and Deployment',
          publishedAt: '2021-02-16T15:00:11Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbjZmm6JG_mrnqAVr9zIjbxc',
      title: 'Nx Space Explorer',
      image: '/images/playlists/nx-space-explorer.png',
      tags: [
        'nestjs',
        'typescript',
        'nextjs',
        'react',
        'nx',
        'docker',
        'postgres',
      ],
      videos: [
        {
          id: 'kcCiOAjQxAU',
          title: 'Nx Space Explorer [1] - Reinitializing Project',
          publishedAt: '2020-12-14T17:00:15Z',
        },
        {
          id: 'cvuZvpRn91Y',
          title: 'Nx Space Explorer [2] - NestJS Launch Module',
          publishedAt: '2020-12-15T17:00:13Z',
        },
        {
          id: 'oKcjABQVVmg',
          title: 'Nx Space Explorer [3] - NestJS User Module',
          publishedAt: '2020-12-22T16:00:27Z',
        },
        {
          id: 'tsPij-TjKw4',
          title:
            'Nx Space Explorer [4] - Setting up NextJS and GraphQL Codegen',
          publishedAt: '2020-12-28T16:00:09Z',
        },
        {
          id: 'cdpI8o05kn8',
          title: 'Nx Space Explorer [5] - NextJS Launches',
          publishedAt: '2020-12-28T17:00:11Z',
        },
        {
          id: 'yQ0Nm6lKHNY',
          title: 'Nx Space Explorer [6] - SSR and Infinite Scroll',
          publishedAt: '2021-01-05T17:00:34Z',
        },
        {
          id: 'sy1PdnrjhQA',
          title: 'Nx Space Explorer [7] - Client Side Authentication',
          publishedAt: '2021-01-07T17:00:16Z',
        },
        {
          id: 'Y_botHhHpdg',
          title: 'Nx Space Explorer [8] - Cart State Management',
          publishedAt: '2021-01-12T17:00:12Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbjvILPGCw4h7pFOZp_Yms1B',
      title: 'Clojure Auth',
      image: '/images/playlists/clj-auth.jpg',
      tags: ['clojure'],
      videos: [
        {
          id: 'TQ0xIPI-8Z0',
          title: '[Clojure Auth][1] Reviewing Reitit and Ring',
          publishedAt: '2020-11-20T17:00:08Z',
        },
        {
          id: 'OGj5S0H4hPg',
          title: '[Clojure Auth][2] Honeysql and next.jdbc',
          publishedAt: '2020-11-23T17:00:14Z',
        },
        {
          id: 'FcxO5VCPLi4',
          title: '[Clojure Auth][3] Signed JWT authentication with Buddy',
          publishedAt: '2020-11-30T17:00:07Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbgkmvbv80xC8R0SHcPsosjZ',
      title: 'Full Stack Clojure Contact Book',
      image: '/images/playlists/fullstack-clj.png',
      tags: ['clojure'],
      videos: [
        {
          id: 'R5YZRfABbWY',
          title: 'Full Stack Clojure Contact Book - [1] Reitit Ring Set Up',
          publishedAt: '2020-07-13T07:00:04Z',
        },
        {
          id: '2_Pd6QeFqYs',
          title: 'Full Stack Clojure Contact Book - [2] HugSQL Configuration',
          publishedAt: '2020-07-15T07:00:00Z',
        },
        {
          id: 'dMB-EWpR_Cw',
          title: 'Full Stack Clojure Contact Book - [3] API Endpoints',
          publishedAt: '2020-07-17T07:00:16Z',
        },
        {
          id: 'Jf94HNmCXyU',
          title: 'Full Stack Clojure Contact Book - [4] Front End Preparation',
          publishedAt: '2020-07-20T07:00:03Z',
        },
        {
          id: 'PDtv-CL0XeI',
          title: 'Full Stack Clojure Contact Book - [5] React Components',
          publishedAt: '2020-07-27T16:00:12Z',
        },
        {
          id: 'PRDP5ba8lPU',
          title: 'Full Stack Clojure Contact Book - [6] State Management',
          publishedAt: '2020-07-31T16:00:07Z',
        },
        {
          id: 'p8d9VtrdZ7Y',
          title: 'Full Stack Clojure Contact Book - [7] Final Integration',
          publishedAt: '2020-08-03T16:00:15Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbhUlUVzLimbu2NS3iCxnPi_',
      title: 'Angular Countries',
      description:
        'In this video series, take on the frontend mentor challenge to do the countries REST api application with Angular.',
      image: '/images/playlists/angular-countries.png',
      tags: ['Angular', 'RxJS'],
      videos: [
        {
          id: '4nMpvb12Uo8',
          title: 'Angular Countries - [1] Setup and Theming',
          publishedAt: '2020-06-17T07:00:02Z',
        },
        {
          id: 'YkVShyTILpY',
          title: 'Angular Countries - [2] Api Service',
          publishedAt: '2020-06-19T07:00:16Z',
        },
        {
          id: 'hXXwm0QRTEU',
          title: 'Angular Countries - [3] Page Styling',
          publishedAt: '2020-06-20T07:00:12Z',
        },
        {
          id: '4ekenSY6jac',
          title: 'Angular Countries - [4] Filter Options',
          publishedAt: '2020-06-22T07:00:03Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbhO7-QgNP2JLicOyUuNdy5T',
      title: 'React Conduit',
      description:
        'Learn a different React stack, this frontend framework uses Overmind for state management and @reach/router for navigation.',
      image: '/images/playlists/react-conduit.jpg',
      tags: ['React', 'Overmind', 'TypeScript'],
      videos: [
        {
          id: 'ECZTGnFaHm4',
          title: 'React Conduit - Introduction',
          publishedAt: '2020-03-31T12:10:04Z',
        },
        {
          id: 'lq-69Y9IKTM',
          title: 'React Conduit - [1] Setup Reach Router and Overmind JS',
          publishedAt: '2020-03-31T12:34:08Z',
        },
        {
          id: 'QTNbgQu8844',
          title: 'React Conduit - [2] Authentication State in OvermindJS',
          publishedAt: '2020-04-04T15:00:10Z',
        },
        {
          id: 'n-PWPqFnbq8',
          title: 'React Conduit - [3] Authentication Form with Formik',
          publishedAt: '2020-04-05T12:00:33Z',
        },
        {
          id: 'p407XPG66kk',
          title: 'React Conduit - [4] User Settings and Profiles',
          publishedAt: '2020-04-06T12:00:34Z',
        },
        {
          id: 'alPwzUIVZoc',
          title: 'React Conduit - [5] User Settings and Profile part 2',
          publishedAt: '2020-04-08T07:00:00Z',
        },
        {
          id: 'D2Fo61g0RWU',
          title: 'React Conduit - [6] Article Listings',
          publishedAt: '2020-04-10T07:00:02Z',
        },
        {
          id: 'zl4oEmtcJA0',
          title: 'React Conduit - [7] Article Optimizations',
          publishedAt: '2020-04-14T16:51:29Z',
        },
        {
          id: 'q4d9UxxcVpM',
          title: 'React Conduit - [8] Articles User Interface',
          publishedAt: '2020-04-17T07:00:30Z',
        },
        {
          id: 'yIzrEAickfQ',
          title: 'React Conduit - [9] Article Page',
          publishedAt: '2020-04-18T07:00:30Z',
        },
        {
          id: 'BRYjX0O8-m4',
          title: 'React Conduit - [10] Editor Page',
          publishedAt: '2020-04-23T07:00:02Z',
        },
        {
          id: '1SMqLtKXloQ',
          title: 'React Conduit - [11] Adding Comments',
          publishedAt: '2020-04-25T07:00:01Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbjZL5iguWelcxlmWvY4Dmdj',
      title: 'NestJS Blog API',
      description:
        'Learn to create a medium clone Rest API with NestJS and PostgreSQL with the help of TypeORM.',
      image: '/images/playlists/nestjs-blog-api.jpg',
      tags: ['NestJS', 'PostgreSQL', 'TypeScript'],
      videos: [
        {
          id: 'kMXp20gn-ms',
          title: 'NestJS Blog API - [0] Introduction',
          publishedAt: '2020-03-19T15:00:32Z',
        },
        {
          id: 'AZfa-AFwjgo',
          title: 'NestJS Blog API - [1] Database Connection',
          publishedAt: '2020-03-19T15:00:01Z',
        },
        {
          id: 'DreKPQNBCYc',
          title: 'NestJS Blog API - [2] Begin Auth Module',
          publishedAt: '2020-03-20T15:00:11Z',
        },
        {
          id: 'EZxkEr8-cW8',
          title: 'NestJS Blog API - [3] User Entity',
          publishedAt: '2020-03-21T15:00:07Z',
        },
        {
          id: 'B6deaSUgkHc',
          title: 'NestJS Blog API - [4] Authentication',
          publishedAt: '2020-03-22T15:00:04Z',
        },
        {
          id: 'PAFR7DpUBEY',
          title: 'NestJS Blog API - [5] User Module',
          publishedAt: '2020-03-22T15:15:00Z',
        },
        {
          id: 'yReDGmdFQ0A',
          title: 'NestJS Blog API - [6] User Profile',
          publishedAt: '2020-03-22T16:00:19Z',
        },
        {
          id: '00MeclezvlA',
          title: 'NestJS Blog API - [7] e2e Testing with Postman',
          publishedAt: '2020-03-23T15:00:00Z',
        },
        {
          id: 'yHdrQlF62Zc',
          title: 'NestJS Blog API - [8] Article Entity',
          publishedAt: '2020-03-24T15:00:23Z',
        },
        {
          id: '-maNVWh4_eA',
          title: 'NestJS Blog API - [9] Article CRUD',
          publishedAt: '2020-03-24T15:15:00Z',
        },
        {
          id: 'tLzOvoVr7Qg',
          title: 'NestJS Blog API - [10] Find Article',
          publishedAt: '2020-03-24T16:00:17Z',
        },
        {
          id: 'lYrykF2Uqvk',
          title: 'NestJS Blog API - [11] Comment Module',
          publishedAt: '2020-03-25T15:00:30Z',
        },
        {
          id: 'dl9srgihNAY',
          title: 'NestJS Blog API - [12] Refactor',
          publishedAt: '2020-03-25T15:30:02Z',
        },
        {
          id: 'r0TP4DdXeIk',
          title: 'Swagger in NestJS',
          publishedAt: '2020-03-26T15:00:38Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbgAeAi15SWDS8Is28HxazqV',
      title: 'Redux Tip Calculator',
      description:
        'Learn how to integrate the Redux state management library with a Typescript React project.',
      image: '/images/playlists/redux-tip.jpg',
      tags: ['React', 'Redux', 'TypeScript'],
      videos: [
        {
          id: 'zq-HRXtj2TI',
          title: 'Redux Tip Calculator [Introduction]',
          publishedAt: '2020-01-15T08:00:14Z',
        },
        {
          id: 'l2Cj3yo7W4E',
          title: 'Redux Tip Calculator [1] Create Store',
          publishedAt: '2020-01-15T08:00:15Z',
        },
        {
          id: 'PATxpvzcJmg',
          title: 'Redux Tip Calculator [2] Actions and Reducers',
          publishedAt: '2020-01-16T08:00:02Z',
        },
        {
          id: 'sbzbOXorg60',
          title: 'Redux Tip Calculator [3] MVP',
          publishedAt: '2020-01-17T08:00:11Z',
        },
        {
          id: 'm12trZiVoMY',
          title: 'Redux Tip Calculator [4] Styling with TailwindCSS',
          publishedAt: '2020-01-18T08:00:08Z',
        },
        {
          id: 'Fq0tlyFatGw',
          title: 'Redux Tip Calculator [5] Testing with Jest',
          publishedAt: '2020-01-19T08:00:02Z',
        },
        {
          id: '1n8IY12ROrg',
          title: 'Redux Tip Calculator [6] Bug Fixes',
          publishedAt: '2020-01-20T08:00:01Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbhb6kOJS477I_laHQTGgjg8',
      title: 'Scala Mongo API',
      description:
        'Learn how to create a simple Rest API with the Play framework in Scala and use MongoDB as the data layer.',
      image: '/images/playlists/scala-mongo.jpg',
      tags: ['Scala', 'MongoDB'],
      videos: [
        {
          id: 'XD_X3BMsRhg',
          title: 'Scala Mongo API [1] - Data Model',
          publishedAt: '2019-06-20T16:00:05Z',
        },
        {
          id: '_C5IlQgJbTo',
          title: 'Scala Mongo API [2] - Service Layer',
          publishedAt: '2019-06-21T16:00:05Z',
        },
        {
          id: 'G6But_7ug9Q',
          title: 'Scala Mongo API [3] - API Controller',
          publishedAt: '2019-06-22T16:00:05Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbiykCyVNcSExTgytMMjSjnQ',
      title: 'NestJS ECommerce',
      description:
        'Learn how to create an e-commerce server architecture Rest API in NestJS with MongoDB as the database.',
      image: '/images/playlists/nestjs-commerce.jpg',
      tags: ['MongoDB', 'NestJS'],
      videos: [
        {
          id: '-8Q62rTswSQ',
          title: 'NestJS ECommerce - [0] Introduction',
          publishedAt: '2019-02-15T19:00:00Z',
        },
        {
          id: 'PPCuBln5FyE',
          title: 'NestJS ECommerce - [1] Environment Set Up',
          publishedAt: '2019-02-16T19:00:00Z',
        },
        {
          id: 'hcKTQS9RxA0',
          title: 'NestJS ECommerce - [2] Models',
          publishedAt: '2019-02-17T18:00:02Z',
        },
        {
          id: 's33_LCPrrGc',
          title: 'NestJS ECommerce - [3] Shared User Service',
          publishedAt: '2019-02-22T18:00:06Z',
        },
        {
          id: 'BR0CaqiHco4',
          title: 'NestJS ECommerce - [4] Passport Authentication',
          publishedAt: '2019-02-23T18:00:00Z',
        },
        {
          id: 'D7bCHaiSTNY',
          title: 'NestJS ECommerce - [5] End To End Testing',
          publishedAt: '2019-02-24T18:00:00Z',
        },
        {
          id: 'SL-VQcBCQIM',
          title: 'NestJS ECommerce - [6] Authorization',
          publishedAt: '2019-02-27T18:00:07Z',
        },
        {
          id: 'MYGghqyGLOU',
          title: 'NestJS ECommerce - [7] Testing Improvements',
          publishedAt: '2019-02-28T18:00:02Z',
        },
        {
          id: 'cN8xKSWcepo',
          title: 'NestJS ECommerce - [8] Product Listings',
          publishedAt: '2019-03-03T18:00:04Z',
        },
        {
          id: 'yu0-PjfVdTA',
          title: 'NestJS ECommerce - [9] Product Testing',
          publishedAt: '2019-03-04T18:00:05Z',
        },
        {
          id: 'uB3NBbXa_MU',
          title: 'NestJS ECommerce - [10] Test Driven Development',
          publishedAt: '2019-03-12T17:00:10Z',
        },
        {
          id: 'CCKsE2_84Cc',
          title: 'NestJS ECommerce - [11] TDD Order Service',
          publishedAt: '2019-03-30T16:00:00Z',
        },
        {
          id: '0CfuBokD_xA',
          title: 'NestJS ECommerce - [12] Google Cloud Deployment',
          publishedAt: '2019-04-02T16:00:01Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbiJm55q7nTAfhMmzIC8MWxc',
      title: 'Ideas App - Angular NgRx',
      description:
        'Learn Angular and NgRx state management by creating the front end of the Ideas app.',
      image: '/images/playlists/angular-ideas.jpg',
      tags: ['Angular', 'NgRx', 'RxJS'],
      videos: [
        {
          id: 'wR8IslNgtG0',
          title: 'Ideas App - Angular NgRx 01 Introduction',
          publishedAt: '2018-10-27T23:50:37Z',
        },
        {
          id: 'CP6y5L21DIQ',
          title: 'Ideas App - Angular NgRx 02 Services',
          publishedAt: '2018-10-28T19:12:16Z',
        },
        {
          id: 'wvAiaepEBj4',
          title: 'Ideas App - Angular NgRx 03 Actions and Reducers',
          publishedAt: '2018-10-29T19:00:05Z',
        },
        {
          id: 'pZBVRYT4oSc',
          title: 'Ideas App - Angular NgRx 04 Effects',
          publishedAt: '2018-10-30T18:30:00Z',
        },
        {
          id: 'DjS6SFBLPb4',
          title: 'Ideas App - Angular NgRx 05 Dispatching Authentication',
          publishedAt: '2018-11-01T18:30:01Z',
        },
        {
          id: '_c37v6IVWz4',
          title: 'Ideas App - Angular NgRx 06 Reactive Forms',
          publishedAt: '2018-11-02T21:30:00Z',
        },
        {
          id: 'Z3qwb5ZovKg',
          title: 'Ideas App - Angular NgRx 07 Error Toast',
          publishedAt: '2018-11-21T00:19:05Z',
        },
        {
          id: 'SENW0O6ggo8',
          title: 'Ideas App - Angular NgRx 08 Router Store',
          publishedAt: '2018-11-21T19:41:02Z',
        },
        {
          id: '0kSU1e5LK08',
          title: 'Ideas App - Angular NgRx 09 User Feature Module',
          publishedAt: '2018-11-25T19:30:00Z',
        },
        {
          id: 'zs3IN3FYjoM',
          title: 'Ideas App - Angular NgRx 10 Entity and Selectors',
          publishedAt: '2018-12-05T20:00:12Z',
        },
        {
          id: 'JYbHDfJNYhw',
          title: 'Ideas App - Angular NgRx 11 CRUD Operations',
          publishedAt: '2018-12-09T19:00:02Z',
        },
        {
          id: 'PEh7BqexJOI',
          title: 'Ideas App - Angular NgRx 12 Selected Idea',
          publishedAt: '2018-12-10T19:30:01Z',
        },
        {
          id: 'rLe1cGBFbNI',
          title: 'Ideas App - Angular NgRx 13 Conclusion',
          publishedAt: '2018-12-16T21:44:37Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbiJm55q7nTAfhMmzIC8MWxc',
      title: 'Ideas App - NestJS GraphQL',
      description: 'Add a GraphQL layer to the Ideas app.',
      image: '/images/playlists/nestjs-ideas-graphql.jpg',
      tags: ['NestJS', 'TypeScript', 'GraphQL'],
      videos: [
        {
          id: 'lIOMUCdA4Zs',
          title: 'Ideas App - NestJS GraphQL 01 Integration',
          publishedAt: '2018-10-14T15:48:00Z',
        },
        {
          id: 'EMuDORCLxDs',
          title: 'Ideas App - NestJS GraphQL 02 Queries',
          publishedAt: '2018-10-15T18:30:00Z',
        },
        {
          id: 'C261knBYRyk',
          title: 'Ideas App - NestJS GraphQL 03 User Resolver',
          publishedAt: '2018-10-16T18:30:00Z',
        },
        {
          id: 'VSyHNRbzKXM',
          title: 'Ideas App - NestJS GraphQL 04 Comment Mutations',
          publishedAt: '2018-10-21T18:00:03Z',
        },
        {
          id: 'opYgfyQnKwE',
          title: 'Ideas App - NestJS GraphQL 05 Idea Resolver',
          publishedAt: '2018-10-22T18:30:00Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbiJm55q7nTAfhMmzIC8MWxc',
      title: 'Ideas App - NestJS API',
      description:
        'Learn NestJS by creating a Rest API with PostgreSQL as the database and TypeORM.',
      image: '/images/playlists/nestjs-ideas.jpg',
      tags: ['NestJS', 'PostgreSQL', 'TypeScript'],
      videos: [
        {
          id: 'NF9Xn4g5MJY',
          title: 'Ideas App - NestJS API 01 Introduction',
          publishedAt: '2018-09-14T23:08:51Z',
        },
        {
          id: 'EHlhvy-fh90',
          title: 'Ideas App - NestJS API 02 Database Connection',
          publishedAt: '2018-09-15T20:34:48Z',
        },
        {
          id: 'T4YnLTtIMw4',
          title: 'Ideas App - NestJS API 03 CRUD Operations',
          publishedAt: '2018-09-16T17:44:07Z',
        },
        {
          id: 'XP_gONOksuM',
          title: 'Ideas App - NestJS API 04 Errors and Logging',
          publishedAt: '2018-09-18T18:00:02Z',
        },
        {
          id: 'LQWwVDh3Vx4',
          title: 'Ideas App - NestJS API 05 Validation Errors',
          publishedAt: '2018-09-22T02:10:51Z',
        },
        {
          id: 'gCK8BZyNaos',
          title: 'Ideas App - NestJS API 06 Users Module',
          publishedAt: '2018-09-25T18:00:03Z',
        },
        {
          id: 'rDEWj3aK5hI',
          title: 'Ideas App - NestJS API 07 Authentication',
          publishedAt: '2018-09-27T18:30:01Z',
        },
        {
          id: '4GC8z0EfV6g',
          title: 'Ideas App - NestJS API 08 Relationships',
          publishedAt: '2018-09-29T19:45:08Z',
        },
        {
          id: 'q7uvzk9PWLw',
          title: 'Ideas App - NestJS 09 API Junction Tables',
          publishedAt: '2018-10-02T18:00:05Z',
        },
        {
          id: 'MYFaIVj4GbA',
          title: 'Ideas App - NestJS API 10 Comments Module',
          publishedAt: '2018-10-07T00:07:54Z',
        },
        {
          id: 'zZZ4w-RCszQ',
          title: 'Ideas App - NestJS API 11 Fake Data',
          publishedAt: '2018-10-10T18:30:01Z',
        },
        {
          id: 'p8sKVKMJRco',
          title: 'Ideas App - NestJS API 12 Pagination',
          publishedAt: '2018-10-11T18:30:00Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbgZgivXyBX-djYAhMJGE93B',
      title: 'Angular Simon Game',
      description: 'Learn Angular by creating a simon says game.',
      image: '/images/playlists/angular-simon.jpg',
      tags: ['Angular'],
      videos: [
        {
          id: 'n03enYvqlN4',
          title: 'Angular Simon Game - 01 Introduction',
          publishedAt: '2018-08-20T01:19:03Z',
        },
        {
          id: 'kaIHOSxBN2w',
          title: 'Angular Simon Game - 02 Components',
          publishedAt: '2018-08-20T19:30:02Z',
        },
        {
          id: 'zCRWi7_uP2I',
          title: 'Angular Simon Game - 03 Game State',
          publishedAt: '2018-08-22T19:30:01Z',
        },
        {
          id: 'nUKGaMuKTEo',
          title: 'Angular Simon Game - 04 Set State',
          publishedAt: '2018-08-25T18:31:10Z',
        },
        {
          id: 'GRhn5oBzCEQ',
          title: 'Angular Simon Game - 05 Styling',
          publishedAt: '2018-08-26T18:30:02Z',
        },
        {
          id: 'k8qpbqgIcMk',
          title: 'Angular Simon Game - 06 Tease Player',
          publishedAt: '2018-08-28T18:17:12Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbhvbBAmoyIJykggzE_JIhWe',
      title: 'TypeScript Groceries API',
      description:
        'Learn Typescript by creating a node.js express server that manages groceries lists.',
      image: '/images/playlists/ts-groceries.jpg',
      tags: ['TypeScript', 'PostgreSQL'],
      videos: [
        {
          id: 'rKIy0rlzqsU',
          title: 'TypeScript Groceries API - 01 Intro and Set up',
          publishedAt: '2018-07-12T23:18:48Z',
        },
        {
          id: 'I8pqxI7GDs0',
          title: 'TypeScript Groceries API - 02 Database Connection',
          publishedAt: '2018-07-14T00:59:24Z',
        },
        {
          id: 'FPSYjuvh6d4',
          title: 'TypeScript Groceries API - 03 Setting up grocery routes',
          publishedAt: '2018-07-15T05:16:41Z',
        },
        {
          id: '7JejrBPr0iM',
          title: 'TypeScript Groceries API - 04 Groceries CRUD functions',
          publishedAt: '2018-07-15T14:05:33Z',
        },
        {
          id: 'pI3ILKjIK6Y',
          title: 'TypeScript Groceries API - 05 Item relations',
          publishedAt: '2018-07-17T23:29:01Z',
        },
      ],
    },
    {
      id: 'PLBeQxJQNprbgrNfcntLO8N2Y-dzlMZXZe',
      title: 'Full Stack MERN Voting App',
      description:
        'Learn all the parts of the MERN stack as well as Redux by creating a voting application.',
      image: '/images/playlists/mern-vote.jpg',
      tags: ['React', 'MongoDB', 'Redux', 'JavaScript'],
      videos: [
        {
          id: '0oziV0FLhXc',
          title: 'Full Stack MERN Voting App - Intro',
          publishedAt: '2018-06-23T04:14:53Z',
        },
        {
          id: '6vZdhqEqEWU',
          title: 'Full Stack MERN Voting App - 01 Setup',
          publishedAt: '2018-06-23T04:43:53Z',
        },
        {
          id: 'P6pBjD46F8E',
          title: 'Full Stack MERN Voting App - 02 Modularize Express',
          publishedAt: '2018-06-23T18:43:30Z',
        },
        {
          id: 'J6-khGTiR7k',
          title: 'Full Stack MERN Voting App - 03 Connecting to MongoDB',
          publishedAt: '2018-06-23T22:17:10Z',
        },
        {
          id: 'LCa-OlblwSI',
          title: 'Full Stack MERN Voting App - 04 Login and Register',
          publishedAt: '2018-06-26T01:52:21Z',
        },
        {
          id: 'jZt8MbnWyYY',
          title: 'Full Stack MERN Voting App - 05 JSON Web Tokens',
          publishedAt: '2018-06-28T22:57:00Z',
        },
        {
          id: 'EJQfRNz9pEQ',
          title: 'Full Stack MERN Voting App - 06 Starting poll routes',
          publishedAt: '2018-07-01T03:17:26Z',
        },
        {
          id: '578bx3HWVQo',
          title: 'Full Stack MERN Voting App - 07 Finishing poll routes',
          publishedAt: '2018-07-01T14:35:36Z',
        },
        {
          id: 'RMyDQc_YLhQ',
          title: 'Full Stack MERN Voting App - 08 Setup React client',
          publishedAt: '2018-07-02T23:23:14Z',
        },
        {
          id: '4ccVS6bYVdo',
          title: 'Full Stack MERN Voting App - 09 Creating API service',
          publishedAt: '2018-07-03T21:15:27Z',
        },
        {
          id: 'c6eHO80aidg',
          title: 'Full Stack MERN Voting App - 10 Begin Redux set up',
          publishedAt: '2018-07-04T14:19:47Z',
        },
        {
          id: 'N55gAn338bE',
          title: 'Full Stack MERN Voting App - 11 Finish Redux set up',
          publishedAt: '2018-07-04T16:37:41Z',
        },
        {
          id: 'bM0nLhU6j-Y',
          title: 'Full Stack MERN Voting App - 12 Creating Auth component',
          publishedAt: '2018-07-05T21:55:20Z',
        },
        {
          id: 'rMsQbP3QsEw',
          title: 'Full Stack MERN Voting App - 13 Handling errors in React',
          publishedAt: '2018-07-06T20:07:30Z',
        },
        {
          id: 'HTIy6jQWn2w',
          title: 'Full Stack MERN Voting App - 14 Adding React Router',
          publishedAt: '2018-07-07T05:22:02Z',
        },
        {
          id: 'YAy7Yh7Aqac',
          title: 'Full Stack MERN Voting App - 15 Application navigation',
          publishedAt: '2018-07-08T18:22:48Z',
        },
        {
          id: 'BMAcSVgRV_c',
          title: 'Full Stack MERN Voting App - 16 Adding polls to Redux store',
          publishedAt: '2018-07-08T19:11:34Z',
        },
        {
          id: 'BPiP6gDYWwg',
          title: 'Full Stack MERN Voting App - 17 Adding polls to front end',
          publishedAt: '2018-07-08T22:06:16Z',
        },
        {
          id: 'XY-8kL2bQZs',
          title: 'Full Stack MERN Voting App - 18 Handling individual polls',
          publishedAt: '2018-07-09T22:38:17Z',
        },
        {
          id: 'gHVqqC1bCZU',
          title: 'Full Stack MERN Voting App - 19 Finish application logic',
          publishedAt: '2018-07-10T20:31:16Z',
        },
        {
          id: '56dtu30fQU8',
          title: 'Full Stack MERN Voting App - 20 Styling',
          publishedAt: '2018-07-11T20:00:00Z',
        },
      ],
    },
  ],
};
