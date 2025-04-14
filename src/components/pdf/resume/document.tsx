import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import { IconText } from './icons';
import { Watermark } from './watermark';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Ubuntu',
    fontWeight: 700,
  },
  subtitle: {
    fontFamily: 'Ubuntu',
    fontStyle: 'italic',
  },
  page: {
    paddingTop: 48,
    paddingHorizontal: 50,
    fontFamily: 'Ubuntu',
    fontSize: 10,
    paddingBottom: 36,
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

export const ResumeDocument: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <Document
      author='Kelvin Mai'
      title={`Resume for Kelvin Mai, ${new Date().getFullYear()}`}
    >
      <Page size='A4'>
        <View>
          <Text style={styles.title}>{title || 'Hello world'}</Text>
          <Text style={styles.subtitle}>subtitle</Text>
          <IconText icon='at' text='me@kelvinmai.io' />
        </View>
        <Watermark />
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
