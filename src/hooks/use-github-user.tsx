import { useState } from 'react';
import { fetchGithubUser } from '../utils/api';

export interface GithubUser {
  avatar_url: string;
  login: string;
  repos_url: string;
  name?: string;
  bio?: string;
}

export interface Repo {
  name: string;
  html_url: string;
  updated_at: string;
}

interface GithubUserData {
  user: GithubUser | null;
  repos: Repo[];
  loading: boolean;
  error: string | null;
}

// Adicione esta interface para o retorno do hook
interface UseGithubUserReturn extends GithubUserData {
  fetchUserData: (username: string) => Promise<void>;
}

export const useGithubUser = (): UseGithubUserReturn => {
  const [userData, setUserData] = useState<GithubUserData>({
    user: null,
    repos: [],
    loading: false,
    error: null,
  });

  const fetchUserData = async (username: string) => {
    setUserData(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const user = await fetchGithubUser(username);
      const reposResponse = await fetch(user.repos_url);
      const repos = await reposResponse.json();
      
      setUserData({
        user,
        repos: repos.slice(0, 5),
        loading: false,
        error: null,
      });
    } catch (error) {
      setUserData({
        user: null,
        repos: [],
        loading: false,
        error: 'Usuário não encontrado',
      });
    }
  };

  return { ...userData, fetchUserData };
};