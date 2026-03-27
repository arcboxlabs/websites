export interface Author {
  id: string,
  name: string,
  avatar: string,
  bio?: string,
  twitter?: string,
  github?: string,
  website?: string
}

export const authors: Record<string, Author> = {
  Xuan: {
    id: 'xuan',
    name: 'Xuan Zhang',
    avatar: 'https://avatars.githubusercontent.com/u/37977109?v=4',
    bio: 'Less is more.',
    twitter: '@aprilnea',
    github: 'aprilnea',
    website: 'https://aprilnea.me'
  }
};

export function getAuthor(id: string): Author | undefined {
  return authors[id];
}
