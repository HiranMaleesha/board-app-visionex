import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  assignee: string;
}

interface TaskStore {
  tasks: Task[];
  searchQuery: string;
  loadTasks: (tasks: Task[]) => void;
  updateTaskStatus: (taskId: string, newStatus: string) => void;
  setSearchQuery: (query: string) => void;
  getFilteredTasks: () => Task[];
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      searchQuery: '',
      loadTasks: (tasks) => set({ tasks }),
      updateTaskStatus: (taskId, newStatus) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, status: newStatus } : task
          ),
        })),
      setSearchQuery: (query) => set({ searchQuery: query }),
      getFilteredTasks: () => {
        const { tasks, searchQuery } = get();
        if (!searchQuery) return tasks;
        return tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      },
    }),
    {
      name: 'task-store-v2',
      partialize: (state) => ({ tasks: state.tasks }),
    }
  )
);