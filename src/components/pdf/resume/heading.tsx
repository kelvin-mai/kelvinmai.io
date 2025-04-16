import { Text, View, Link, Image, StyleSheet } from '@react-pdf/renderer';

import type { Resume } from '@/lib/constants';
import { getBaseUrl } from '@/lib/utils';
import { IconText } from './icons';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingBottom: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  subTitle: {
    fontSize: 16,
    marginTop: 2,
    color: '#7c46e1',
    fontWeight: 700,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 8,
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

type HeadingProps = {
  info: Resume['basics'];
};

export const Heading: React.FC<HeadingProps> = ({ info }) => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 1 }}>
        <Text style={styles.title}>{info.name}</Text>
        <Text style={styles.subTitle}>{info.label}</Text>
        <View style={styles.infoContainer}>
          <Link src={`mailto:${info.email}`} style={styles.link}>
            <IconText icon='at' text={info.email} />
          </Link>
          <Link src={info.url} style={styles.link}>
            <IconText icon='link' text={info.url} />
          </Link>
          <IconText
            icon='location'
            text={`${info.location.city}, ${info.location.region} ${info.location.countryCode}`}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image style={styles.image} src={`${getBaseUrl()}/images/me.jpg`} />
      </View>
    </View>
  );
};
