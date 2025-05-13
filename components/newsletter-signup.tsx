"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setEmail("")
    }, 1000)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-4 bg-green-900 bg-opacity-30 rounded-lg">
        <CheckCircle className="h-12 w-12 text-green-500 mb-2" />
        <h3 className="text-xl font-bold mb-2">You're In!</h3>
        <p>Thanks for subscribing to Cleveland Vibes. Check your inbox soon for the best of the 216.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white bg-opacity-10 border-gray-700 text-white placeholder:text-gray-400"
      />
      <Button type="submit" className="bg-yellow-400 text-black hover:bg-yellow-500" disabled={loading}>
        {loading ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}
