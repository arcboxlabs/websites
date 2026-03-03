export interface Author {
  id: string,
  name: string,
  avatar?: string,
  bio?: string,
  twitter?: string,
  github?: string,
  website?: string
}

export const authors: Record<string, Author> = {
  john: {
    id: 'john',
    name: 'John Doe',
    avatar: '/avatars/john.jpg',
    bio: 'Software Engineer and Tech Writer',
    twitter: '@johndoe',
    github: 'johndoe',
    website: 'https://johndoe.com'
  },
  jane: {
    id: 'jane',
    name: 'Jane Smith',
    avatar: '/avatars/jane.jpg',
    bio: 'UI/UX Designer and Frontend Developer',
    twitter: '@janesmith',
    github: 'janesmith',
    website: 'https://janesmith.com'
  }
};

export function getAuthor(id: string): Author | undefined {
  return authors[id];
}
