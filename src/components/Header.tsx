import React from 'react';
import { User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">Investment Data Analytics</h1>
      <div className="flex items-center">
        <User className="mr-2" />
        <span className="font-semibold">Capitaliz</span>
      </div>
    </header>
  );
};

export default Header;