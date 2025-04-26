import { useState } from 'react';
import { useGithubUser } from '../hooks/use-github-user';
import { GithubProfileTailwind } from '../components/github-profile-tailwind';

export const TailwindPage = () => {
  const [inputValue, setInputValue] = useState(''); // Substitui username por inputValue
  const { user, repos, loading, error, fetchUserData } = useGithubUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      await fetchUserData(inputValue); // Usa inputValue em vez de username
    }
  };

  if (loading) return <div className="text-center py-8">Carregando...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite um nome de usuário do GitHub"
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 font-medium rounded-lg transition-all ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            }`}
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </form>
      </div>

      {user && <GithubProfileTailwind user={user} repos={repos} />}
    </div>
  );
};