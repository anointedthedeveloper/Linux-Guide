import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CookiesPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-primary">Cookies Policy</h1>
          <p className="text-foreground/70">Last updated: January 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. What Are Cookies?</h2>
            <p className="text-foreground/80 leading-relaxed">
              Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit our website. Cookies help
              websites remember information about your visit, such as your language preferences or login status. They can remain on your
              device for different periods of time - from the end of your browser session (session cookies) to several years
              (persistent cookies).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Cookies</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">We use cookies for several purposes:</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Essential Cookies</h3>
                <p className="text-foreground/80 text-sm ml-4">
                  These cookies are necessary for the website to function properly. They enable basic features like page navigation and access
                  to secure areas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Performance Cookies</h3>
                <p className="text-foreground/80 text-sm ml-4">
                  These cookies collect information about how you use our website, such as which pages you visit and how often. This helps
                  us improve our site's performance and user experience.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Analytics Cookies</h3>
                <p className="text-foreground/80 text-sm ml-4">
                  We use Google Analytics cookies to understand how visitors use our site. This information helps us make improvements to
                  our content and services.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Advertising Cookies</h3>
                <p className="text-foreground/80 text-sm ml-4">
                  Third-party ad networks, including Google AdSense, place cookies on your device to serve relevant advertisements based on
                  your browsing history.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Third-Party Cookies</h2>
            <p className="text-foreground/80 leading-relaxed">
              In addition to our own cookies, we allow third parties to place cookies on your device. These include:
            </p>
            <ul className="space-y-2 text-foreground/80 ml-6 list-disc mt-4">
              <li>
                <strong>Google Analytics:</strong> Helps us analyze website traffic and user behavior
              </li>
              <li>
                <strong>Google AdSense:</strong> Serves personalized advertisements
              </li>
              <li>
                <strong>Other Ad Networks:</strong> May place cookies for advertising purposes
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Cookie Consent</h2>
            <p className="text-foreground/80 leading-relaxed">
              By continuing to use our website, you consent to our use of cookies as described in this policy. You can manage your cookie
              preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Managing Cookies</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Most web browsers allow you to manage cookies. You can:</p>
            <ul className="space-y-2 text-foreground/80 ml-6 list-disc">
              <li>See what cookies are stored on your device and delete them</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies (note: this may affect website functionality)</li>
              <li>Opt out of personalized advertising</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mt-4">
              Instructions for managing cookies are typically found in the "Help" section of your browser. Visit{' '}
              <a href="https://www.aboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                aboutcookies.org
              </a>{' '}
              for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
            <p className="text-foreground/80 leading-relaxed">
              You have the right to control whether cookies are used on your device. You can:
            </p>
            <ul className="space-y-2 text-foreground/80 ml-6 list-disc mt-4">
              <li>Withdraw consent to cookies at any time through your browser settings</li>
              <li>Opt out of personalized advertising through Google Ad Settings</li>
              <li>Request information about the cookies we use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Changes to This Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you by updating the "Last updated" date of this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have questions about our use of cookies or this Cookies Policy, please{' '}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="flex gap-4 py-12 border-t border-border mt-12">
          <Link href="/privacy">
            <Button variant="outline">← Privacy Policy</Button>
          </Link>
          <Link href="/adsense" className="ml-auto">
            <Button>About AdSense →</Button>
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
