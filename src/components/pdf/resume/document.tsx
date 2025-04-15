import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import type { Resume } from '@/lib/constants';
import { Watermark } from './watermark';
import { Heading } from './heading';
import { Section } from './section';
import { Experience } from './experience';
import { Education } from './education';
import { Project } from './project';
import { Skill } from './skill';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Ubuntu',
    fontWeight: 700,
  },
  subtitle: {
    fontFamily: 'Ubuntu',
    fontStyle: 'italic',
  },
  twoColumn: {
    flexDirection: 'row',
  },
  left: {
    flexGrow: 1,
    marginRight: 16,
    width: '55%',
  },
  right: {
    flexGrow: 1,
    width: '40%',
  },
  page: {
    paddingTop: 48,
    paddingHorizontal: 50,
    fontFamily: 'Ubuntu',
    fontSize: 10,
    paddingBottom: 36,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

type ResumeDocumentProps = {
  resume: Resume;
};

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({ resume }) => {
  return (
    <Document
      author='Kelvin Mai'
      title={`Resume for Kelvin Mai, ${new Date().getFullYear()}`}
    >
      <Page size='A4' style={styles.page}>
        <Heading info={resume.basics} />
        <Section title='introduction'>
          <Text>{resume.basics.summary}</Text>
        </Section>
        <Section title='skills'>
          {resume.skills.map((s) => (
            <Skill key={s.name} {...s} />
          ))}
        </Section>
        <Section title='professional experience'>
          {resume.work.map((w) => (
            <Experience key={w.name} {...w} />
          ))}
        </Section>
        <View style={styles.twoColumn}>
          <View style={styles.left}>
            <Section title='projects'>
              {resume.projects.map((p) => (
                <Project key={p.name} {...p} />
              ))}
            </Section>
          </View>
          <View style={styles.right}>
            <Section title='education'>
              {resume.education.map((e) => (
                <Education key={e.institution} {...e} />
              ))}
            </Section>
          </View>
        </View>
        <Watermark />
        <Text
          fixed
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};
