import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TaskCard from './TaskCard';
import { Task } from '@/store/taskStore';

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
    <div className="flex-shrink-0 w-64 sm:w-72 lg:w-80 rounded-lg p-3 sm:p-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-900">{title}</h2>
        <span className="px-2 py-1 rounded-full text-sm text-white" style={{
          backgroundColor: id === 'inprogress' ? '#f97316' : id === 'approved' ? '#22c55e' : id === 'reject' ? '#ef4444' : '#6b7280',
          borderRadius: '9999px'
        }}>
          {tasks.length}
        </span>
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