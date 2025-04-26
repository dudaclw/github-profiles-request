import { GithubUser } from '../hooks/use-github-user';

export const fetchGithubUser = async (username: string): Promise<GithubUser> => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error('Usuário não encontrado');
  }
  return await response.json();
};