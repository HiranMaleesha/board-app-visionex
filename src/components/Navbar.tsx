'use client';

import { useState } from 'react';
import { Plus, Search, Bell } from 'lucide-react';
import { useTaskStore } from '@/store/taskStore';

export default function Navbar() {
  const { setSearchQuery } = useTaskStore();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    setSearchQuery(value);
  };

  return (
    <header className='bg-white border-b border-gray-200 px-6 py-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-6'>
          <div className='flex items-center space-x-2'>
            <span className='text-lg font-semibold text-gray-900'>
              Board App
            </span>
          </div>
        </div>

        <div className='flex items-center space-x-4'>
          <button className='flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
            <Plus className='w-4 h-4' />
            <span className='hidden md:inline'>Create new board</span>
          </button>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
            <input
              type='text'
              placeholder='Search tasks...'
              value={searchValue}
              onChange={handleSearchChange}
              className='pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <button className='relative p-2 text-gray-600 hover:text-gray-900'>
            <Bell className='w-5 h-5' />
            <span className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full'></span>
          </button>

          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
            <span className='hidden md:inline text-gray-700'>User</span>
          </div>
        </div>
      </div>
    </header>
  );
}
