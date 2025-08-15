export default function AuthTabs({ activeTab, setActiveTab }) {
    return (
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 font-semibold rounded-l-lg ${
            activeTab === 'signup' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('signup')}
        >
          Create Account
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded-r-lg ${
            activeTab === 'login' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
      </div>
    );
  }
  