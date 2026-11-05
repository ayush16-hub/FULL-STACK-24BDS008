
import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

      <div className="group rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
          ✦
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-blue-700">
          {data.taskCounts.newTask}
        </h2>
        <h3 className="mt-2 text-sm font-semibold text-slate-600">
          New Tasks
        </h3>
        <p className="mt-1 text-xs text-slate-400">Tasks waiting to be started</p>
      </div>

      <div className="group rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-xl text-amber-600">
          ◷
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-amber-600">
          {data.taskCounts.active}
        </h2>
        <h3 className="mt-2 text-sm font-semibold text-slate-600">
          Active Tasks
        </h3>
        <p className="mt-1 text-xs text-slate-400">Tasks currently in progress</p>
      </div>

      <div className="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-xl text-emerald-600">
          ✓
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-emerald-700">
          {data.taskCounts.completed}
        </h2>
        <h3 className="mt-2 text-sm font-semibold text-slate-600">
          Completed Tasks
        </h3>
        <p className="mt-1 text-xs text-slate-400">Successfully finished tasks</p>
      </div>

      <div className="group rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-xl text-red-600">
          !
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-red-600">
          {data.taskCounts.failed}
        </h2>
        <h3 className="mt-2 text-sm font-semibold text-slate-600">
          Failed Tasks
        </h3>
        <p className="mt-1 text-xs text-slate-400">Tasks that were not completed</p>
      </div>

    </div>
  )
}

export default TaskListNumbers
