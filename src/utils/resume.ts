import * as path from 'path';
import * as fs from 'fs';

import { sortByDate, toJSON } from './funcs';
import { WorkInfo, EducationInfo } from '../types';

let [resume] = require('../data/resume-v2');

const addWork = (job: WorkInfo) => {
  resume.work = sortByDate(resume.work.concat(job), { dateProp: 'startDate' });
};

const addEducation = (school: EducationInfo) => {
  resume.education = sortByDate(resume.education.concat(school), {
    dateProp: 'startDate',
  });
};

fs.writeFileSync(
  path.resolve(__dirname, '../data/resume.json'),
  toJSON([resume])
);
