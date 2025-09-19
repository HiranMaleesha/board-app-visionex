'use client';
import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';
import BoardHeader from '@/components/BoardHeader';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  return (
    <div className='h-screen flex flex-col bg-gray-50'>
      <Navbar />
      
      <div className='flex flex-1 overflow-hidden'>
        <div className='hidden lg:block'>
          <SideBar />
        </div>
        

        <Dashboard />
      </div>
    </div>
  );
}
