import {
  Page,
  Document,
  StyleSheet,
  Font,
  View,
  Text,
} from '@react-pdf/renderer';

import {
  Heading,
  WorkExperience,
  Watermark,
  Section,
  Education,
  Projects,
} from '.';
import { resume } from '@app/constants';
import { getBaseUrl } from '@app/lib/utils';

const styles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingHorizontal: 50,
    fontFamily: 'Ubuntu',
    fontSize: 10,
    paddingBottom: 36,
  },
  row: {
    flexDirection: 'row',
  },
  left: {
    flexGrow: 1,
    marginRight: 16,
    width: '55%',
  },
  right: {
    flexGrow: 1,
    width: '40%',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const domain = getBaseUrl();

Font.register({
  family: 'Ubuntu',
  fonts: [
    {
      fontStyle: 'normal',
      src: `${domain}/fonts/Ubuntu-R.ttf`,
    },
    {
      fontStyle: 'italic',
      src: `${domain}/fonts/Ubuntu-RI.ttf`,
    },
  ],
});

Font.register({
  family: 'Ubuntu Bold',
  fonts: [
    {
      fontStyle: 'normal',
      src: `${domain}/fonts/Ubuntu-B.ttf`,
    },
    {
      fontStyle: 'italic',
      src: `${domain}/fonts/Ubuntu-BI.ttf`,
    },
  ],
});

Font.register({
  family: 'Ubuntu Mono',
  fonts: [
    {
      fontStyle: 'normal',
      src: `${domain}/fonts/UbuntuMono-R.ttf`,
    },
    {
      fontStyle: 'italic',
      src: `${domain}/fonts/UbuntuMono-Ri.ttf`,
    },
  ],
});

export const Resume = () => {
  return (
    <Document
      author='Kelvin Mai'
      title={`Resume for Kelvin Mai, ${new Date().getFullYear()}`}
    >
      <Page size='A4' style={styles.page}>
        <Heading />
        <View style={styles.row}>
          <View style={styles.left}>
            <Section title='Introduction'>
              <Text>{resume.basics.summary}</Text>
            </Section>
            <Projects />
          </View>
          <View style={styles.right}>
            <Education />
          </View>
        </View>
        <Watermark />
        <WorkExperience />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};
