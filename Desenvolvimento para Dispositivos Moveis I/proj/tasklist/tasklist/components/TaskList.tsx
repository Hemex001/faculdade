import { FlatList } from 'react-native';
import TaskItem from './TaskItem';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          onToggle={() => onToggleTask(item.id)}
          onDelete={() => onDeleteTask(item.id)}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;