import { useState, useEffect } from 'react'
import '../styles/LoginPage.css'

import backendHealthCheck from "../services/LoginConnectionApi"

export default function LoginPage() {
    const [message, setMessage] = useState('')

    function handleSubmit(event: any) {
      event.preventDefault()
      setMessage("Sign-in isn't connected yet.")
    }

    useEffect(() => {
        const check = async () => {
            backendHealthCheck()
        }

        check()
    }, [])

    return (
      <section className="login-page">
        <form className="login-card" onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <p>Welcome back. Please enter your details.</p>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />

          <button type="submit">Sign in</button>
          <p className="login-message" aria-live="polite">{message}</p>
        </form>
      </section>
    )
}