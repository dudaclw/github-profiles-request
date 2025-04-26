import { GithubUser, Repo } from '../hooks/use-github-user';

interface GithubProfileTailwindProps {
  user: GithubUser;
  repos: Repo[];
}

export const GithubProfileTailwind = ({ user, repos }: GithubProfileTailwindProps) => {
  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden">
      
      {/* cabeçalho */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6 text-white">
        <div className="flex items-center space-x-6">
          <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full border-4 border-white shadow-md"/>
          <div>
            <h2 className="text-2xl font-bold">{user.login}</h2>
            {user.name && <p className="text-indigo-100">{user.name}</p>}
          </div>
        </div>
      </div>

      {/* repos */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>

          Repositórios Recentes
        </h3>
        
        <ul className="space-y-3">
          {repos.map((repo) => (
            <li key={repo.name} className="group">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
                className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-500 group-hover:border-indigo-600">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {repo.name}
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Atualizado em: {new Date(repo.updated_at).toLocaleDateString()}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};