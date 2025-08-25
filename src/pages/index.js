import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Card from '../components/Card';

export default function Home() {
  return (
    <Layout title="Home" description="Portfolio Homepage">
      <main>
        <h1>Mulham Fetna</h1>
        <p>Mechtronics Engineer - Homelabber - AI Developper - STEM Instrcture</p>
        <section>
          <Card
            title="Docker"
            subtitle="Latest trends in Docker"
            hashtags={['ai', 'deeplearning', 'research']}
            link="/blog/docker"
            imageSrc="../../static/img/docker.svg"
            imageAlt="Docker"
            
          />
        </section>
        <section>
          <h2>My Experiences</h2>
          {/* Example: Badge, repeat for each achievement */}
          <Link to="/docs/experiences/">
            <span className="badge">International Physics Olympiad Trainer</span>
          </Link>
        </section>
      </main>
    </Layout>
  );
}
