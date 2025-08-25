// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
// sidebars.js
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Technologies',
      items: [
        'technologies/docker/index',
        'technologies/ollama/index',
        'technologies/python/index',
        // Add other technology indexes here
      ],
    },
    {
      type: 'category',
      label: 'Projects',
      items: [
        'projects/index',
        // Add individual project docs here if any
      ],
    },
    {
      type: 'category',
      label: 'Resumes',
      items: [
        'Resumes/Mechatronics Background',
        'Resumes/STEM Background',
      ],
    },
  ],
};

export default sidebars;
