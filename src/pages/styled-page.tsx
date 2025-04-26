import { useState } from 'react';
import { useGithubUser } from '../hooks/use-github-user';
import { GithubProfileStyled } from '../components/github-profile-styled';
import styled from 'styled-components';

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const SearchForm = styled.form`
  display: flex;
  gap: 0.5rem;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  }
`;

const SearchButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #4f46e5;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const StyledPage = () => {
  const [inputValue, setInputValue] = useState('');
  const { user, repos, loading, error, fetchUserData } = useGithubUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      await fetchUserData(inputValue);
    }
  };

  return (
    <div>
      <SearchContainer>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite um nome de usuário do GitHub"
          />
          <SearchButton type="submit" disabled={loading}>
            {loading ? 'Buscando...' : 'Buscar'}
          </SearchButton>
        </SearchForm>
        {error && <div className="error-message">{error}</div>}
      </SearchContainer>

      {user && <GithubProfileStyled user={user} repos={repos} />}
    </div>
  );
};