
import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-50 px-5 py-10">

            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"></div>

            <div className="relative z-10 w-full max-w-md">

                <div className="mb-8 text-center">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-bold text-white shadow-lg shadow-indigo-200">
                        E
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Sign in to access your workspace
                    </p>
                </div>

                <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-xl shadow-slate-200/60 sm:p-10">

                    <div className="mb-7">
                        <h2 className="text-xl font-bold text-slate-800">
                            Login to your account
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Enter your credentials below
                        </p>
                    </div>

                    <form
                        onSubmit={(e) => {
                            submitHandler(e)
                        }}
                        className="flex flex-col"
                    >

                        <label className="mb-2 text-sm font-semibold text-slate-700">
                            Email Address
                        </label>

                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                            type="email"
                            placeholder="Enter your email"
                        />

                        <label className="mb-2 mt-5 text-sm font-semibold text-slate-700">
                            Password
                        </label>

                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                            type="password"
                            placeholder="Enter your password"
                        />

                        <button className="mt-7 w-full rounded-xl bg-indigo-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl active:translate-y-0">
                            Sign In
                        </button>

                    </form>

                </div>

                <p className="mt-7 text-center text-xs text-slate-400">
                    Employee Management System
                </p>

            </div>
        </div>
    )
}

export default Login
