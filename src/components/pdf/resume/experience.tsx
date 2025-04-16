import { StyleSheet, Text, View } from '@react-pdf/renderer';

import type { Resume } from '@/lib/constants';
import { renderDates } from '@/lib/utils';
import { ConditionalLink } from './conditional-link';
import { Icon, IconText } from './icons';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 700,
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
    fontSize: 14,
    fontWeight: 700,
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

type ExperienceProps = Resume['work'][0];

export const Experience: React.FC<ExperienceProps> = ({
  url,
  name,
  position,
  location,
  locationType,
  startDate,
  endDate,
  highlights,
}) => {
  return (
    <View style={{ marginBottom: 4 }} wrap={false}>
      <Text style={styles.title}>{position}</Text>
      <View style={[styles.infoContainer, styles.row]}>
        <ConditionalLink url={url}>
          <Text style={styles.company}>{name}</Text>
        </ConditionalLink>
        <View style={styles.row}>
          <IconText
            icon='location'
            text={`${location} - ${locationType ? locationType : 'On-Site'}    `}
          />
          <IconText icon='calendar' text={renderDates(startDate, endDate)} />
        </View>
      </View>
      <View style={styles.list}>
        {highlights.map((h) => (
          <View key={h} style={styles.listItem}>
            <Icon name='dot' size={10} />
            <Text style={{ marginLeft: 4 }}>{h}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
