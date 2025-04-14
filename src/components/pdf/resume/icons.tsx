import { Text, View, StyleSheet, Svg, Circle, Path } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    marginLeft: 4,
  },
});

type IconMap = {
  [key: string]: React.FC<{ color: string }>;
};

const icons: IconMap = {
  at: ({ color }) => (
    <>
      <Circle stroke={color} cx='12' cy='12' r='4' />
      <Path stroke={color} d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8' />
    </>
  ),
};

type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

const defaultSize = 24;

export const Icon: React.FC<IconProps> = ({
  name,
  size = defaultSize,
  color = 'black',
}) => {
  const Component = icons[name];
  return (
    <Svg height={size} width={size} viewBox='0 0 24 24'>
      <Component color={color} />
    </Svg>
  );
};

type IconTextProps = {
  icon: IconName;
  text: string;
};

export const IconText: React.FC<IconTextProps> = ({ icon, text }) => {
  return (
    <View style={styles.container}>
      <Icon size={10} name={icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
