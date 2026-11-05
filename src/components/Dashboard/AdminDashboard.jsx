
import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Dashboard Header */}
      <div className="px-5 pt-7 md:px-10 lg:px-14">
        <Header changeUser={props.changeUser} />
      </div>

      {/* Main Dashboard Content */}
      <main className="mx-auto max-w-[1500px] space-y-8 px-5 py-8 md:px-10 lg:px-14">

        {/* Page Heading */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Workspace overview
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-sm text-slate-500 md:text-base">
            Manage employees, distribute tasks and monitor team progress.
          </p>
        </div>

        {/* Create Task Section */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              Create a new task
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Assign work to your employees and define their deadlines.
            </p>
          </div>

          <CreateTask />
        </section>

        {/* Employee Overview */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              Team task overview
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Monitor task distribution and completion across your team.
            </p>
          </div>

          <AllTask />
        </section>

      </main>
    </div>
  );
};

export default AdminDashboard;
