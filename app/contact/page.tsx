'use client'

import React from "react"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, MessageSquare } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="font-bold text-primary">
            ← Linux Helper
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Contact Us</h1>
          <p className="text-lg text-foreground/80">
            Have questions, feedback, or found an error in our guides? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 flex flex-col items-center text-center">
            <Mail className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-foreground/70 mb-3">For general inquiries</p>
            <p className="font-mono text-sm text-primary">contact@linuxhelper.dev</p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center">
            <MessageSquare className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Feedback</h3>
            <p className="text-sm text-foreground/70 mb-3">Report bugs or suggest improvements</p>
            <p className="font-mono text-sm text-primary">feedback@linuxhelper.dev</p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center">
            <MessageSquare className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Support</h3>
            <p className="text-sm text-foreground/70 mb-3">Need help with the site?</p>
            <p className="font-mono text-sm text-primary">support@linuxhelper.dev</p>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Send us a Message</h2>

          {submitted ? (
            <div className="p-6 bg-secondary/10 border border-secondary/20 rounded-lg text-center">
              <h3 className="font-semibold mb-2 text-secondary">Message Received!</h3>
              <p className="text-foreground/80">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a subject...</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="bug">Report a Bug</option>
                  <option value="suggestion">Suggest a Guide</option>
                  <option value="error">Report an Error</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </Card>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">How long does it take to get a response?</h3>
              <p className="text-foreground/80 text-sm">
                We aim to respond to all inquiries within 2-3 business days. During busy periods, it may take slightly longer.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Can I report security issues?</h3>
              <p className="text-foreground/80 text-sm">
                Yes, please email security concerns to support@linuxhelper.dev. We take security seriously and will investigate promptly.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Can I request a new guide?</h3>
              <p className="text-foreground/80 text-sm">
                Absolutely! Use the contact form and select "Suggest a Guide" as the subject. We review all suggestions and prioritize
                topics based on community interest.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Do you accept contributions or guest posts?</h3>
              <p className="text-foreground/80 text-sm">
                We're currently managing all content internally, but we appreciate the interest. Feel free to contact us to discuss potential
                collaboration opportunities.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Found an error in a guide?</h3>
              <p className="text-foreground/80 text-sm">
                Please report it immediately! Select "Report an Error" in the contact form, and include the page URL and details about the
                issue. We'll fix it as soon as possible.
              </p>
            </Card>
          </div>
        </section>

        {/* Other ways to reach us */}
        <Card className="p-8 bg-accent/5 border-accent/20">
          <h2 className="text-2xl font-bold mb-4 text-primary">Other Ways to Reach Us</h2>
          <p className="text-foreground/80 mb-4">
            While we don't have social media pages, you can reach us through multiple channels:
          </p>
          <ul className="space-y-2 text-foreground/80 ml-6 list-disc">
            <li>Use the contact form above</li>
            <li>Email support@linuxhelper.dev directly</li>
            <li>Report bugs and suggest features through our feedback email</li>
          </ul>
        </Card>

        <div className="flex gap-4 py-12 border-t border-border mt-12">
          <Link href="/about">
            <Button variant="outline">← About Us</Button>
          </Link>
          <Link href="/" className="ml-auto">
            <Button>Back Home →</Button>
          </Link>
        </div>
      </main>

      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-foreground/60">
          <p>&copy; 2026 Linux Helper. Educational content for developers.</p>
        </div>
      </footer>
    </div>
  )
}
