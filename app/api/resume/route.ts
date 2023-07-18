import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(resume);
}

const resume = {
  basics: {
    name: 'Kelvin Mai',
    label: 'Software Engineer',
    image: null,
    email: 'kelvin.mai002@gmail.com',
    phone: null,
    url: 'kelvinmai.io',
    summary:
      'Self taught software engineer and functional programming enthusiast with 5+ years of professional experience. Primarily working with web technologies such as TypeScript, Clojure, and React.',
    location: {
      address: null,
      postalCode: null,
      city: 'Las Vegas',
      countryCode: 'US',
      region: 'Nevada',
    },
    profiles: [
      {
        network: 'Youtube',
        url: 'https://youtube.com/c/kelvinmai',
        username: 'kelvinmai',
      },
      {
        network: 'Twitter',
        url: 'https://twitter.com/kelvinmai',
        username: 'kelvinmai',
      },
      {
        network: 'Github',
        url: 'https://github.com/kelvin-mai',
        username: 'kelvinmai',
      },
      {
        network: 'Buy Me A Coffee',
        url: 'https://www.buymeacoffee.com/kelvinmai',
        username: 'kelvinmai',
      },
      {
        network: 'Linkedin',
        url: 'https://www.linkedin.com/in/kelvin-mai-461756152/',
        username: 'Kelvin Mai',
      },
    ],
  },
  work: [
    {
      name: 'Luminare Inc.',
      location: 'Houston, TX',
      locationType: 'Remote',
      description: null,
      skills: ['clojure', 'react', 'postgresql', 'java'],
      url: 'https://www.luminare.io/',
      image: 'luminare.png',
      position: 'Software Engineer',
      startDate: '2021-02-08T08:00:00.000Z',
      endDate: '2023-01-20T08:00:00.000Z',
      summary:
        'Feature development and maintenance on vaccination management software',
      highlights: [
        'Rapid development of COVID-19 vaccination management app during pandemic',
        'Assisted application migration to stable general vaccination software',
        'Development of SMS/Email notifications feature',
        'Optimization and reorganization of data models in PostgreSQL database',
        'Maintained frontend application using Cypress end-to-end testing',
        'Mentored and teach junior developers about Clojure/ClojureScript',
      ],
    },
    {
      name: 'Bonotel Exclusive Travel',
      location: 'Las Vegas, NV',
      locationType: 'Remote',
      description: null,
      skills: ['golang', 'python', 'java', 'redis', 'angular'],
      url: 'https://www.bonotel.com/',
      image: 'bonotel.png',
      position: 'Software Developer',
      startDate: '2020-07-01T08:00:00.000Z',
      endDate: '2021-02-04T08:00:00.000Z',
      summary:
        'Development on various Travel B2B dependant microservices and internal administration tools',
      highlights: [
        'Development on both client facing and administrative frontend applications in both React and Angular',
        'Development and orchaestration of Java and Golang microservices',
        'Implemented a Python based ETL worker to update and propogate Redis data',
        'Created SFTP file transfer automation tool in Java as well as a test SFTP server using docker',
      ],
    },
    {
      name: 'Nucamp Coding Bootcamp',
      location: 'Las Vegas, NV',
      locationType: 'Hybrid',
      description: null,
      skills: ['mongodb', 'javascript', 'react', 'node.js'],
      url: 'https://www.nucamp.co/',
      image: 'nucamp.png',
      position: 'Instructor',
      startDate: '2020-01-01T08:00:00.000Z',
      endDate: '2020-08-01T08:00:00.000Z',
      summary:
        'Bootcamp instructor responsible for teaching students web development technologies.',
      highlights: ['Lead classes in Bootstrap, Node.js, React, React Native'],
    },
    {
      name: 'Vegas.com',
      location: 'Las Vegas, NV',
      locationType: null,
      description: null,
      skills: ['react', 'java', 'rabbitmq', 'docker', 'node.js'],
      url: 'https://www.vegas.com/',
      image: 'vegas.png',
      position: 'Front End Developer',
      startDate: '2019-07-01T07:00:00.000Z',
      endDate: '2020-03-01T08:00:00.000Z',
      summary:
        'Feature development on desktop and mobile retail travel e-commerce web application.',
      highlights: [
        'Implemented mobile cart page and path',
        'Initiated upgrade of React Router from version 2 to 5',
      ],
    },
    {
      name: 'Motivis Learning',
      location: 'Boston, MA',
      locationType: 'Hybrid',
      description: null,
      skills: ['typescript', 'angular', 'postgresql', 'graphql', 'node.js'],
      url: null,
      image: 'motivis.png',
      position: 'Software Developer',
      startDate: '2018-04-01T07:00:00.000Z',
      endDate: '2019-06-01T07:00:00.000Z',
      summary:
        'Research and development with new technologies, as well as feature development and maintenance of the cloud software product, Motivis Learning Management System.',
      highlights: [
        'Designed and prototyped GraphQL layer for internal API',
        'Created microservice to provide full text search using PostgreSQL',
        'Created and maintained React application for schema viewing of internal API',
        'Aided conversion of front end application from Angular 5 to 6',
        'Aided conversion of internal UI components to the more stable PrimeNG components',
      ],
    },
    {
      name: 'DigitalCrafts',
      location: 'Houston, TX',
      locationType: null,
      skills: ['javascript', 'react', 'mongodb', 'node.js'],
      description: null,
      url: 'https://www.digitalcrafts.com/',
      image: 'digitalcrafts.png',
      position: 'Developer In Residence (Internship)',
      startDate: '2018-02-01T08:00:00.000Z',
      endDate: '2018-04-01T07:00:00.000Z',
      summary:
        'Three month paid internship to work with and assist experienced instructors to develop and teach full stack web applications.',
      highlights: [
        'Assist in teaching incoming coding bootcamp students in various web technologies',
        'Offer one on one tutoring and trouble shooting with web development students',
      ],
    },
  ],
  education: [
    {
      institution: 'DigitalCrafts',
      area: 'Full Stack Immersive Bootcamp',
      location: 'Houston, TX',
      startDate: '2017-11-01T07:00:00.000Z',
      endDate: '2018-03-01T08:00:00.000Z',
      studyType: null,
      gpa: null,
      courses: null,
    },
    {
      institution: 'University of California, Riverside',
      area: 'Computer Science Major (No Degree)',
      location: 'Riverside, CA',
      startDate: '2008-09-01T07:00:00.000Z',
      endDate: '2011-02-01T08:00:00.000Z',
      studyType: null,
      gpa: null,
      courses: null,
    },
  ],
};
