import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <Link 
          to="/styled" 
          className={`px-4 py-2 rounded-md transition-colors ${
            location.pathname === '/styled' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-300 hover:bg-gray-700'
          }`}
        >
          Styled Components
        </Link>
        <Link 
          to="/tailwind" 
          className={`px-4 py-2 rounded-md transition-colors ${
            location.pathname === '/tailwind' 
              ? 'bg-purple-600 text-white' 
              : 'text-gray-300 hover:bg-gray-700'
          }`}
        >
          Tailwind CSS
        </Link>
      </div>
    </nav>
  );
};