import { useEffect, useMemo, useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("focus-tasks")) || [];
    } catch {
      return [];
    }
  });
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("focus-tasks", JSON.stringify(tasks));
  }, [tasks]);
  const stats = useMemo(
    () => ({
      total: tasks.length,
      completed: tasks.filter((task) => task.completed).length,
      active: tasks.filter((task) => !task.completed).length,
    }),
    [tasks],
  );
  const visibleTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" ? !task.completed : task.completed);
    return (
      matchesFilter && task.title.toLowerCase().includes(search.toLowerCase())
    );
  });
  const addTask = (title) =>
    setTasks((current) => [
      { id: crypto.randomUUID(), title: title.trim(), completed: false },
      ...current,
    ]);
  const updateTask = (id, title) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, title: title.trim() } : task,
      ),
    );
    setEditingId(null);
  };
  const toggleTask = (id) =>
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  const deleteTask = (id) =>
    setTasks((current) => current.filter((task) => task.id !== id));
  const clearAll = () => setTasks([]);

  return (
    <main className="app-canvas relative min-h-screen overflow-hidden bg-[#f3f1eb] px-4 py-8 text-[#17221c] sm:px-8 lg:px-12">
      <div className="floral-scene" aria-hidden="true">
        <span className="flower flower-top" />
        <span className="flower flower-bottom" />
        <span className="leaf leaf-top" />
        <span className="leaf leaf-bottom" />
      </div>
      <div className="mx-auto max-w-6xl">
        <header className="reveal mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#a54d3f]">
              Personal workspace
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-[#17221c] sm:text-5xl">
              Make room for focus.
            </h1>
            <p className="mt-3 max-w-xl text-base text-[#68736c]">
              A calm place to capture what matters and keep momentum moving.
            </p>
          </div>
          <div className="stat-card rounded-2xl border border-[#d9ddd5] bg-[#fffdfa] px-5 py-4 shadow-sm">
            <div className="flex items-center justify-between gap-8">
              <p className="text-xs font-bold uppercase tracking-wider text-[#89928b]">
                Completion rate
              </p>
              <span className="rounded-full bg-[#eef0eb] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#52785b]">
                On track
              </span>
            </div>
            <p className="mt-1 text-2xl font-black text-[#17221c]">
              {stats.total
                ? Math.round((stats.completed / stats.total) * 100)
                : 0}
              %
            </p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#e7e9e3]">
              <div
                className="h-full rounded-full bg-[#a54d3f] transition-all duration-700"
                style={{
                  width: `${stats.total ? (stats.completed / stats.total) * 100 : 0}%`,
                }}
              />
            </div>
          </div>
        </header>
        <section className="reveal reveal-delay grid gap-4 sm:grid-cols-3">
          <div className="stat-card rounded-2xl bg-[#173b2a] p-5 text-white shadow-lg shadow-[#b9cabb]">
            <p className="text-sm font-semibold text-[#c7d8c9]">Total tasks</p>
            <p className="mt-2 text-3xl font-black">{stats.total}</p>
          </div>
          <div className="stat-card rounded-2xl border border-[#d9ddd5] bg-[#fffdfa] p-5 shadow-sm">
            <p className="text-sm font-semibold text-[#68736c]">In progress</p>
            <p className="mt-2 text-3xl font-black text-[#17221c]">
              {stats.active}
            </p>
          </div>
          <div className="stat-card rounded-2xl border border-[#ead8d1] bg-[#fffdfa] p-5 shadow-sm">
            <p className="text-sm font-semibold text-[#8c665c]">Completed</p>
            <p className="mt-2 text-3xl font-black text-[#a54d3f]">
              {stats.completed}
            </p>
          </div>
        </section>
        <section className="reveal reveal-delay-more mt-6 rounded-3xl border border-[#d9ddd5] bg-[#fffdfa] p-5 shadow-xl shadow-[#cdd2c9]/50 sm:p-8">
          <TaskForm onAdd={addTask} />
          <div className="mt-8 flex flex-col gap-4 border-b border-[#e7e9e3] pb-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-1 rounded-xl bg-[#eef0eb] p-1">
              {["all", "active", "completed"].map((option) => (
                <button
                  key={option}
                  onClick={() => setFilter(option)}
                  className={`rounded-lg px-4 py-2 text-sm font-bold capitalize transition ${filter === option ? "bg-[#fffdfa] text-[#173b2a] shadow-sm" : "text-[#77817a] hover:text-[#17221c]"}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="flex items-center gap-2 rounded-xl border border-[#d9ddd5] px-3 text-[#89928b] focus-within:border-[#a54d3f] focus-within:ring-2 focus-within:ring-[#f0d9d2]">
                <span aria-hidden="true">/</span>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search tasks"
                  className="w-full bg-transparent py-2 text-sm text-[#17221c] outline-none placeholder:text-[#89928b] sm:w-48"
                />
              </label>
              <button
                onClick={clearAll}
                disabled={!stats.total}
                className="rounded-xl border border-[#d9ddd5] px-4 py-2 text-sm font-bold text-[#68736c] transition hover:border-[#e1b8ad] hover:text-[#a54d3f] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Clear all
              </button>
            </div>
          </div>
          <TaskList
            tasks={visibleTasks}
            editingId={editingId}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={setEditingId}
            onUpdate={updateTask}
          />
        </section>
        <p className="mt-5 text-center text-xs font-semibold text-[#89928b]">
          Your tasks are saved automatically in this browser.
        </p>
      </div>
    </main>
  );
}

export default App;
