import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import type { Resume } from '@/lib/constants';
import { renderDateRanges } from '@/lib/utils';
import { Section } from './section';
import { Skill } from './skill';
import { Education } from './education';
import { ConditionalLink } from './conditional-link';
import { IconText } from './icons';

const styles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingHorizontal: 50,
    fontFamily: 'Ubuntu',
    fontSize: 10,
    paddingBottom: 36,
  },
  headingContainer: {
    paddingBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
  },
  label: {
    fontSize: 16,
    marginTop: 2,
    color: '#7c3aed',
    fontWeight: 700,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 16,
  },
  row: {
    flexDirection: 'row',
  },
  expTitle: {
    fontSize: 16,
    fontWeight: 700,
  },
  company: {
    fontSize: 14,
    fontWeight: 700,
    color: '#7c3aed',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  list: {
    marginTop: 4,
  },
  listItem: {
    marginBottom: 2,
    flexDirection: 'row',
  },
  projectTitle: {
    fontSize: 12,
    color: '#7c3aed',
    fontWeight: 700,
  },
  projectDescription: {
    marginTop: 4,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 24,
    left: 0,
    right: 35,
    textAlign: 'right',
    color: '#64748b',
  },
});

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '');

type ATSResumeDocumentProps = {
  resume: Resume;
};

export const ATSResumeDocument: React.FC<ATSResumeDocumentProps> = ({
  resume,
}) => {
  const linkedin = resume.basics.profiles.find((p) => p.network === 'Linkedin');
  const github = resume.basics.profiles.find((p) => p.network === 'Github');

  return (
    <Document
      author='Kelvin Mai'
      title={`Resume for Kelvin Mai, ${new Date().getFullYear()}`}
    >
      <Page size='LETTER' style={styles.page}>
        {/* Heading — no photo */}
        <View style={styles.headingContainer}>
          <Text style={styles.name}>{resume.basics.name}</Text>
          <Text style={styles.label}>{resume.basics.label}</Text>
          <View style={styles.contactRow}>
            <IconText icon='at' text={resume.basics.email} />
            <IconText icon='link' text={resume.basics.url} />
            <IconText
              icon='location'
              text={`${resume.basics.location.city}, ${resume.basics.location.region}`}
            />
            {linkedin && (
              <IconText icon='link' text={stripProtocol(linkedin.url)} />
            )}
            {github && (
              <IconText icon='link' text={stripProtocol(github.url)} />
            )}
          </View>
        </View>

        {/* Summary — ATS-standard section name */}
        <Section title='summary'>
          <Text>{resume.basics.summary}</Text>
        </Section>

        {/* Skills */}
        <Section title='skills'>
          {resume.skills.map((s) => (
            <Skill key={s.name} {...s} />
          ))}
        </Section>

        {/* Experience — plain text bullets */}
        <Section title='professional experience'>
          {resume.work.map((w) => (
            <View key={w.name} style={{ marginBottom: 4 }} wrap={false}>
              <Text style={styles.expTitle}>{w.position}</Text>
              <View style={styles.infoRow}>
                <ConditionalLink url={w.url}>
                  <Text style={styles.company}>{w.name}</Text>
                </ConditionalLink>
                <View style={styles.row}>
                  <IconText
                    icon='location'
                    text={`${w.location} - ${w.locationType ?? 'On-Site'}    `}
                  />
                  <IconText
                    icon='calendar'
                    text={renderDateRanges(w.dateRanges)}
                  />
                </View>
              </View>
              <View style={styles.list}>
                {w.highlights.map((h) => (
                  <View key={h} style={styles.listItem}>
                    <Text style={{ marginRight: 4 }}>•</Text>
                    <Text style={{ flex: 1 }}>{h}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </Section>

        {/* Projects — full width, plain bullets */}
        <Section title='projects'>
          {resume.projects.map((p) => (
            <View key={p.name} wrap={false} style={{ marginBottom: 4 }}>
              <ConditionalLink url={p.url}>
                <Text style={styles.projectTitle}>{p.name}</Text>
              </ConditionalLink>
              <Text style={styles.projectDescription}>{p.description}</Text>
              {p.highlights.length > 0 && (
                <View style={styles.list}>
                  {p.highlights.map((h) => (
                    <View key={h} style={styles.listItem}>
                      <Text style={{ marginRight: 4 }}>•</Text>
                      <Text style={{ flex: 1 }}>{h}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </Section>

        {/* Education — full width (no columns) */}
        <Section title='education'>
          {resume.education.map((e) => (
            <Education key={e.institution} {...e} />
          ))}
        </Section>

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
