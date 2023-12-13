import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { handleLogOut } = useAuth();
  return (
    <>
      <div className="min-h-[50vh] flex flex-col justify-center items-center mt-2 gap-10">
        <h2 className="text-3xl">Dashboard page</h2>
        <button className="bg-red-400 rounded px-4 py-2">
          <Link to="/" onClick={handleLogOut}>
            Logout
          </Link>
        </button>
      </div>
    </>
  );
}
