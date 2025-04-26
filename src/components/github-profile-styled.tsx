import styled from 'styled-components';
import { GithubUser, Repo } from '../hooks/use-github-user';

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 1.5rem;
`;

const Username = styled.h2`
  margin: 0;
  color: #333;
`;

const RepoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RepoItem = styled.li`
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const RepoLink = styled.a`
  color: #0366d6;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

interface GithubProfileStyledProps {
  user: GithubUser;
  repos: Repo[];
}

export const GithubProfileStyled = ({ user, repos }: GithubProfileStyledProps) => {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <Avatar src={user.avatar_url} alt={user.login} />
        <Username>{user.login}</Username>
      </ProfileHeader>

      <h3>Repositórios Recentes:</h3>
      <RepoList>
        {repos.map((repo) => (
          <RepoItem key={repo.name}>
            <RepoLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </RepoLink>
          </RepoItem>
        ))}
      </RepoList>
    </ProfileContainer>
  );
};