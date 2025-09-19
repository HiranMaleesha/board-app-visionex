import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Task } from '@/store/taskStore';
import { Calendar, MessageSquare, Paperclip } from 'lucide-react';

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-medium text-gray-900 text-sm leading-tight">{task.title}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            priorityColors[task.priority as keyof typeof priorityColors] || 'bg-gray-100 text-gray-800'
          }`}
        >
          {task.priority}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{task.description}</p>

      {/* Due date */}
      <div className="flex items-center space-x-1 mb-2">
        <Calendar className="w-3 h-3 text-gray-400" />
        <span className="text-xs text-gray-500">Due: 15 Apr</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-gray-700">
              {task.assignee.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="text-xs text-gray-500">{task.assignee}</span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <MessageSquare className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-500">2</span>
          </div>
          <div className="flex items-center space-x-1">
            <Paperclip className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-500">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}