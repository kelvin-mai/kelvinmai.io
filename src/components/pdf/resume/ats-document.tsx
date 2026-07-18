import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import type { Resume } from '@/lib/constants';
import { mergeDateRanges, renderDates } from '@/lib/utils';
import { Section } from './section';
import { Skill } from './skill';
import { Education } from './education';
import { ConditionalLink } from './conditional-link';
import { IconText } from './icons';

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingHorizontal: 40,
    fontFamily: 'Ubuntu',
    fontSize: 10,
    paddingBottom: 24,
  },
  headingContainer: {
    paddingBottom: 6,
  },
  name: {
    fontSize: 18,
    fontWeight: 700,
  },
  label: {
    fontSize: 14,
    marginTop: 0,
    color: '#7c3aed',
    fontWeight: 700,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
    gap: 6,
  },
  row: {
    flexDirection: 'row',
  },
  expTitle: {
    fontSize: 13,
    fontWeight: 700,
  },
  company: {
    fontSize: 12,
    fontWeight: 700,
    color: '#7c3aed',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  list: {
    marginTop: 2,
  },
  listItem: {
    marginBottom: 1,
    flexDirection: 'row',
  },
  projectTitle: {
    fontSize: 12,
    color: '#7c3aed',
    fontWeight: 700,
  },
  projectDescription: {
    marginTop: 2,
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
          </View>
        </View>

        <Section title='summary' compact>
          <Text>{resume.basics.summary}</Text>
        </Section>

        <Section title='skills' compact>
          {resume.skills.map((s) => (
            <Skill key={s.name} {...s} />
          ))}
        </Section>

        <Section title='professional experience' compact>
          {resume.work
            .filter((w) => !w.archived)
            .map((w) => {
              const { startDate, endDate } = mergeDateRanges(w.dateRanges);
              return (
                <View key={w.name} style={{ marginBottom: 2 }} wrap={false}>
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
                        text={renderDates(startDate, endDate)}
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
              );
            })}
        </Section>

        <Section title='projects' compact>
          {resume.projects.map((p) => (
            <View key={p.name} wrap={false} style={{ marginBottom: 2 }}>
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

        <Section title='education' compact>
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
