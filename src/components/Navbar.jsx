import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: install lucide-react for icons
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2C3E50] text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">SwiftSend</Link>
        
        {/* Hamburger for mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/send">Send</Link>
          <Link to="/wallet">Wallet</Link>
          <Link to="/history">History</Link>
          <Link to="/track">Track</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/withdraw">Withdraw</Link>
          <Link to="/login">Login</Link>
        </div>
        <DarkModeToggle />
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="flex flex-col space-y-2 mt-2 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/send" onClick={() => setIsOpen(false)}>Send</Link>
          <Link to="/wallet" onClick={() => setIsOpen(false)}>Wallet</Link>
          <Link to="/history" onClick={() => setIsOpen(false)}>History</Link>
          <Link to="/track" onClick={() => setIsOpen(false)}>Track</Link>
          <Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
          <Link to="/withdraw" onClick={() => setIsOpen(false)}>Withdraw</Link>
          <Link to='/darkmodetoggle' onClick={() => setIsOpen(false)}>Dark Mode</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
