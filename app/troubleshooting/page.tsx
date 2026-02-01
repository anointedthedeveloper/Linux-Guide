'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle2, AlertCircle, Copy, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface ChecklistItem {
  title: string
  description: string
  commands: string[]
  notes: string
}

function CodeBlock({ code, showLineNumbers = false }: { code: string; showLineNumbers?: boolean }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split('\n')

  return (
    <div className="bg-foreground/5 rounded-lg overflow-hidden border border-border my-3">
      <div className="flex items-center justify-between px-4 py-2 bg-foreground/10 border-b border-border">
        <span className="text-sm font-mono text-foreground/60">bash</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1 rounded bg-primary/20 hover:bg-primary/30 text-primary transition text-sm"
        >
          <Copy className="w-4 h-4" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code>
          {lines.map((line, idx) => (
            <div key={idx}>
              {showLineNumbers && <span className="text-foreground/40 mr-3">{idx + 1}</span>}
              {line}
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}

export default function TroubleshootingPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const toggleCheck = (key: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const checklistItems: ChecklistItem[] = [
    {
      title: 'Verify Package Installation',
      description: 'Confirm that the package or application is properly installed on your system.',
      commands: [
        'which package-name          # Find executable location',
        'command -v package-name     # Check if command exists',
        'apt list --installed | grep package-name  # For Ubuntu/Debian',
        'dnf list installed | grep package-name    # For Fedora',
        'pacman -Q package-name      # For Arch Linux',
      ],
      notes:
        'If the package is not found, install it using your distribution\'s package manager. If installed but not found, the PATH may need updating.',
    },
    {
      title: 'Check Environment Variables',
      description: 'Verify that important environment variables are set correctly.',
      commands: [
        'echo $PATH                  # Show command search path',
        'echo $LD_LIBRARY_PATH       # Show library search path',
        'echo $HOME                  # Show home directory',
        'env | sort                  # List all environment variables',
        'env | grep VARIABLE_NAME    # Find specific variable',
      ],
      notes:
        'If PATH is missing directories, add them temporarily with: export PATH=/path/to/bin:$PATH or permanently in ~/.bashrc or ~/.zshrc',
    },
    {
      title: 'Verify File Permissions',
      description: 'Check and fix file permissions that may be preventing access or execution.',
      commands: [
        'ls -la file.txt             # Check file permissions',
        'ls -ld directory/           # Check directory permissions',
        'chmod +x script.sh          # Make file executable',
        'chmod 644 file.txt          # Read/write for owner, read-only for others',
        'chmod 755 directory/        # Full access for owner, read-execute for others',
      ],
      notes:
        'Common issues: missing execute permission on scripts, incorrect ownership, or wrong group permissions. Use sudo chown if needed.',
    },
    {
      title: 'Restart Terminal or Shell',
      description: 'Restart your shell session to apply changes to configuration files.',
      commands: [
        'exec bash                   # Restart bash shell',
        'exec zsh                    # Restart zsh shell',
        'source ~/.bashrc            # Reload bashrc without restarting',
        'source ~/.zshrc             # Reload zshrc without restarting',
        'exit                        # Close current shell and restart',
      ],
      notes:
        'After modifying ~/.bashrc, ~/.zshrc, or other shell configuration files, restart your terminal for changes to take effect.',
    },
    {
      title: 'Check System Services',
      description: 'Verify that required services are running and properly configured.',
      commands: [
        'sudo systemctl status service-name     # Check service status',
        'sudo systemctl start service-name      # Start service',
        'sudo systemctl restart service-name    # Restart service',
        'sudo systemctl enable service-name     # Enable on boot',
        'sudo systemctl list-units --type=service  # List all services',
      ],
      notes:
        'Use systemctl for modern systems. For older systems, use: sudo service service-name status or sudo /etc/init.d/service-name status',
    },
    {
      title: 'Check System Logs',
      description: 'Examine system logs to diagnose problems and understand what went wrong.',
      commands: [
        'journalctl -xe              # Show recent errors',
        'journalctl -u service-name  # Show logs for specific service',
        'tail -f /var/log/syslog     # Follow system log in real-time',
        'dmesg | tail -20            # Show kernel messages',
        'tail -f /var/log/auth.log   # Monitor authentication logs',
      ],
      notes:
        'Check logs when applications fail. journalctl is preferred on modern systems. Look for ERROR or FAILED messages for clues.',
    },
    {
      title: 'Verify Disk Space',
      description: 'Ensure you have sufficient disk space and inodes available.',
      commands: [
        'df -h                       # Show disk usage (human-readable)',
        'df -i                       # Show inode usage',
        'du -sh ~/                   # Show home directory size',
        'du -sh ~/* | sort -rh       # Find largest items in home',
        'lsof +D /path               # Find open files in directory',
      ],
      notes:
        'If disk is 100% full, clean temporary files, old logs, or package caches. Use: sudo apt clean, sudo apt autoclean',
    },
    {
      title: 'Check Network Connectivity',
      description: 'Verify network connection if the issue involves internet or local network access.',
      commands: [
        'ping 8.8.8.8                # Test internet connection',
        'ping google.com             # Test DNS resolution',
        'ip addr show                # Show IP addresses',
        'ifconfig                    # Show network interfaces (older systems)',
        'ss -tlnp                    # Show listening ports',
      ],
      notes:
        'For service connections, check if the port is listening: sudo netstat -tlnp | grep :port or use: sudo ss -tlnp | grep :port',
    },
    {
      title: 'Check Library Dependencies',
      description: 'Verify that all required shared libraries are present and accessible.',
      commands: [
        'ldd ./program               # Show library dependencies',
        'ldconfig -p | grep libname  # Search for library',
        'LD_LIBRARY_PATH=/path/lib ./program  # Add library path',
        'sudo ldconfig               # Update linker cache',
        'objdump -p ./program | grep NEEDED  # Show program requirements',
      ],
      notes:
        'Missing libraries often show error: "cannot open shared object file". Use ldd to identify which library is missing, then install it.',
    },
    {
      title: 'Update and Upgrade System',
      description: 'Ensure all packages are up to date, which can fix many compatibility issues.',
      commands: [
        'sudo apt update && sudo apt upgrade -y  # Ubuntu/Debian',
        'sudo dnf upgrade -y         # Fedora',
        'sudo pacman -Syu            # Arch Linux',
        'sudo apt autoremove         # Remove unused packages',
        'sudo apt autoclean          # Clean package cache',
      ],
      notes:
        'Regular updates fix security issues and bugs. Use -y flag to answer yes automatically. Run these commands regularly for system health.',
    },
  ]

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
          <h1 className="text-4xl font-bold mb-4 text-primary">Troubleshooting Checklist</h1>
          <p className="text-lg text-foreground/80">
            Safe, structured steps to diagnose and resolve Linux problems without destructive commands.
          </p>
        </div>

        {/* Info Box */}
        <Card className="p-6 mb-12 bg-secondary/10 border-secondary/20 flex gap-4">
          <AlertCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold mb-2">Before You Start</h3>
            <p className="text-sm text-foreground/80">
              Follow this checklist in order. Each step is non-destructive and helps identify the root cause. Never execute commands you don't
              understand, and always back up important data before making system changes.
            </p>
          </div>
        </Card>

        {/* Checklist */}
        <div className="space-y-4 mb-12">
          {checklistItems.map((item, index) => {
            const itemKey = `item-${index}`
            const isChecked = checkedItems[itemKey]

            return (
              <Card key={index} className={`overflow-hidden transition ${isChecked ? 'bg-secondary/5 border-secondary/30' : ''}`}>
                <div className="p-6">
                  <div className="flex gap-4">
                    <button
                      onClick={() => toggleCheck(itemKey)}
                      className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition ${
                        isChecked ? 'bg-secondary border-secondary' : 'border-border hover:border-primary'
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="w-5 h-5 text-background" />}
                    </button>

                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 ${isChecked ? 'text-foreground/70 line-through' : ''}`}>
                        Step {index + 1}: {item.title}
                      </h3>

                      <p className={`text-sm mb-4 ${isChecked ? 'text-foreground/60' : 'text-foreground/80'}`}>
                        {item.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-mono text-sm font-semibold mb-2 text-foreground/70">Commands:</h4>
                        {item.commands.map((cmd, idx) => (
                          <div key={idx} className="font-mono text-xs bg-foreground/5 p-2 rounded mb-1 border border-border overflow-x-auto">
                            $ {cmd}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-start gap-2 bg-accent/5 border border-accent/20 rounded p-3">
                        <AlertCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-foreground/80">{item.notes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Quick Reference */}
        <section className="border-t border-border pt-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Quick Reference: Common Issue Patterns</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-primary" />
                Application Won't Start
              </h3>
              <ol className="text-sm text-foreground/80 space-y-2 ml-7 list-decimal">
                <li>Check if it's installed: which app-name</li>
                <li>Check permissions: ls -la /path/to/app</li>
                <li>Check dependencies: ldd /path/to/app</li>
                <li>Check logs: journalctl -n 50</li>
              </ol>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-primary" />
                Service Not Responding
              </h3>
              <ol className="text-sm text-foreground/80 space-y-2 ml-7 list-decimal">
                <li>Check status: sudo systemctl status service</li>
                <li>Check port: sudo ss -tlnp | grep port</li>
                <li>Restart service: sudo systemctl restart service</li>
                <li>Check logs: journalctl -u service -n 50</li>
              </ol>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-primary" />
                Permission Issues
              </h3>
              <ol className="text-sm text-foreground/80 space-y-2 ml-7 list-decimal">
                <li>Check permissions: ls -la file</li>
                <li>Fix permissions: chmod u+x file</li>
                <li>Check ownership: ls -l | grep filename</li>
                <li>Fix ownership: sudo chown user:group file</li>
              </ol>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-primary" />
                Disk Space Issue
              </h3>
              <ol className="text-sm text-foreground/80 space-y-2 ml-7 list-decimal">
                <li>Check usage: df -h</li>
                <li>Find large files: du -sh ~/*</li>
                <li>Clean cache: sudo apt clean</li>
                <li>Remove old logs: sudo journalctl --vacuum=10M</li>
              </ol>
            </Card>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="mt-12 border-t border-border pt-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Safety Tips</h2>

          <div className="space-y-3">
            <Card className="p-4 flex gap-3 bg-accent/5 border-accent/20">
              <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Never Use rm -rf Without Thinking</h4>
                <p className="text-xs text-foreground/80">
                  Test with a small subset first. Example: rm -rf /path/subdir/[a-c]* before rm -rf /path/subdir/*
                </p>
              </div>
            </Card>

            <Card className="p-4 flex gap-3 bg-accent/5 border-accent/20">
              <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Avoid System Directories</h4>
                <p className="text-xs text-foreground/80">
                  Do not modify files in /sys, /proc, /dev, or /boot unless you know exactly what you're doing.
                </p>
              </div>
            </Card>

            <Card className="p-4 flex gap-3 bg-accent/5 border-accent/20">
              <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Use sudo Sparingly</h4>
                <p className="text-xs text-foreground/80">
                  Only use sudo when necessary. For package managers, use sudo for system-wide packages, but not for user-level packages.
                </p>
              </div>
            </Card>

            <Card className="p-4 flex gap-3 bg-accent/5 border-accent/20">
              <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Back Up Before Major Changes</h4>
                <p className="text-xs text-foreground/80">
                  Create a backup before upgrading critical systems or making major configuration changes.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 py-12 border-t border-border">
          <Link href="/errors">
            <Button variant="outline">← Error Reference</Button>
          </Link>
          <Link href="/about" className="ml-auto">
            <Button>About →</Button>
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
