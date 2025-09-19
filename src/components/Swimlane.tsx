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
    <div className="flex-shrink-0 w-64 sm:w-72 lg:w-80 bg-gray-50 rounded-lg p-3 sm:p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-900">{title}</h2>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
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