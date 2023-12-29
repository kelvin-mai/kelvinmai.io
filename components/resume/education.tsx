import { Text, View, StyleSheet } from '@react-pdf/renderer';

import { resume } from '@app/constants';
import { renderDates } from '@app/lib/utils';
import { IconText, Section } from '.';

const styles = StyleSheet.create({
  container: { marginBottom: 8 },
  title: { fontSize: 12, fontFamily: 'Ubuntu Bold', color: '#7c3aed' },
  area: { fontStyle: 'italic', marginBottom: 4 },
  info: { flexDirection: 'row', justifyContent: 'space-between' },
});

export const Education = () => {
  return (
    <Section title='education'>
      {resume.education.map((e) => (
        <View key={e.institution} style={styles.container} wrap={false}>
          <Text style={styles.title}>{e.institution}</Text>
          <Text style={styles.area}>{e.area}</Text>
          <View style={styles.info}>
            <IconText icon='location' text={e.location} />
            <IconText
              icon='calendar'
              text={renderDates(e.startDate, e.endDate)}
            />
          </View>
        </View>
      ))}
    </Section>
  );
};
