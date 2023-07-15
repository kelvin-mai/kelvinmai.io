import { StyleSheet, Text, View, Link } from '@react-pdf/renderer';

import { Section } from '.';

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
});

export const Projects = () => {
  const description = `Tutorial and course content creation about web development and software engineering topics.`;
  return (
    <Section title='Projects'>
      <View wrap={false}>
        <Link src='https://www.youtube.com/@KelvinMai' style={styles.link}>
          <Text style={styles.title}>YouTube Channel</Text>
        </Link>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Section>
  );
};
