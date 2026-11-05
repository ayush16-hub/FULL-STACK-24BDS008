
import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Header */}
      <div className="px-5 pt-7 md:px-10 lg:px-14">
        <Header
          changeUser={props.changeUser}
          data={props.data}
        />
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-[1500px] space-y-8 px-5 py-8 md:px-10 lg:px-14">

        {/* Welcome Section */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Employee workspace
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Welcome back, {props.data?.firstName || "Employee"}!
          </h1>

          <p className="mt-2 text-sm text-slate-500 md:text-base">
            Here's an overview of your tasks and current progress.
          </p>
        </section>

        {/* Task Statistics */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-slate-800">
              Your productivity
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Track your assigned work and task progress.
            </p>
          </div>

          <TaskListNumbers data={props.data} />
        </section>

        {/* Task List */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              My tasks
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Review and manage your assigned tasks.
            </p>
          </div>

          <TaskList data={props.data} />
        </section>

      </main>
    </div>
  );
};

export default EmployeeDashboard;
