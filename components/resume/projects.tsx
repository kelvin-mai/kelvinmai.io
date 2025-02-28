import { StyleSheet, Text, View, Link } from '@react-pdf/renderer';

import { Icon, Section } from '.';

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: 'Ubuntu Bold',
    color: '#7c3aed',
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

export const Projects = () => {
  const description = `Tutorial and course content creation about web development and software engineering topics.`;
  const points = [
    'Grew an audience of over 7,000 subscribers on YouTube.',
    'Developed project-based learning resources to simplify complex programming concepts.',
  ];
  return (
    <Section title='Projects'>
      <View wrap={false}>
        <Link src='https://www.youtube.com/@KelvinMai' style={styles.link}>
          <Text style={styles.title}>YouTube Channel</Text>
        </Link>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.list}>
          {points.map((p) => (
            <View key={p} style={styles.listItem}>
              <Icon name='dot' size={3.5} />
              <Text style={{ marginLeft: 8 }}>{p}</Text>
            </View>
          ))}
        </View>
      </View>
    </Section>
  );
};
