import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-primary">Privacy Policy</h1>
          <p className="text-foreground/70">Last updated: January 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p className="text-foreground/80 leading-relaxed">
              Linux Helper ("we," "us," "our," or "Company") operates the Linux Helper website. This page informs you of our policies
              regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated
              with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Information Collection and Use</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We collect different types of information for various purposes to provide and improve our Service to you.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-2">Types of Data Collected:</h3>
            <ul className="space-y-3 text-foreground/80 ml-6">
              <li>
                <strong>Usage Data:</strong> When you visit our Site, our servers may automatically record information created by your use of
                the Site ("Usage Data"). This may include your IP address, browser type and version, pages visited, and other statistics.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our
                Service and hold certain information.
              </li>
              <li>
                <strong>Google Analytics:</strong> We use Google Analytics to analyze how users use our site. Google Analytics collects
                information such as how often users visit this site, what pages they visit, and what other sites they used prior to coming to
                this site.
              </li>
              <li>
                <strong>Google AdSense:</strong> Google AdSense uses cookies and other tracking technologies to serve ads and measure their
                effectiveness on our site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Use of Data</h2>
            <p className="text-foreground/80 leading-relaxed mb-2">Linux Helper uses the collected data for various purposes:</p>
            <ul className="space-y-2 text-foreground/80 ml-6 list-disc">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues and fraudulent activity</li>
              <li>To serve advertisements and measure ad effectiveness</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Google AdSense</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our Service uses Google AdSense, a web-based advertising service provided by Google. Google uses cookies and similar
              technologies to serve ads tailored to your browsing habits across the internet. Google may collect and use information about
              your visits to this site and other websites to provide relevant advertisements.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              You can opt out of personalized advertising by visiting <a href="https://myaccount.google.com/data-and-privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a> or by visiting the{' '}
              <a href="https://optout.aboutads.info/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Third-Party Services</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our Service may contain links to third-party websites and services that are not operated by us. This Privacy Policy does not
              apply to third-party websites, and we are not responsible for their privacy practices. We encourage you to review the privacy
              policies of any third-party services before providing your information or using these services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Security of Data</h2>
            <p className="text-foreground/80 leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of
              electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we
              cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at <Link href="/contact" className="text-primary hover:underline">our contact page</Link>.
            </p>
          </section>
        </div>

        <div className="flex gap-4 py-12 border-t border-border mt-12">
          <Link href="/">
            <Button variant="outline">← Back Home</Button>
          </Link>
          <Link href="/cookies" className="ml-auto">
            <Button>Cookies Policy →</Button>
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
