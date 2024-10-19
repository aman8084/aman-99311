import React from 'react';
import { BarChart2, DollarSign, Users, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Capitaliz</h2>
      <ul>
        <li className="mb-4"><a href="#" className="flex items-center"><BarChart2 className="mr-2" /> Dashboard</a></li>
        <li className="mb-4"><a href="#" className="flex items-center"><DollarSign className="mr-2" /> Profit</a></li>
        <li className="mb-4"><a href="#" className="flex items-center"><Users className="mr-2" /> Investor Review</a></li>
        <li className="mb-4"><a href="#" className="flex items-center"><Settings className="mr-2" /> Settings</a></li>
        <li className="mt-8 text-sm text-gray-400">
          Capitaliz is a digital platform designed for business advisors, especially those involved in exit planning, business valuation, and value acceleration. The platform is structured to help advisors streamline their processes by offering tools for business valuation, client engagement, planning, and reporting.
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;