import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Accessibility',
    text: 'Making AI accessible to everyone, regardless of their background or experience, is essential. Providing free AI education, training, and resources to all can create a level playing field and foster innovation',
  },
  {
    title: 'Ethical and responsible AI',
    text: 'We must ensure that AI is developed and used ethically and responsibly. AI systems should be designed to serve the common good, uphold human rights, and avoid negative consequences.',
  },
  {
    title: 'Diversity and Inclusion',
    text: 'Ensuring diversity and inclusion in the development and deployment of AI is crucial. AI should reflect the needs and values of all people, regardless of their gender, race, ethnicity, or other characteristics.',
  },
  {
    title: 'Innovation',
    text: 'Encouraging innovation is key to unlocking the potential of AI. AI can be used to create new solutions to complex problems, drive productivity and economic growth, and improve quality of life for people worldwide',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
