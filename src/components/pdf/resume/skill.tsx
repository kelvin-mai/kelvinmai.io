import { Text } from '@react-pdf/renderer';

import type { Resume } from '@/lib/constants';

type SkillProps = Resume['skills'][0];

export const Skill: React.FC<SkillProps> = ({ name, keywords }) => {
  return (
    <Text style={{ paddingVertical: 1 }}>
      <Text style={{ fontWeight: 700 }}>{name}: </Text>
      <Text>{keywords.join(', ')}</Text>
    </Text>
  );
};
