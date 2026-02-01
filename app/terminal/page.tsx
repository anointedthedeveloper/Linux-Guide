'use client'

import React from "react"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronDown, Copy, AlertCircle, CheckCircle } from 'lucide-react'
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

export default function TerminalGuide() {
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
          <h1 className="text-4xl font-bold mb-4 text-primary">Terminal & Shell Basics</h1>
          <p className="text-lg text-foreground/80">
            Master the command line with Bash, Zsh, and essential shell concepts.
          </p>
        </div>

        {/* Table of Contents */}
        <Card className="p-6 mb-12 bg-primary/5 border-primary/20">
          <h2 className="font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#shells-overview" className="text-primary hover:underline">
                1. Shells Overview
              </a>
            </li>
            <li>
              <a href="#navigating" className="text-primary hover:underline">
                2. Navigating the Filesystem
              </a>
            </li>
            <li>
              <a href="#files-directories" className="text-primary hover:underline">
                3. Working with Files & Directories
              </a>
            </li>
            <li>
              <a href="#permissions" className="text-primary hover:underline">
                4. File Permissions
              </a>
            </li>
            <li>
              <a href="#redirects-pipes" className="text-primary hover:underline">
                5. Redirects & Pipelines
              </a>
            </li>
            <li>
              <a href="#advanced" className="text-primary hover:underline">
                6. Advanced Shell Features
              </a>
            </li>
            <li>
              <a href="#shell-safety" className="text-primary hover:underline">
                7. Shell Safety
              </a>
            </li>
          </ul>
        </Card>

        {/* Shells Overview */}
        <section id="shells-overview" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">1. Shells Overview</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Common Shells</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-mono text-sm font-bold text-primary">Bash (Bourne Again Shell)</p>
                  <p className="text-foreground/80 text-sm">
                    Most common shell on Linux. Default on most distributions. Good for scripting and general use.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-sm font-bold text-primary">Zsh</p>
                  <p className="text-foreground/80 text-sm">
                    Modern shell with advanced features. Popular with developers. Better autocomplete and themes.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-sm font-bold text-primary">Fish</p>
                  <p className="text-foreground/80 text-sm">
                    User-friendly shell with great defaults. Excellent for beginners. Different syntax than Bash/Zsh.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-sm font-bold text-primary">sh (POSIX Shell)</p>
                  <p className="text-foreground/80 text-sm">
                    Minimal shell adhering to POSIX standards. Used for system scripts and portability.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Check and Change Shell</h3>
              <CodeBlock code="# Check current shell
echo $SHELL

# List available shells
cat /etc/shells

# Change shell to bash
chsh -s /bin/bash

# Change shell to zsh
chsh -s /bin/zsh

# Start different shell temporarily
zsh
bash
fish" />
            </Card>
          </div>
        </section>

        {/* Navigating */}
        <section id="navigating" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">2. Navigating the Filesystem</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Essential Navigation Commands</h3>
              <CodeBlock code="# Print current directory
pwd

# List directory contents
ls
ls -l  # Long format with details
ls -la # Include hidden files
ls -lh # Human-readable sizes

# Change directory
cd /path/to/directory
cd ~   # Go to home directory
cd -   # Go to previous directory
cd ..  # Go to parent directory

# Show directory tree
tree
tree -L 2  # Limit depth to 2 levels" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Useful Navigation Shortcuts</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-foreground/5 p-4 rounded">
                  <p className="font-mono font-bold text-primary mb-2">~</p>
                  <p className="text-foreground/80">Home directory</p>
                </div>
                <div className="bg-foreground/5 p-4 rounded">
                  <p className="font-mono font-bold text-primary mb-2">.</p>
                  <p className="text-foreground/80">Current directory</p>
                </div>
                <div className="bg-foreground/5 p-4 rounded">
                  <p className="font-mono font-bold text-primary mb-2">..</p>
                  <p className="text-foreground/80">Parent directory</p>
                </div>
                <div className="bg-foreground/5 p-4 rounded">
                  <p className="font-mono font-bold text-primary mb-2">/</p>
                  <p className="text-foreground/80">Root directory</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Files & Directories */}
        <section id="files-directories" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">3. Working with Files & Directories</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Creating and Removing</h3>
              <CodeBlock code="# Create directory
mkdir directory_name
mkdir -p path/to/nested/directory  # Create parent directories

# Create file (empty)
touch file.txt

# Remove file
rm file.txt

# Remove directory (empty)
rmdir directory_name

# Remove directory with contents
rm -r directory_name
rm -rf directory_name  # Force remove" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Copying and Moving</h3>
              <CodeBlock code="# Copy file
cp source.txt destination.txt

# Copy directory
cp -r source_dir destination_dir

# Move or rename
mv old_name.txt new_name.txt
mv file.txt /path/to/destination/

# Move multiple files
mv file1.txt file2.txt file3.txt /destination/" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Viewing File Contents</h3>
              <CodeBlock code="# View entire file
cat file.txt

# View with line numbers
cat -n file.txt

# View in pager (paginated)
less file.txt
more file.txt

# View first/last lines
head file.txt     # First 10 lines
head -n 20 file.txt
tail file.txt     # Last 10 lines
tail -f log.txt   # Follow file changes in real-time" />
            </Card>
          </div>
        </section>

        {/* Permissions */}
        <section id="permissions" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">4. File Permissions</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Understanding Permissions</h3>
              <CodeBlock code="# View permissions
ls -l file.txt

# Output: -rw-r--r-- 1 user group 1234 Jan 1 12:00 file.txt
# Breakdown:
# -       = type (- = file, d = directory, l = symlink)
# rw-     = owner permissions (read, write, execute)
# r--     = group permissions
# r--     = others permissions

# Permission values:
# r (read)    = 4
# w (write)   = 2
# x (execute) = 1" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Changing Permissions</h3>
              <CodeBlock code="# Symbolic notation
chmod u+x file.txt        # Add execute for user
chmod g+w file.txt        # Add write for group
chmod o-r file.txt        # Remove read for others
chmod a+r file.txt        # Add read for all

# Numeric notation
chmod 644 file.txt        # rw-r--r-- (readable by all, writable by owner)
chmod 755 script.sh       # rwxr-xr-x (executable script)
chmod 600 secret.txt      # rw------- (only owner can access)

# Recursive for directories
chmod -R 755 directory/" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Changing Ownership</h3>
              <CodeBlock code="# Change owner
sudo chown newuser file.txt

# Change group
sudo chown :newgroup file.txt

# Change both
sudo chown newuser:newgroup file.txt

# Recursive
sudo chown -R user:group directory/" />
            </Card>
          </div>
        </section>

        {/* Redirects & Pipes */}
        <section id="redirects-pipes" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">5. Redirects & Pipelines</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Output Redirection</h3>
              <CodeBlock code="# Redirect stdout to file (overwrite)
command > output.txt

# Redirect stdout to file (append)
command >> output.txt

# Redirect stderr to file
command 2> error.txt

# Redirect both stdout and stderr
command > output.txt 2>&1
command &> output.txt

# Discard output
command > /dev/null
command 2> /dev/null" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Input Redirection</h3>
              <CodeBlock code="# Read input from file
command < input.txt

# Here document (multi-line input)
cat << EOF
This is line 1
This is line 2
EOF" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Pipelines</h3>
              <CodeBlock code="# Pipe output of one command as input to another
ls | grep .txt

# Multiple pipes
cat file.txt | grep pattern | sort | uniq

# Common pipeline commands
cat file.txt | grep 'pattern'       # Filter lines
ps aux | grep process_name          # Find process
ls -lh | sort -k5 -h               # Sort by file size
du -sh * | sort -rh                # Largest directories" />
            </Card>
          </div>
        </section>

        {/* Advanced Shell Features */}
        <section id="advanced" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">6. Advanced Shell Features</h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Variables</h3>
              <CodeBlock code="# Set variable
VARIABLE_NAME='value'
MY_PATH=/usr/local/bin

# Use variable
echo $VARIABLE_NAME
echo ${VARIABLE_NAME}

# List all variables
env

# Environment variables (available to all processes)
export MY_VAR='value'" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Command Substitution</h3>
              <CodeBlock code="# Using backticks (older syntax)
echo 'Current date: '$(date)

# Using $() (modern syntax - preferred)
echo 'Current date: '$(date)

# Practical examples
CURRENT_DATE=$(date +%Y-%m-%d)
DIRECTORY_COUNT=$(ls -1 | wc -l)" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Wildcards and Globbing</h3>
              <CodeBlock code="# * matches any characters
ls *.txt        # All txt files
rm *.log        # Remove all log files

# ? matches single character
ls file?.txt    # file1.txt, fileA.txt, etc

# [...] matches any character in brackets
ls file[1-3].txt    # file1.txt, file2.txt, file3.txt
ls file[abc].txt    # filea.txt, fileb.txt, filec.txt

# [!...] matches characters NOT in brackets
ls file[!0].txt     # All except file0.txt" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Command History</h3>
              <CodeBlock code="# View history
history

# Run previous command
!!

# Run command from history
!number

# Search history (Ctrl+R in most shells)
Ctrl+R

# Clear history
history -c" />
            </Card>
          </div>
        </section>

        {/* Shell Safety */}
        <section id="shell-safety" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">7. Shell Safety</h2>

          <div className="space-y-4">
            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-3">Dangerous Commands to Avoid</h4>
                  <div className="space-y-2 text-sm text-foreground/80">
                    <p>
                      <span className="font-mono bg-destructive/10 px-2 py-1 rounded">rm -rf /</span> - Deletes entire
                      system
                    </p>
                    <p>
                      <span className="font-mono bg-destructive/10 px-2 py-1 rounded">dd if=/dev/random of=/dev/sda</span> -
                      Overwrites disk
                    </p>
                    <p>
                      <span className="font-mono bg-destructive/10 px-2 py-1 rounded">forkbomb</span> - Fork bomb that
                      crashes system
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Safe Practices</h3>
              <CodeBlock code="# Always test before executing
# Use --dry-run if available
rsync --dry-run -av source/ dest/

# Double-check variables in destructive commands
rm -i file.txt          # Interactive, ask before delete

# Use long options for clarity
rm --interactive file.txt
cp --recursive --verbose source/ dest/

# Test with a small subset first
# Bad: rm -rf /path/to/large/directory
# Good: rm -rf /path/to/large/directory/*[1-3]    # test first
#       rm -rf /path/to/large/directory/           # then full run" />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Useful Safety Tools</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-mono text-sm font-bold text-primary">set -e</p>
                  <p className="text-foreground/80 text-sm">
                    In shell scripts, exit immediately if any command fails
                  </p>
                </div>
                <div>
                  <p className="font-mono text-sm font-bold text-primary">set -u</p>
                  <p className="text-foreground/80 text-sm">
                    Exit if any variable is undefined
                  </p>
                </div>
                <div>
                  <p className="font-mono text-sm font-bold text-primary">shellcheck</p>
                  <p className="text-foreground/80 text-sm">
                    Lint shell scripts to find bugs and issues
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 py-12 border-t border-border">
          <Link href="/installation">
            <Button variant="outline">← Installation Guide</Button>
          </Link>
          <Link href="/errors" className="ml-auto">
            <Button>Next: Error Reference →</Button>
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
