export interface Author {
  id: string,
  name: string,
  avatar: string
  // bio?: string
  // twitter?: string,
  // github?: string,
  // website?: string
}

export const authors: Record<string, Author> = {
  kai: {
    id: 'kai',
    name: 'Kai Nakamura',
    avatar: 'https://i.pravatar.cc/40?img=11'
    // bio: 'Software Engineer and Tech Writer'
    // twitter: '@kai',
    // github: 'kai',
    // website: 'https://kai.com'
  },
  elias: {
    id: 'elias',
    name: 'Elias Brandt',
    avatar: 'https://i.pravatar.cc/40?img=15'
    // bio: 'Software Engineer'
    // twitter: '@elias',
    // github: 'elias',
    // website: 'https://elias.com'
  },
  priya: {
    id: 'priya',
    name: 'Priya Sharma',
    avatar: 'https://i.pravatar.cc/40?img=5'
    // bio: 'Product and Engineering Lead'
    // twitter: '@priya',
    // github: 'priya',
    // website: 'https://priya.com'
  }
};

export function getAuthor(id: string): Author | undefined {
  return authors[id];
}
