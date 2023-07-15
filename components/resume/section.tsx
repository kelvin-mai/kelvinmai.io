import { StyleSheet, Text, View } from '@react-pdf/renderer';

export interface SectionProps extends React.PropsWithChildren {
  title: string;
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: 'Ubuntu Bold',
    color: '#475569',
  },
  separator: {
    height: 2,
    marginTop: 1,
    marginBottom: 12,
    backgroundColor: '#475569',
  },
});

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} />
      {children}
    </View>
  );
};
