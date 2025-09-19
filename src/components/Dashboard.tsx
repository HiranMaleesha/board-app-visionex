'use client';

import { useEffect, useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import Swimlane from './Swimlane';
import { useTaskStore, Task } from '@/store/taskStore';
import TaskCard from './TaskCard';
import BoardHeader from './BoardHeader';

const swimlanes = [
  { id: 'todo', title: 'Todo' },
  { id: 'inprogress', title: 'In Progress' },
  { id: 'approved', title: 'Approved' },
  { id: 'reject', title: 'Reject' },
];

export default function Dashboard() {
  const {
    tasks,
    loadTasks,
    updateTaskStatus,
    getFilteredTasks,
  } = useTaskStore();

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/tasks.json');
        const data = await response.json();
        loadTasks(data);
      } catch (error) {
        console.error('Failed to load tasks:', error);
      }
    };
    fetchTasks();
  }, [loadTasks]);

  const filteredTasks = getFilteredTasks();

  const getTasksByStatus = (status: string) =>
    filteredTasks.filter((task) => task.status === status);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const task = tasks.find((t) => t.id === active.id);
    setActiveTask(task || null);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveTask = tasks.find((task) => task.id === activeId);
    const isOverTask = tasks.find((task) => task.id === overId);

    if (!isActiveTask) return;

    if (swimlanes.some((lane) => lane.id === overId)) {
      updateTaskStatus(activeId as string, overId as string);
    }
    else if (isOverTask) {
      const activeIndex = tasks.findIndex((task) => task.id === activeId);
      const overIndex = tasks.findIndex((task) => task.id === overId);

      if (tasks[activeIndex].status !== tasks[overIndex].status) {
        updateTaskStatus(activeId as string, tasks[overIndex].status);
      }
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveTask(null);
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex-1 p-4 sm:p-6 overflow-x-auto">
        <BoardHeader/>
        <div className="flex space-x-4 sm:space-x-6 min-w-max">
          {swimlanes.map((lane) => (
            <Swimlane
              key={lane.id}
              id={lane.id}
              title={lane.title}
              tasks={getTasksByStatus(lane.id)}
            />
          ))}
        </div>
      </div>
      <DragOverlay>
        {activeTask ? <TaskCard task={activeTask} /> : null}
      </DragOverlay>
    </DndContext>
  );
}