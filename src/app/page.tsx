'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';
import BoardHeader from '@/components/BoardHeader';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='h-screen flex flex-col' style={{ backgroundColor: '#f8f9fa' }}>
      <Navbar onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className='flex flex-1 overflow-hidden'>
        {isSidebarOpen && (
          <div
            className='lg:hidden fixed inset-0 z-40'
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:relative absolute inset-y-0 left-0 z-50`}>
          <SideBar />
        </div>

        <div className='flex flex-col flex-1 overflow-x-auto scroll-smooth'>
          <BoardHeader />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
