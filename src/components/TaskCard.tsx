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


  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        borderRadius: '8px',
        border: '1px solid #e1e5e9',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}
      {...attributes}
      {...listeners}
      className={`bg-white p-3 sm:p-4 cursor-grab active:cursor-grabbing transition-shadow ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div className="mb-2">
        <h3 className="font-bold text-gray-900 text-sm leading-tight">{task.title}</h3>
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