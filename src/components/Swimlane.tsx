import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TaskCard from './TaskCard';
import { Task } from '@/store/taskStore';
import { Plus, MoreHorizontal } from 'lucide-react';

interface SwimlaneProps {
  id: string;
  title: string;
  tasks: Task[];
}

export default function Swimlane({ id, title, tasks }: SwimlaneProps) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div className="flex-shrink-0 w-64 sm:w-72 lg:w-80 rounded-lg p-3 sm:p-4" style={{
      backgroundColor: '#f8f9fa',
      borderLeft: '1px solid #e1e5e9',
      borderRight: '1px solid #e1e5e9'
    }}>
      <div className="flex items-center justify-between mb-4 pb-3" style={{ borderBottom: '1px solid #e1e5e9' }}>
        <h2 className="font-semibold text-gray-900 px-3 py-1 rounded-full" style={{
          backgroundColor: id === 'todo' ? '#4b5563' :
            id === 'inprogress' ? '#f97316' :
            id === 'approved' ? '#22c55e' :
            id === 'reject' ? '#ef4444' : '#6b7280',
          color: 'white'
        }}>
          {title}
        </h2>
        <div className="flex items-center space-x-2">
          <button className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
            <Plus className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div
        ref={setNodeRef}
        className={`min-h-96 space-y-3 transition-colors ${
          isOver ? 'bg-blue-50' : ''
        }`}
      >
        <SortableContext items={tasks.map((task) => task.id)} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}