import {
  LayoutDashboard,
  Folder,
  MessageSquare,
  Calendar,
  Users,
  HelpCircle,
  LogOut,
} from 'lucide-react';

export default function SideBar() {
  return (
    <aside className='w-64 bg-gray-50 border-r border-gray-200 h-full flex flex-col'>
      {/* Workspace Section */}
      <div className='p-4'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center'>
              <span className='text-white text-xs font-medium'>W</span>
            </div>
            <div>
              <div className='text-sm font-medium text-gray-900'>Workspace</div>
              <div className='text-xs text-gray-500'>Root folder</div>
            </div>
          </div>
          <button className='p-1 hover:bg-gray-200 rounded'></button>
        </div>

        {/* Navigation Menu */}
        <nav className='space-y-1'>
          <a
            href='#'
            className='flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg'
          >
            <LayoutDashboard className='w-4 h-4' />
            <span className='text-sm'>Dashboard</span>
          </a>

          <div>
            <button className='flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg'>
              <div className='flex items-center space-x-3'>
                <Folder className='w-4 h-4' />
                <span className='text-sm'>Boards</span>
              </div>
            </button>
          </div>

          <a
            href='#'
            className='flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg relative'
          >
            <MessageSquare className='w-4 h-4' />
            <span className='text-sm'>Messages</span>
            <span className='absolute right-3 top-2 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center'>
              1
            </span>
          </a>

          <a
            href='#'
            className='flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg'
          >
            <Calendar className='w-4 h-4' />
            <span className='text-sm'>Calendar</span>
          </a>

          <a
            href='#'
            className='flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg'
          >
            <Users className='w-4 h-4' />
            <span className='text-sm'>Team members</span>
          </a>
        </nav>
      </div>

      <div className='mt-auto p-4 space-y-1'>
        <a
          href='#'
          className='flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg'
        >
          <HelpCircle className='w-4 h-4' />
          <span className='text-sm'>Support</span>
        </a>

        <a
          href='#'
          className='flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg'
        >
          <LogOut className='w-4 h-4' />
          <span className='text-sm'>Logout</span>
        </a>
      </div>
    </aside>
  );
}
