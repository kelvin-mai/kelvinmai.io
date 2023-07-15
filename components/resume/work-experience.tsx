import { StyleSheet, Text, View } from '@react-pdf/renderer';

import { resume } from '@app/constants';
import { Section, IconText, Icon, ConditionalLink, Skills } from '.';

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontFamily: 'Ubuntu Bold',
  },
  row: {
    flexDirection: 'row',
  },
  infoContainer: {
    justifyContent: 'space-between',
    marginTop: 4,
    alignItems: 'center',
  },
  company: {
    fontSize: 12,
    fontFamily: 'Ubuntu Bold',
    color: '#7c3aed',
  },
  description: {
    marginTop: 4,
  },
  list: {
    marginTop: 4,
  },
  listItem: {
    marginBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const WorkExperience = () => {
  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });

  const renderDates = (start: string, end: string) =>
    `${formatDate(start)} - ${end ? formatDate(end) : 'Present'}`;
  return (
    <Section title='Professional Experience'>
      {resume.work.map((w) => (
        <View key={w.name} style={{ marginBottom: 12 }} wrap={false}>
          <Text style={styles.title}>{w.position}</Text>
          <View style={[styles.infoContainer, styles.row]}>
            <ConditionalLink url={w.url}>
              <Text style={styles.company}>{w.name}</Text>
            </ConditionalLink>
            <View style={styles.row}>
              <IconText
                icon='location'
                text={`${w.location} - ${
                  w.locationType ? w.locationType : 'On-Site'
                }   `}
              />
              <IconText
                icon='calendar'
                text={renderDates(w.startDate, w.endDate)}
              />
            </View>
          </View>
          <Skills skills={w.skills} />
          <Text style={styles.description}>{w.summary}</Text>
          <View style={styles.list}>
            {w.highlights.map((h) => (
              <View key={h} style={styles.listItem}>
                <Icon name='dot' size={3.5} />
                <Text style={{ marginLeft: 8 }}>{h}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </Section>
  );
};
