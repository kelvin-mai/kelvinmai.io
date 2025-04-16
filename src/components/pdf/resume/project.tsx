import { StyleSheet, Text, View, Link } from '@react-pdf/renderer';

import type { Resume } from '@/lib/constants';
import { Icon } from './icons';

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    color: '#7c46e1',
    fontWeight: 700,
  },
  description: {
    marginTop: 4,
  },
  link: {
    textDecoration: 'none',
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

type ProjectProps = Resume['projects'][0];

export const Project: React.FC<ProjectProps> = ({
  name,
  url,
  description,
  highlights,
}) => {
  return (
    <View wrap={false} style={{ marginBottom: 4 }}>
      <Link src={url} style={styles.link}>
        <Text style={styles.title}>{name}</Text>
      </Link>
      <Text style={styles.description}>{description}</Text>
      {highlights.length > 0 && (
        <View style={styles.list}>
          {highlights.map((h) => (
            <View key={h} style={styles.listItem}>
              <Icon name='dot' size={10} />
              <Text style={{ marginLeft: 4 }}>{h}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};
