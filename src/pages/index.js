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
            <p class="hero__subtitle">Mechatronics Engineer & STEM Leader: Bridging Robotics Innovation with Hands-On Education</p>
            <h3>Mechatronics - Robotics - AI - ML</h3>
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

          <Card
            title="Ollama"
            subtitle="Latest trends in Ollama"
            hashtags={['ai', 'deeplearning', 'research']}
            link="/docs/technologies/ollama"
            imageSrc="/img/ollama.png"
            imageAlt="Ollama"
            
          />

          <Card
            title="Python"
            subtitle="Latest trends in Python"
            hashtags={['ai', 'deeplearning', 'research']}
            link="/docs/technologies/python"
            imageSrc="/img/python.svg"
            imageAlt="Python"
            
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
