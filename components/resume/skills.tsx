import { StyleSheet, Text, View } from '@react-pdf/renderer';

export type SkillsProps = {
  skills: string[];
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pill: {
    borderRadius: 4,
    color: 'white',
    backgroundColor: '#374151',
    margin: 2,
    padding: '2 4',
  },
  title: {
    fontFamily: 'Ubuntu Bold',
    fontSize: 10,
    color: '#374151',
  },
});

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills: </Text>
      {skills.map((s) => (
        <Text key={s} style={styles.pill}>
          {s}
        </Text>
      ))}
    </View>
  );
};
