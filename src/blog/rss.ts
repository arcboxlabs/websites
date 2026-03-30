import { Feed } from 'feed';
import { BlogSource } from './cms';
import { tagged as html } from 'foxts/tagged';

export function getRssFeedInstance() {
  const feed = new Feed({
    title: 'ArcBox Blog',
    description: 'Engineering deep dives, product releases, and security research from the team building ArcBox.',
    id: 'https://arcbox.dev/blog',
    link: 'https://arcbox.dev/blog',
    language: 'en-US',
    image: 'https://arcbox.dev/favicon/apple-touch-icon.png',
    favicon: 'https://arcbox.dev/favicon.ico',
    copyright: `Copyright © ${new Date().getFullYear()} ArcBox Labs. All rights reserved.`,
    author: {
      name: 'ArcBox Team',
      link: 'https://arcbox.dev'
    },
    feedLinks: {
      rss2: 'https://arcbox.dev/rss.xml',
      json: 'https://arcbox.dev/rss.json',
      atom: 'https://arcbox.dev/atom.xml'
    }
  });

  BlogSource.getCategories().forEach(category => {
    if (category) {
      feed.addCategory(category);
    }
  });

  BlogSource.getPosts().forEach(post => {
    const url = `https://arcbox.dev/blog/${post.slugs[0]}`;
    const cover = post.data.cover ? new URL(post.data.cover, 'https://arcbox.dev').href : undefined;

    feed.addItem({
      title: post.data.title,
      id: url,
      link: url,
      description: post.data.description,
      // RSS readers typically show description, so we can duplicate it here. Full content is not included in RSS for simplicity.
      content: html`<p>${post.data.description}</p>${cover ? html`<img src="${cover}" alt="${post.data.title}" />` : ''}<br /><p><a href="${url}">Read more</a></p>`,
      date: new Date(post.data.date),
      image: cover,
      category: post.data.category ? [{ name: post.data.category }] : undefined
    });
  });

  return feed;
}
