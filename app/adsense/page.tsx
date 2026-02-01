import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function AdsensePage() {
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
          <h1 className="text-4xl font-bold mb-4 text-primary">About Google AdSense</h1>
          <p className="text-foreground/70">Last updated: January 2026</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. What is Google AdSense?</h2>
            <p className="text-foreground/80 leading-relaxed">
              Google AdSense is a free advertising platform operated by Google that allows website publishers to earn revenue by displaying
              targeted advertisements on their sites. Linux Helper uses Google AdSense to monetize this website while providing free
              educational content to developers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. How AdSense Works on Our Site</h2>
            <Card className="p-6 bg-primary/5 border-primary/20">
              <p className="text-foreground/80 leading-relaxed">
                When you visit Linux Helper, Google AdSense analyzes your browsing behavior and displays advertisements that are likely to be
                relevant to you. These ads are served by Google's ad network and may include advertisements from various companies and brands.
              </p>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. How We Ensure Quality Content</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We maintain strict standards for ad placement and content quality:
            </p>
            <ul className="space-y-2 text-foreground/80 ml-6 list-disc">
              <li>Ads are placed non-intrusively throughout the site</li>
              <li>We do not allow misleading or deceptive ads</li>
              <li>No ads for prohibited products or services</li>
              <li>We comply with all Google AdSense policies</li>
              <li>Educational content is never compromised by advertising</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Your Privacy and AdSense</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Google uses cookies and similar technologies to serve relevant ads. This means:
            </p>
            <ul className="space-y-2 text-foreground/80 ml-6 list-disc">
              <li>Google collects data about your browsing habits</li>
              <li>Ads are personalized based on your interests</li>
              <li>You can control your ad preferences through Google Account settings</li>
              <li>Our full Privacy Policy applies to all data collection</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mt-4">
              For more information about how Google uses your data, visit{' '}
              <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Google's Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Opting Out of Personalized Ads</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              You have the right to control personalized advertising:
            </p>
            <div className="space-y-3">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Google Ad Settings</h3>
                <p className="text-sm text-foreground/80">
                  Visit <a href="https://myaccount.google.com/data-and-privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    Google Ad Settings
                  </a>{' '}
                  to manage your personalized ad preferences.
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Network Advertising Initiative</h3>
                <p className="text-sm text-foreground/80">
                  Use the <a href="https://optout.aboutads.info/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    NAI opt-out tool
                  </a>{' '}
                  to opt out of personalized ads from participating networks.
                </p>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. AdSense Revenue</h2>
            <p className="text-foreground/80 leading-relaxed">
              Revenue generated from AdSense advertising helps us:
            </p>
            <ul className="space-y-2 text-foreground/80 ml-6 list-disc mt-4">
              <li>Maintain and improve our website infrastructure</li>
              <li>Create and update educational content</li>
              <li>Keep all content free and accessible to developers worldwide</li>
              <li>Support ongoing development and maintenance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Compliance with Google AdSense Policies</h2>
            <p className="text-foreground/80 leading-relaxed">
              We comply with all Google AdSense Program Policies, which prohibit:
            </p>
            <ul className="space-y-2 text-foreground/80 ml-6 list-disc mt-4">
              <li>Misleading content or deceptive practices</li>
              <li>Clicking on ads artificially to generate revenue</li>
              <li>Placing ads on prohibited content</li>
              <li>Violating user privacy and data protection laws</li>
              <li>Interfering with ad delivery or user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Reporting Inappropriate Ads</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you encounter an inappropriate or malicious advertisement on our site:
            </p>
            <ol className="space-y-2 text-foreground/80 ml-6 list-decimal mt-4">
              <li>
                Click on the "X" or close button on the ad to dismiss it
              </li>
              <li>
                Report it through Google's Ad Feedback feature
              </li>
              <li>
                Contact us through our <Link href="/contact" className="text-primary hover:underline">
                  contact page
                </Link>
              </li>
            </ol>

            <p className="text-foreground/80 leading-relaxed mt-4">
              We take ad quality seriously and will work with Google to address any issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">9. Ad Placements on Our Site</h2>
            <p className="text-foreground/80 leading-relaxed">
              We place AdSense ads strategically to minimize disruption to your experience:
            </p>
            <ul className="space-y-2 text-foreground/80 ml-6 list-disc mt-4">
              <li>Between major content sections</li>
              <li>In the sidebar or margins where appropriate</li>
              <li>After main content conclusions</li>
              <li>Below section headers for easy navigation</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mt-4">
              Our priority remains providing high-quality educational content. Ad placements are never permitted to interfere with learning or
              content accessibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">10. Contact & Support</h2>
            <p className="text-foreground/80 leading-relaxed">
              Have questions about our use of Google AdSense? Please <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>. We're happy to clarify any concerns about advertising on Linux Helper.
            </p>
          </section>
        </div>

        <div className="flex gap-4 py-12 border-t border-border mt-12">
          <Link href="/cookies">
            <Button variant="outline">← Cookies Policy</Button>
          </Link>
          <Link href="/about" className="ml-auto">
            <Button>About Us →</Button>
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
