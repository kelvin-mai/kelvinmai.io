import { StyleSheet, Text, View } from '@react-pdf/renderer';

type SectionProps = React.PropsWithChildren & {
  title: string;
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 700,
    color: '#64748b',
  },
  separator: {
    height: 2,
    marginTop: 1,
    marginBottom: 4,
    backgroundColor: '#64748b',
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
