import { useEffect } from 'react'
import '../styles/LoginPage.css'

import { backendHealthCheck, loginAttempt } from "../services/LoginConnectionApi"

export default function CreatePage() {

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const email = formData.get("email")
      const pwd = formData.get("password")

      if (email?.toString() === undefined) return
      if (pwd?.toString() === undefined) return

      const data = await loginAttempt(email?.toString(), pwd.toString())
      console.log(data)
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
          <h1>Create Account</h1>
          <p>Please enter your details</p>

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

          <label htmlFor="password">Confirm Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />

          <button type="submit" >Create Account</button>
        </form>
      </section>
    )
}