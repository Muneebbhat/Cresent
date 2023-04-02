import { Title, AboutContent } from '../../Components/index';
import { AboutWrapper } from './aboutStyle';

const About = () => {
  return (
    <AboutWrapper>
      <Title title='about us' lineWidth={160} />
      <AboutContent />
    </AboutWrapper>
  );
};

export default About;
