import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="At AIHubPro" text="With our expertly designed courses and immersive learning experience, you'll gain the knowledge and skills to navigate the exciting world of AI. Join our community of AI enthusiasts today and be a part of the change that will shape the future!" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Oppurtunity" text="We recognize the potential of AI to transform every industry, from healthcare to finance, manufacturing to transportation, and beyond." />
      <Feature title="Education" text="Our courses are free, ensuring that anyone, anywhere can access quality AI education. We are committed to building a world where AI is used ethically, responsibly, and for the betterment of humanity." />
      <Feature title="Community" text="We also offer a community of AI enthusiasts, where you can connect with like-minded individuals, share ideas, and collaborate on projects. " />
    </div>
  </div>
);

export default WhatGPT3;
