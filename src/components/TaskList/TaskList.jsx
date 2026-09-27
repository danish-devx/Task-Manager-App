import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({
  tasks,
  editingId,
  onToggle,
  onDelete,
  onEdit,
  onUpdate,
}) => {
  if (!tasks.length)
    return (
      <div className="py-16 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0d9d2] text-2xl text-[#a54d3f]">
          +
        </div>
        <h2 className="mt-4 text-lg font-black text-[#17221c]">
          Nothing here yet
        </h2>
        <p className="mt-1 text-sm text-[#68736c]">
          Add a task or adjust your search and filters.
        </p>
      </div>
    );
  return (
    <div className="divide-y divide-slate-100">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isEditing={editingId === task.id}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TaskList;
