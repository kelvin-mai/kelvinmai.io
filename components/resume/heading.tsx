import { View, Text, StyleSheet, Link, Image } from '@react-pdf/renderer';

import { resume } from '@app/constants';
import { getBaseUrl } from '@app/utils';
import { IconText } from '.';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingBottom: 16,
    flexDirection: 'row',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontFamily: 'Ubuntu Bold',
  },
  subTitle: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: 'Ubuntu Bold',
    color: '#7c3aed',
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  link: {
    marginRight: 16,
    textDecoration: 'none',
  },
  imageContainer: {
    position: 'absolute',
    right: 0,
    top: -20,
    width: 100,
    height: 100,
  },
  image: {
    borderRadius: 99999,
  },
});

export const Heading = () => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 1 }}>
        <Text style={styles.title}>{resume.basics.name}</Text>
        <Text style={styles.subTitle}>{resume.basics.label}</Text>
        <View style={styles.infoContainer}>
          <Link src={`mailto:${resume.basics.email}`} style={styles.link}>
            <IconText icon='at' text={resume.basics.email} />
          </Link>
          <Link src={resume.basics.url} style={styles.link}>
            <IconText icon='link' text={resume.basics.url} />
          </Link>
          <IconText icon='location' text={resume.basics.location.city} />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} src={`${getBaseUrl()}/images/me.jpg`} />
      </View>
    </View>
  );
};
