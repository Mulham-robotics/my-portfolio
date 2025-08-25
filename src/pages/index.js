import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Card from '../components/Card';
import Section from '../components/Section';
import styles from '../css/index.module.css';

export default function Home() {
  return (
    <Layout title="Home" description="Portfolio Homepage">
      <main>
        <header class="hero hero--primary heroBanner_qdFl">
          <div class="container">
            <h1 class="hero__title">Mulham Fetna</h1>
            <p class="hero__subtitle">Lets deep dive into robotics / ai / ml / devops world</p>
          </div>
        </header>
        
        <Section title="Technologies" subtitle="Read about technologies i have worked with , guides to install , tricks  and related projects to play with">
          <Card
            title="Docker"
            subtitle="Latest trends in Docker"
            hashtags={['ai', 'deeplearning', 'research']}
            link="/docs/technologies/docker"
            imageSrc="/img/docker.svg"
            imageAlt="Docker"
            
          />
        </Section>

        <Section title="Projects" subtitle="Read about Projects i have worked with , guides to install , tricks  and related projects to play with">
          <Card
            title="Docker"
            subtitle="Latest trends in Docker"
            hashtags={['ai', 'deeplearning', 'research']}
            link="/docs/technologies/docker"
            imageSrc="/img/docker.svg"
            imageAlt="Docker"
            
          />
        </Section>

        <Section title="Blogs" subtitle="Read about Events i have worked with , guides to install , tricks  and related projects to play with">
          <Card
            title="Docker"
            subtitle="Latest trends in Docker"
            hashtags={['ai', 'deeplearning', 'research']}
            link="/docs/technologies/docker"
            imageSrc="/img/docker.svg"
            imageAlt="Docker"
            
          />
        </Section>

        <Section title="Resume" subtitle="Read about my resume /cv i have worked with , guides to install , tricks  and related projects to play with">
          <Card
            title="Docker"
            subtitle="Latest trends in Docker"
            hashtags={['ai', 'deeplearning', 'research']}
            link="/docs/technologies/ollama"
            imageSrc="/img/docker.svg"
            imageAlt="Docker"
            
          />
        </Section>
        
        
        
      </main>
    </Layout>
  );
}
