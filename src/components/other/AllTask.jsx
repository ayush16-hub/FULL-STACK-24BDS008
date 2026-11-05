
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    return (
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">

            <div className="hidden grid-cols-5 gap-4 bg-slate-50 px-6 py-4 md:grid">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">Employee</h2>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">New Tasks</h3>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">Active</h5>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">Completed</h5>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">Failed</h5>
            </div>

            <div className="divide-y divide-slate-100">
                {userData.map(function (elem, idx) {
                    return (
                        <div
                            key={idx}
                            className="grid grid-cols-2 gap-4 px-5 py-5 transition hover:bg-slate-50 md:grid-cols-5 md:items-center md:px-6"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                                    {elem.firstName.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <h2 className="font-semibold text-slate-800">
                                        {elem.firstName}
                                    </h2>
                                    <p className="text-xs text-slate-400 md:hidden">
                                        Employee
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between md:block">
                                <span className="text-xs font-medium text-slate-500 md:hidden">New Tasks</span>
                                <span className="inline-flex min-w-9 justify-center rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-600">
                                    {elem.taskCounts.newTask}
                                </span>
                            </div>

                            <div className="flex items-center justify-between md:block">
                                <span className="text-xs font-medium text-slate-500 md:hidden">Active</span>
                                <span className="inline-flex min-w-9 justify-center rounded-lg bg-amber-50 px-3 py-1.5 text-sm font-bold text-amber-600">
                                    {elem.taskCounts.active}
                                </span>
                            </div>

                            <div className="flex items-center justify-between md:block">
                                <span className="text-xs font-medium text-slate-500 md:hidden">Completed</span>
                                <span className="inline-flex min-w-9 justify-center rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-600">
                                    {elem.taskCounts.completed}
                                </span>
                            </div>

                            <div className="flex items-center justify-between md:block">
                                <span className="text-xs font-medium text-slate-500 md:hidden">Failed</span>
                                <span className="inline-flex min-w-9 justify-center rounded-lg bg-red-50 px-3 py-1.5 text-sm font-bold text-red-600">
                                    {elem.taskCounts.failed}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default AllTask
