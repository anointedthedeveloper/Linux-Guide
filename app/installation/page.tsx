'use client'

import React from "react"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronDown, Copy, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'

interface AccordionItem {
  title: string
  content: string | React.ReactNode
}

function CodeBlock({
  code,
  language = 'bash',
}: {
  code: string
  language?: string
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-foreground/5 rounded-lg overflow-hidden border border-border mb-4">
      <div className="flex items-center justify-between px-4 py-2 bg-foreground/10 border-b border-border">
        <span className="text-sm font-mono text-foreground/60">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1 rounded bg-primary/20 hover:bg-primary/30 text-primary transition text-sm"
        >
          <Copy className="w-4 h-4" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 py-3 flex items-center justify-between bg-card hover:bg-muted transition"
          >
            <h4 className="font-semibold text-left">{item.title}</h4>
            <ChevronDown
              className={`w-5 h-5 text-primary transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 bg-background border-t border-border">
              {typeof item.content === 'string' ? (
                <p className="text-foreground/80 whitespace-pre-wrap">{item.content}</p>
              ) : (
                item.content
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function InstallationGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-primary">
            ← Linux Helper
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Linux Installation Guide</h1>
          <p className="text-lg text-foreground/80">
            Complete step-by-step instructions for installing Linux and essential developer tools.
          </p>
        </div>

        {/* Table of Contents */}
        <Card className="p-6 mb-12 bg-primary/5 border-primary/20">
          <h2 className="font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#system-requirements" className="text-primary hover:underline">
                1. System Requirements
              </a>
            </li>
            <li>
              <a href="#apt-installation" className="text-primary hover:underline">
                2. Installing with APT (Ubuntu/Debian)
              </a>
            </li>
            <li>
              <a href="#yum-dnf" className="text-primary hover:underline">
                3. Installing with YUM/DNF (Fedora/RedHat)
              </a>
            </li>
            <li>
              <a href="#pacman" className="text-primary hover:underline">
                4. Installing with Pacman (Arch)
              </a>
            </li>
            <li>
              <a href="#source-installation" className="text-primary hover:underline">
                5. Installing from Source
              </a>
            </li>
            <li>
              <a href="#environment-variables" className="text-primary hover:underline">
                6. Setting Environment Variables
              </a>
            </li>
            <li>
              <a href="#verify-installation" className="text-primary hover:underline">
                7. Verifying Installation
              </a>
            </li>
            <li>
              <a href="#permissions-sudo" className="text-primary hover:underline">
                8. Understanding Permissions and Sudo
              </a>
            </li>
          </ul>
        </Card>

        {/* System Requirements */}
        <section id="system-requirements" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">1. System Requirements</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Minimum Requirements
              </h3>
              <ul className="space-y-2 text-foreground/80 ml-7">
                <li>• CPU: 1 GHz processor</li>
                <li>• RAM: 512 MB minimum (2 GB recommended for development)</li>
                <li>• Storage: 5-20 GB depending on distribution</li>
                <li>• Internet connection for package downloads</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3">Supported Distributions</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Debian-Based</h4>
                  <ul className="space-y-1 text-foreground/80 ml-4">
                    <li>• Ubuntu 20.04, 22.04, 24.04</li>
                    <li>• Debian 11, 12</li>
                    <li>• Linux Mint</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">RPM-Based</h4>
                  <ul className="space-y-1 text-foreground/80 ml-4">
                    <li>• Fedora 39, 40</li>
                    <li>• CentOS Stream 9</li>
                    <li>• RHEL 9</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* APT Installation */}
        <section id="apt-installation" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">2. Installing with APT (Ubuntu/Debian)</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Update Package Lists</h3>
              <p className="text-foreground/80 mb-4">
                Before installing any software, always update your package manager's cache:
              </p>
              <CodeBlock code="sudo apt update
sudo apt upgrade -y" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Installing Packages</h3>
              <p className="text-foreground/80 mb-4">
                To install a single package or multiple packages:
              </p>
              <CodeBlock code="# Install a single package
sudo apt install git

# Install multiple packages
sudo apt install build-essential git curl wget vim

# Install without confirmation
sudo apt install -y nodejs npm" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Common Developer Packages</h3>
              <CodeBlock code="# Build tools
sudo apt install build-essential git curl wget

# Programming languages
sudo apt install python3 python3-pip nodejs npm

# Development tools
sudo apt install vim nano htop tmux" />
            </Card>

            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-2">When to Use sudo</h4>
                  <p className="text-sm text-foreground/80">
                    Use `sudo` for system-wide installations. For user-level package managers (pip, npm), avoid sudo to prevent permission issues.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* YUM/DNF Installation */}
        <section id="yum-dnf" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">3. Installing with YUM/DNF (Fedora/RedHat)</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Update Package Manager</h3>
              <p className="text-foreground/80 mb-4">
                Fedora uses DNF (newer) or YUM (older). DNF is recommended:
              </p>
              <CodeBlock code="sudo dnf check-update
sudo dnf upgrade -y" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Installing Packages</h3>
              <CodeBlock code="# Install a single package
sudo dnf install git

# Install multiple packages
sudo dnf install git curl wget build-essential

# YUM syntax (for older systems)
sudo yum install package-name" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Common Developer Packages</h3>
              <CodeBlock code="# Build tools and development essentials
sudo dnf install @development-tools git curl

# Programming languages
sudo dnf install python3 python3-pip nodejs npm

# Utilities
sudo dnf install vim nano tmux htop" />
            </Card>
          </div>
        </section>

        {/* Pacman Installation */}
        <section id="pacman" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">4. Installing with Pacman (Arch Linux)</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Update System</h3>
              <CodeBlock code="sudo pacman -Syu" />
              <p className="text-sm text-foreground/70 mt-2">
                The `-Syu` flags mean: -S (sync/install), -y (refresh database), -u (upgrade packages)
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Installing Packages</h3>
              <CodeBlock code="# Install a single package
sudo pacman -S git

# Install multiple packages
sudo pacman -S base-devel git curl python nodejs npm

# Remove installation cache
sudo pacman -Sc" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Using AUR (Arch User Repository)</h3>
              <p className="text-foreground/80 mb-4">
                Install `yay` for easy AUR package management:
              </p>
              <CodeBlock code="# Install yay
sudo pacman -S yay

# Install from AUR
yay -S package-name

# Update all packages including AUR
yay -Syu" />
            </Card>
          </div>
        </section>

        {/* Source Installation */}
        <section id="source-installation" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">5. Installing from Source</h2>

          <div className="space-y-4">
            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-2">When to Compile from Source</h4>
                  <p className="text-sm text-foreground/80">
                    Only compile from source if you need a specific version or custom features. Pre-built packages are usually safer and faster.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">General Source Installation Steps</h3>
              <CodeBlock code="# 1. Download source code
cd ~/Downloads
wget https://example.com/package-1.0.tar.gz

# 2. Extract archive
tar xzf package-1.0.tar.gz
cd package-1.0

# 3. Read installation instructions
cat README
cat INSTALL

# 4. Configure the build
./configure

# 5. Compile
make

# 6. Install (requires sudo for system-wide)
sudo make install" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Build Dependencies</h3>
              <p className="text-foreground/80 mb-4">Install build tools first:</p>
              <CodeBlock code="# Ubuntu/Debian
sudo apt install build-essential

# Fedora/RedHat
sudo dnf install @development-tools

# Arch
sudo pacman -S base-devel" />
            </Card>
          </div>
        </section>

        {/* Environment Variables */}
        <section id="environment-variables" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">6. Setting Environment Variables</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Common Environment Variables</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-mono text-sm bg-foreground/5 p-2 rounded mb-2">PATH</p>
                  <p className="text-foreground/80 text-sm">Directories where the system searches for executable programs</p>
                </div>
                <div>
                  <p className="font-mono text-sm bg-foreground/5 p-2 rounded mb-2">LD_LIBRARY_PATH</p>
                  <p className="text-foreground/80 text-sm">
                    Directories where the linker searches for shared libraries
                  </p>
                </div>
                <div>
                  <p className="font-mono text-sm bg-foreground/5 p-2 rounded mb-2">HOME</p>
                  <p className="text-foreground/80 text-sm">Your user's home directory</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Setting Variables Temporarily</h3>
              <CodeBlock code="# View current PATH
echo $PATH

# Add directory to PATH (current session only)
export PATH=/usr/local/bin:$PATH

# Set a new variable
export MY_VAR=value" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Setting Variables Permanently</h3>
              <p className="text-foreground/80 mb-4">Edit your shell configuration file:</p>
              <CodeBlock code="# For bash, add to ~/.bashrc
echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# For zsh, add to ~/.zshrc
echo 'export PATH=/usr/local/bin:$PATH' >> ~/.zshrc
source ~/.zshrc" />
            </Card>
          </div>
        </section>

        {/* Verify Installation */}
        <section id="verify-installation" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">7. Verifying Installation</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Check if Package is Installed</h3>
              <CodeBlock code="# Using 'which' command
which git

# Using 'command' command
command -v python3

# For APT packages (Ubuntu/Debian)
apt list --installed | grep git

# For DNF packages (Fedora)
dnf list installed | grep git" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Check Package Version</h3>
              <CodeBlock code="# Most packages support --version
git --version
python3 --version
node --version
npm --version

# Some use -v or -V
curl -V
wget -V" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Verify Package Location</h3>
              <CodeBlock code="# Find installed binary
which git

# Find all matching executables
whereis git

# Get detailed package info (Ubuntu)
apt show git

# Get detailed package info (Fedora)
dnf info git" />
            </Card>
          </div>
        </section>

        {/* Permissions and Sudo */}
        <section id="permissions-sudo" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">8. Understanding Permissions and Sudo</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Understanding Linux Permissions</h3>
              <CodeBlock code="# View file permissions
ls -l file.txt

# Output example: -rw-r--r-- 1 user group 1234 Jan 1 12:00 file.txt
# Breakdown:
# - = file (d = directory)
# rw- = owner (read, write, execute)
# r-- = group permissions
# r-- = others permissions" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Using sudo Safely</h3>
              <CodeBlock code="# Run command with elevated privileges
sudo apt install package

# View sudo privileges
sudo -l

# Edit sudoers file (SAFE WAY)
sudo visudo

# Never edit /etc/sudoers directly!
# Always use 'sudo visudo'" />
            </Card>

            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-2">Sudo Best Practices</h4>
                  <ul className="text-sm text-foreground/80 space-y-1 ml-4">
                    <li>• Only use sudo when necessary</li>
                    <li>• Never run entire desktop environments with sudo</li>
                    <li>• Use sudo -u to run as different user when possible</li>
                    <li>• Always verify commands before running with sudo</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 py-12 border-t border-border">
          <Link href="/">
            <Button variant="outline">← Back Home</Button>
          </Link>
          <Link href="/terminal" className="ml-auto">
            <Button>Next: Terminal Basics →</Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-foreground/60">
          <p>&copy; 2026 Linux Helper. Educational content for developers.</p>
        </div>
      </footer>
    </div>
  )
}
