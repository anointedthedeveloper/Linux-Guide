import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BookOpen, Users, Target } from 'lucide-react'

export default function AboutPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-primary">About Linux Helper</h1>
          <p className="text-lg text-foreground/80">
            A comprehensive resource for Linux users and developers.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="flex gap-4 mb-4">
                <Target className="w-8 h-8 text-primary flex-shrink-0" />
                <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Linux Helper exists to make Linux development and system administration more accessible to everyone. We provide clear,
                practical, and actionable guidance that helps developers master the command line and troubleshoot issues independently.
              </p>
            </Card>

            <Card className="p-8 bg-secondary/5 border-secondary/20">
              <div className="flex gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-secondary flex-shrink-0" />
                <h2 className="text-2xl font-bold text-secondary">Our Approach</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                We believe in learning through practical examples and real-world scenarios. Each guide includes step-by-step instructions,
                command examples, and troubleshooting tips that developers can immediately apply to their own systems.
              </p>
            </Card>
          </div>
        </section>

        {/* Content Areas */}
        <section className="mb-12 border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-primary mb-8">What We Cover</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-primary">Installation & Setup</h3>
              <p className="text-foreground/80 text-sm">
                Step-by-step guides for installing Linux and essential developer tools across various distributions.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-primary">Terminal Mastery</h3>
              <p className="text-foreground/80 text-sm">
                Learn Bash, Zsh, file permissions, redirects, and command-line best practices.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-primary">Error Resolution</h3>
              <p className="text-foreground/80 text-sm">
                Searchable reference for common Linux errors with explanations and solutions.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-primary">Troubleshooting</h3>
              <p className="text-foreground/80 text-sm">
                Structured checklists and safe debugging techniques for system issues.
              </p>
            </Card>
          </div>
        </section>

        {/* Target Audience */}
        <section className="mb-12 border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Who Is This For?</h2>
          <div className="space-y-4">
            <Card className="p-6 flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
              <div>
                <h3 className="font-semibold mb-1">Linux Beginners</h3>
                <p className="text-foreground/80 text-sm">
                  Getting started with Linux? Our installation guides and terminal basics will get you up to speed quickly.
                </p>
              </div>
            </Card>
            <Card className="p-6 flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
              <div>
                <h3 className="font-semibold mb-1">Web Developers</h3>
                <p className="text-foreground/80 text-sm">
                  Whether you're using Linux locally or managing servers, our guides cover the tools and techniques you need.
                </p>
              </div>
            </Card>
            <Card className="p-6 flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
              <div>
                <h3 className="font-semibold mb-1">System Administrators</h3>
                <p className="text-foreground/80 text-sm">
                  Troubleshooting complex issues? Our error reference and checklist approach saves time and improves reliability.
                </p>
              </div>
            </Card>
            <Card className="p-6 flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
              <div>
                <h3 className="font-semibold mb-1">DevOps Engineers</h3>
                <p className="text-foreground/80 text-sm">
                  Deep dive into Linux fundamentals and troubleshooting to improve your infrastructure work.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="mb-12 border-t border-border pt-12 bg-accent/5 border-accent/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Why We Exist</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Linux powers the internet. From personal laptops to massive data centers, Linux is everywhere. Yet many developers struggle with
            basic system administration tasks, troubleshooting, and terminal usage.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            We created Linux Helper to fill this gap. Our goal is to provide free, high-quality educational content that helps developers of
            all skill levels become more confident and capable with Linux. By making this knowledge accessible, we believe we can help
            thousands of developers and system administrators work more effectively.
          </p>
        </section>

        {/* How We're Funded */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">How We're Funded</h2>
          <Card className="p-8">
            <p className="text-foreground/80 leading-relaxed mb-4">
              Linux Helper is supported by Google AdSense advertising. This model allows us to provide all content completely free while
              maintaining the site and creating new guides.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We take our commitment to your privacy and data security seriously. All advertising complies with Google AdSense policies and
              our strict privacy standards. For details, see our <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>,{' '}
              <Link href="/adsense" className="text-primary hover:underline">
                AdSense Policy
              </Link>, and{' '}
              <Link href="/cookies" className="text-primary hover:underline">
                Cookies Policy
              </Link>.
            </p>
          </Card>
        </section>

        {/* Our Commitment */}
        <section className="mb-12 border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Our Commitment</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-primary/20">
              <h3 className="font-semibold mb-3 text-primary">Quality Content</h3>
              <p className="text-foreground/80 text-sm">
                Every guide is carefully researched, tested, and updated to ensure accuracy and relevance.
              </p>
            </Card>
            <Card className="p-6 border-primary/20">
              <h3 className="font-semibold mb-3 text-primary">Always Free</h3>
              <p className="text-foreground/80 text-sm">
                All content will remain free. No paywalls, no premium tiers, no hidden costs.
              </p>
            </Card>
            <Card className="p-6 border-primary/20">
              <h3 className="font-semibold mb-3 text-primary">User Safety</h3>
              <p className="text-foreground/80 text-sm">
                We never include destructive commands or unsafe practices in our guides.
              </p>
            </Card>
            <Card className="p-6 border-primary/20">
              <h3 className="font-semibold mb-3 text-primary">Privacy First</h3>
              <p className="text-foreground/80 text-sm">
                Your data privacy is paramount. We comply with all privacy regulations and best practices.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border pt-12 mb-12">
          <Card className="p-8 bg-primary/10 border-primary/30 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Learn?</h2>
            <p className="text-foreground/80 mb-6">
              Start with our installation guide or jump straight to any topic you'd like to explore.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/installation">
                <Button>Installation Guide</Button>
              </Link>
              <Link href="/terminal">
                <Button variant="outline">Terminal Basics</Button>
              </Link>
              <Link href="/errors">
                <Button variant="outline">Error Reference</Button>
              </Link>
            </div>
          </Card>
        </section>

        <div className="flex gap-4 py-12 border-t border-border">
          <Link href="/">
            <Button variant="outline">← Back Home</Button>
          </Link>
          <Link href="/contact" className="ml-auto">
            <Button>Contact Us →</Button>
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
