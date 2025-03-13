import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900">
      <div className="max-w-2xl bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Home Page! 🎉</h1>
        <p className="mt-4 text-lg text-gray-600">
          You have successfully logged in. Explore and enjoy our services!
        </p>
        <button
          onClick={() => navigate("/loggin")}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Home;
