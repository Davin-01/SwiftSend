import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">SwiftSend</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/send" className="hover:text-gray-400">Send Money</Link>
          <Link to="/receive" className="hover:text-gray-400">Receive</Link>
          <Link to="/transactions" className="hover:text-gray-400">Transactions</Link>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
