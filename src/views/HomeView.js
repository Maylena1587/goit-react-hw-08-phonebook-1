import React from 'react';
import Section from 'Components/Section';
import WelcomeScreen from 'Components/WelcomeScreen';

function HomeView() {
  return (
    <Section flex={true}>
      <WelcomeScreen />
    </Section>
  );
}

export default HomeView;
