'use client';

import { useState } from 'react';
import { Plus, Search, Bell, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export default function Navbar({ onToggleSidebar, isSidebarOpen }: NavbarProps) {
  const [searchValue, setSearchValue] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  return (
    <header className='bg-white border-b border-gray-300 px-4 sm:px-6 py-3' style={{ borderBottomColor: '#e5e5e5' }}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          {/* Mobile menu button */}
          <button
            onClick={onToggleSidebar}
            className='lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg'
          >
            {isSidebarOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
          </button>

          <div className='flex items-center space-x-2'>
            <div className='w-6 h-6 bg-blue-600 rounded flex items-center justify-center'>
              <span className='text-white text-xs font-bold'>B</span>
            </div>
            <span className='text-lg font-semibold text-gray-900'>
              Board <span className='text-blue-600'>App</span>
            </span>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className='flex items-center space-x-2 sm:space-x-4'>
          {/* Create new board button */}
          <button className='hidden sm:flex items-center space-x-2 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium'>
            <Plus className='w-4 h-4' />
            <span className='hidden md:inline'>Create new board</span>
          </button>

          {/* Search */}
          <div className='relative hidden sm:block'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
            <input
              type='text'
              placeholder='Search tasks...'
              value={searchValue}
              onChange={handleSearchChange}
              className='pl-10 pr-4 py-2 w-48 lg:w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm'
            />
          </div>

          {/* Mobile search button */}
          <button className='sm:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg'>
            <Search className='w-5 h-5' />
          </button>

          {/* Notifications */}
          <button className='relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'>
            <Bell className='w-5 h-5' />
          </button>

          {/* Share button */}
          <button className='hidden sm:block p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z' />
            </svg>
          </button>

          {/* User Profile */}
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-medium'>
              S
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}