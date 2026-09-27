import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="What needs your attention?"
        aria-label="New task"
        className="min-w-0 flex-1 rounded-xl border border-[#d9ddd5] bg-[#f7f8f4] px-4 py-3.5 text-sm font-semibold outline-none transition placeholder:text-[#89928b] focus:border-[#a54d3f] focus:bg-[#fffdfa] focus:ring-4 focus:ring-[#f0d9d2]"
      />
      <button
        type="submit"
        className="rounded-xl bg-[#173b2a] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#a54d3f] focus:outline-none focus:ring-4 focus:ring-[#c7d8c9]"
      >
        Add task
      </button>
    </form>
  );
};

export default TaskForm;
