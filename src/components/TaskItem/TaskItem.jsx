import { useState } from "react";

const TaskItem = ({
  task,
  isEditing,
  onToggle,
  onDelete,
  onEdit,
  onUpdate,
}) => {
  const [title, setTitle] = useState(task.title);
  const submitEdit = (event) => {
    event.preventDefault();
    if (title.trim()) onUpdate(task.id, title);
  };
  return (
    <div className="task-row -mx-3 flex items-center gap-3 rounded-xl px-3 py-4 sm:gap-4">
      <button
        aria-label={task.completed ? "Mark task active" : "Mark task complete"}
        onClick={() => onToggle(task.id)}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-black transition ${task.completed ? "border-[#a54d3f] bg-[#a54d3f] text-white" : "border-[#b8c1b9] hover:border-[#173b2a]"}`}
      >
        {task.completed ? "✓" : ""}
      </button>
      {isEditing ? (
        <form onSubmit={submitEdit} className="flex min-w-0 flex-1 gap-2">
          <input
            autoFocus
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="min-w-0 flex-1 rounded-lg border border-[#c89d93] px-3 py-2 text-sm outline-none ring-2 ring-[#f0d9d2]"
          />
          <button className="rounded-lg bg-[#173b2a] px-3 py-2 text-xs font-bold text-white">
            Save
          </button>
        </form>
      ) : (
        <p
          className={`min-w-0 flex-1 wrap-break-word text-sm font-semibold ${task.completed ? "text-[#9ba49d] line-through" : "text-[#3d4a42]"}`}
        >
          {task.title}
        </p>
      )}{" "}
      {!isEditing && (
        <div className="flex shrink-0 gap-1">
          <button
            aria-label="Edit task"
            onClick={() => onEdit(task.id)}
            className="rounded-lg px-2.5 py-2 text-xs font-bold text-[#89928b] transition hover:bg-[#eef0eb] hover:text-[#173b2a]"
          >
            Edit
          </button>
          <button
            aria-label="Delete task"
            onClick={() => onDelete(task.id)}
            className="rounded-lg px-2.5 py-2 text-xs font-bold text-[#89928b] transition hover:bg-[#f8e9e5] hover:text-[#a54d3f]"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
