import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Welcome to Proposify!</p>
      <Link
        to={"/proposal"}
        className="text-blue-600 underline hover:text-blue-500"
      >
        Make new proposal
      </Link>
    </div>
  );
};

export default Home;
