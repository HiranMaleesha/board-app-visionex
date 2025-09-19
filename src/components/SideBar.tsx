'use client';

import { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight,
  LayoutDashboard, 
  Folder,
  MessageCircle,
  Calendar,
  Users,
  HelpCircle,
  LogOut,
  FolderOpen
} from 'lucide-react';

export default function SideBar() {
  const [isBoardsOpen, setBoardsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('sport-xi-project');

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  const toggleBoards = () => {
    setBoardsOpen(!isBoardsOpen);
  };

  return (
    <div className="w-64 bg-white h-screen flex flex-col" style={{ borderRight: '1px solid #e5e5e5' }}>
      {/* Root Folder Dropdown */}
      <div className="p-4" style={{ borderBottom: '1px solid #e5e5e5' }}>
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
            <FolderOpen className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-700">Root folder</span>
          <ChevronDown className="w-4 h-4 text-gray-500 ml-auto" />
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {/* Dashboard */}
          <div
            className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
              activeItem === 'dashboard' 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
            onClick={() => handleItemClick('dashboard')}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="text-sm font-medium">Dashboard</span>
          </div>

          {/* Boards Dropdown */}
          <div>
            <div
              className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
                isBoardsOpen 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={toggleBoards}
            >
              <Folder className="w-4 h-4" />
              <span className="text-sm font-medium">Boards</span>
              {isBoardsOpen ? (
                <ChevronDown className="w-4 h-4 ml-auto" />
              ) : (
                <ChevronRight className="w-4 h-4 ml-auto" />
              )}
            </div>
            
            {/* Boards Submenu */}
            {isBoardsOpen && (
              <div className="ml-3 mt-1 space-y-1">
                <div
                  className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors text-sm ${
                    activeItem === 'create-routes' 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                  onClick={() => handleItemClick('create-routes')}
                >
                  <ChevronRight className="w-3 h-3 mr-2" />
                  <span>Create routes</span>
                </div>
                
                <div
                  className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors text-sm ${
                    activeItem === 'deployment-board' 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                  onClick={() => handleItemClick('deployment-board')}
                >
                  <ChevronRight className="w-3 h-3 mr-2" />
                  <span>Deployment Board App</span>
                </div>
                
                <div
                  className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors text-sm ${
                    activeItem === 'sport-xi-project' 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                  onClick={() => handleItemClick('sport-xi-project')}
                >
                  <ChevronRight className="w-3 h-3 mr-2" />
                  <span>Sport Xi Project</span>
                </div>
                
                <div
                  className={`flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors text-sm ${
                    activeItem === 'wordpress-theme' 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                  onClick={() => handleItemClick('wordpress-theme')}
                >
                  <ChevronRight className="w-3 h-3 mr-2" />
                  <span>Wordpress theme</span>
                </div>
              </div>
            )}
          </div>

          {/* Messages */}
          <div
            className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
              activeItem === 'messages' 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
            onClick={() => handleItemClick('messages')}
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Messages</span>
            <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center ml-auto" style={{ borderRadius: '50%' }}>
              <span className="text-xs text-white font-bold">1</span>
            </div>
          </div>

          {/* Calendar */}
          <div
            className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
              activeItem === 'calendar' 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
            onClick={() => handleItemClick('calendar')}
          >
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Calendar</span>
          </div>

          {/* Team members */}
          <div
            className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
              activeItem === 'team-members' 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
            onClick={() => handleItemClick('team-members')}
          >
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Team members</span>
          </div>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 space-y-1" style={{ borderTop: '1px solid #e5e5e5' }}>
        {/* Support */}
        <div
          className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
            activeItem === 'support' 
              ? 'bg-blue-50 text-blue-700' 
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
          onClick={() => handleItemClick('support')}
        >
          <HelpCircle className="w-4 h-4" />
          <span className="text-sm font-medium">Support</span>
        </div>

        {/* Logout */}
        <div
          className="flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition-colors bg-gray-800 text-white hover:bg-gray-900"
          onClick={() => handleItemClick('logout')}
        >
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Logout</span>
        </div>
      </div>
    </div>
  );
}