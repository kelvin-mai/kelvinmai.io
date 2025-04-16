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

type IconName = 'at' | 'calendar' | 'dot' | 'link' | 'location';

type IconMap = {
  [key in IconName]: React.FC<{ color: string }>;
};

const icons: IconMap = {
  at: ({ color }) => (
    <>
      <Circle stroke={color} cx='12' cy='12' r='4' />
      <Path stroke={color} d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8' />
    </>
  ),
  calendar: ({ color }) => (
    <>
      <Path stroke={color} d='M8 2v4' />
      <Path stroke={color} d='M16 2v4' />
      <Path
        stroke={color}
        d='M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z'
      />
      <Path stroke={color} d='M3 10h18' />
      <Path stroke={color} d='M15 22v-4a2 2 0 0 1 2-2h4' />
    </>
  ),
  dot: ({ color }) => <Circle stroke={color} cx='12.1' cy='12.1' r='4' />,
  link: ({ color }) => (
    <>
      <Path
        stroke={color}
        d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'
      />
      <Path
        stroke={color}
        d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'
      />
    </>
  ),
  location: ({ color }) => (
    <>
      <Path
        stroke={color}
        d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0'
      />
      <Circle stroke={color} cx='12' cy='10' r='3' />
    </>
  ),
};

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
