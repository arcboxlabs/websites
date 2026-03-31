export interface Author {
  id: string,
  name: string,
  avatar: string,
  bio?: string,
  twitter?: `@${string}`,
  github?: string,
  website?: string
}

export const authors: Record<string, Author> = {
  aprilnea: {
    id: 'aprilnea',
    name: 'AprilNEA',
    avatar: 'https://avatars.githubusercontent.com/u/37977109?v=4',
    bio: 'Less is more.',
    twitter: '@aprilnea',
    github: 'aprilnea',
    website: 'https://aprilnea.me'
  },
  peron: {
    id: 'peron',
    name: 'Peron',
    avatar: 'https://avatars.githubusercontent.com/u/18367871?v=4',
    github: 'PeronGH'
  }
};

export function getAuthor(id: string): Author | undefined {
  return authors[id];
}
