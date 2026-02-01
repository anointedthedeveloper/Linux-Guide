'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Menu, X, Terminal, BookOpen, AlertCircle, CheckCircle, FileText, Search } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Terminal className="w-6 h-6" />
            Linux Helper
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#guides" className="text-foreground hover:text-primary transition">
              Guides
            </Link>
            <Link href="/installation" className="text-foreground hover:text-primary transition">
              Installation
            </Link>
            <Link href="/errors" className="text-foreground hover:text-primary transition">
              Error Reference
            </Link>
            <Link href="/troubleshooting" className="text-foreground hover:text-primary transition">
              Troubleshooting
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-3">
              <Link href="#guides" className="block text-foreground hover:text-primary py-2">
                Guides
              </Link>
              <Link href="/installation" className="block text-foreground hover:text-primary py-2">
                Installation
              </Link>
              <Link href="/errors" className="block text-foreground hover:text-primary py-2">
                Error Reference
              </Link>
              <Link href="/troubleshooting" className="block text-foreground hover:text-primary py-2">
                Troubleshooting
              </Link>
              <Link href="/about" className="block text-foreground hover:text-primary py-2">
                About
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              Master Linux Development
            </h1>
            <p className="text-lg text-foreground/80 mb-8 text-balance">
              Comprehensive guides for installation, terminal mastery, and troubleshooting. Learn everything you need to become a confident Linux developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/installation">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="#guides">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  Explore Guides
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Guides Section */}
        <section id="guides" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Comprehensive Linux Guides</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Installation Guide */}
            <Link href="/installation">
              <Card className="p-8 hover:shadow-lg hover:border-primary transition cursor-pointer h-full">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Installation Guide</h3>
                    <p className="text-foreground/70">
                      Step-by-step instructions for installing Linux and essential developer tools. Covers APT, YUM, DNF, Pacman, and source installations.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Terminal & Shell Basics */}
            <Link href="/terminal">
              <Card className="p-8 hover:shadow-lg hover:border-primary transition cursor-pointer h-full">
                <div className="flex items-start gap-4">
                  <Terminal className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Terminal & Shell Basics</h3>
                    <p className="text-foreground/70">
                      Learn Bash, Zsh, permissions, redirects, pipelines, and safe command execution. Master the command line with practical examples.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Error Reference */}
            <Link href="/errors">
              <Card className="p-8 hover:shadow-lg hover:border-primary transition cursor-pointer h-full">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Common Errors Reference</h3>
                    <p className="text-foreground/70">
                      Searchable lookup for common Linux errors. Includes causes, explanations, and step-by-step solutions for each error type.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Troubleshooting Checklist */}
            <Link href="/troubleshooting">
              <Card className="p-8 hover:shadow-lg hover:border-primary transition cursor-pointer h-full">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Troubleshooting Checklist</h3>
                    <p className="text-foreground/70">
                      Safe, structured troubleshooting steps. Verify installations, check permissions, inspect logs, and fix issues without destructive commands.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* AdSense Info Section */}
        <section className="py-16 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary">About This Site</h2>
            <div className="space-y-6 text-foreground/80">
              <p>
                Linux Helper is a developer-focused educational resource designed to help Linux users master system administration, terminal usage, and troubleshooting. Our comprehensive guides cover installation procedures, shell fundamentals, and error resolution with practical, real-world examples.
              </p>
              <p>
                This site is ad-supported through Google AdSense, allowing us to provide free, quality content to the developer community. All advertising is carefully placed to maintain a clean, professional experience.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                <span className="text-border">•</span>
                <Link href="/adsense" className="text-primary hover:underline">
                  About AdSense
                </Link>
                <span className="text-border">•</span>
                <Link href="/contact" className="text-primary hover:underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5 rounded-lg border border-primary/20 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Master Linux?</h2>
            <p className="text-foreground/70 mb-6">
              Start with our installation guide or explore a specific topic to get started.
            </p>
            <Link href="/installation">
              <Button size="lg">Begin Learning</Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 text-primary">Linux Helper</h3>
              <p className="text-sm text-foreground/70">Your trusted resource for Linux development guides.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Guides</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <Link href="/installation" className="hover:text-primary">
                    Installation
                  </Link>
                </li>
                <li>
                  <Link href="/terminal" className="hover:text-primary">
                    Terminal Basics
                  </Link>
                </li>
                <li>
                  <Link href="/errors" className="hover:text-primary">
                    Error Reference
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <Link href="/troubleshooting" className="hover:text-primary">
                    Troubleshooting
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <Link href="/privacy" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-primary">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/adsense" className="hover:text-primary">
                    About AdSense
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 Linux Helper. All rights reserved. Educational content for developers.</p>
            <p className="mt-2">
              Google AdSense is enabled on this site. See our <Link href="/adsense" className="text-primary hover:underline">
                AdSense policy
              </Link>{' '}
              for details.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
