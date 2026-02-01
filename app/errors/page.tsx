'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronDown, Copy, AlertCircle, CheckCircle, Search } from 'lucide-react'
import { useState, useMemo } from 'react'

interface ErrorEntry {
  error: string
  meaning: string
  causes: string[]
  solution: string
  example?: string
}

const errorDatabase: ErrorEntry[] = [
  {
    error: 'command not found',
    meaning: 'The command you tried to execute does not exist or is not in your PATH.',
    causes: [
      'Typo in command name',
      'Program not installed',
      'Program not in PATH',
      'Using wrong shell syntax',
    ],
    solution: `1. Verify the correct command name:
   which git
   
2. If command doesn't exist, install it:
   sudo apt install package-name
   
3. Check if it's in PATH:
   echo $PATH
   
4. Add to PATH if necessary:
   export PATH=/path/to/binary:$PATH`,
    example: 'bash: gitt: command not found',
  },
  {
    error: 'Permission denied',
    meaning: 'You do not have the required permissions to execute the file or access the resource.',
    causes: [
      'File is not executable',
      'Insufficient user permissions',
      'Directory permission issue',
      'Sudo required but not used',
    ],
    solution: `1. Make file executable:
   chmod +x script.sh
   
2. Check file permissions:
   ls -l file.txt
   
3. Use sudo if needed:
   sudo command
   
4. Change ownership if necessary:
   sudo chown user:group file.txt`,
    example: 'bash: ./script.sh: Permission denied',
  },
  {
    error: 'cannot open shared object file',
    meaning: 'A required shared library (.so file) cannot be found by the linker.',
    causes: [
      'Missing library dependency',
      'Library not in LD_LIBRARY_PATH',
      'Incompatible architecture (32-bit vs 64-bit)',
      'Library compiled for different Linux version',
    ],
    solution: `1. Find the missing library:
   ldd ./program
   
2. Install missing dependencies:
   sudo apt install libname-dev
   
3. Set LD_LIBRARY_PATH temporarily:
   export LD_LIBRARY_PATH=/path/to/lib:$LD_LIBRARY_PATH
   ./program
   
4. Check library dependencies:
   objdump -p ./program | grep NEEDED`,
    example: 'error while loading shared libraries: libssl.so.1.1: cannot open shared object file',
  },
  {
    error: 'broken package / unmet dependencies',
    meaning: 'A package requires other packages that are not installed or cannot be satisfied.',
    causes: [
      'Incomplete installation',
      'Repository mismatch',
      'Conflicting package versions',
      'Interrupted package manager',
    ],
    solution: `1. Fix broken packages (Ubuntu/Debian):
   sudo apt --fix-broken install
   sudo apt autoclean
   sudo apt autoremove
   
2. For Fedora/RedHat:
   sudo dnf install --best --allowerasing
   
3. Update package lists:
   sudo apt update
   sudo apt upgrade
   
4. As last resort, remove and reinstall:
   sudo apt remove package-name
   sudo apt install package-name`,
    example: 'Some packages could not be installed. This may mean that you have requested an impossible situation.',
  },
  {
    error: 'No such file or directory',
    meaning: 'The file or directory you referenced does not exist.',
    causes: [
      'Typo in file path',
      'File was deleted',
      'Working in wrong directory',
      'Relative vs absolute path confusion',
    ],
    solution: `1. Verify file exists:
   ls -la /path/to/file
   
2. Check current directory:
   pwd
   
3. Find the file:
   find ~ -name "filename"
   
4. Use absolute path:
   /absolute/path/to/file
   (not ./relative/path)`,
    example: 'No such file or directory: /home/user/nofile.txt',
  },
  {
    error: 'Operation not permitted',
    meaning: 'The operation you attempted is not allowed by the system or file permissions.',
    causes: [
      'Insufficient permissions for operation',
      'File is in read-only filesystem',
      'Directory has restricted permissions',
      'System restrictions',
    ],
    solution: `1. Check file permissions:
   ls -ld directory/
   
2. Fix permissions:
   chmod u+w file.txt
   
3. Check filesystem status:
   mount | grep -i read-only
   
4. Use sudo if appropriate:
   sudo command`,
    example: 'Operation not permitted',
  },
  {
    error: 'disk quota exceeded',
    meaning: 'You have exceeded your disk storage limit or inode quota.',
    causes: [
      'Home directory full',
      'Partition full',
      'Too many files created',
      'Large files in temporary directories',
    ],
    solution: `1. Check disk usage:
   df -h
   du -sh ~/
   
2. Find large files:
   du -sh ~/* | sort -rh
   
3. Clean temporary files:
   rm -rf ~/.cache/*
   rm -rf /tmp/*
   
4. Remove old logs:
   sudo journalctl --vacuum=1w
   
5. Check quota:
   quota -s`,
    example: 'disk quota exceeded',
  },
  {
    error: 'connection refused',
    meaning: 'The connection to a server or service was actively refused.',
    causes: [
      'Service not running',
      'Wrong port number',
      'Firewall blocking connection',
      'Service not listening on interface',
    ],
    solution: `1. Check if service is running:
   sudo systemctl status service-name
   
2. Start the service:
   sudo systemctl start service-name
   
3. Check port is listening:
   sudo netstat -tlnp | grep :port
   
4. Check firewall:
   sudo iptables -L
   
5. Verify correct host/port:
   telnet localhost 8080`,
    example: 'Connection refused',
  },
  {
    error: 'Syntax error near unexpected token',
    meaning: 'Your shell script has incorrect syntax that the shell cannot parse.',
    causes: [
      'Missing or mismatched quotes',
      'Missing colon in if statement',
      'Incorrect bracket nesting',
      'Using wrong shell',
    ],
    solution: `1. Check script syntax:
   bash -n script.sh
   
2. Use shellcheck to find errors:
   shellcheck script.sh
   
3. Common mistakes:
   - if [ $var = "test" ]; then (missing then)
   - echo "text  (missing closing quote)
   - if [ ... ] { (should be ; then)
   
4. Run with debug mode:
   bash -x script.sh`,
    example: 'script.sh: line 5: syntax error: unexpected end of file',
  },
  {
    error: 'No space left on device',
    meaning: 'The partition is completely full and no more data can be written.',
    causes: [
      'Partition full (100% usage)',
      'Inode table full',
      'Log files consuming space',
      'Large temporary files',
    ],
    solution: `1. Check disk usage:
   df -h
   df -i
   
2. Find and remove large files:
   find / -type f -size +1G 2>/dev/null
   
3. Clear package cache:
   sudo apt clean
   
4. Remove log files:
   sudo journalctl --vacuum=10M
   sudo rm -f /var/log/*.log
   
5. Check /tmp and /var/tmp:
   du -sh /tmp /var/tmp`,
    example: 'No space left on device',
  },
]

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default function ErrorsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedError, setExpandedError] = useState<number | null>(0)

  const filteredErrors = useMemo(() => {
    if (!searchTerm) return errorDatabase

    const term = searchTerm.toLowerCase()
    return errorDatabase.filter(
      (entry) =>
        entry.error.toLowerCase().includes(term) ||
        entry.meaning.toLowerCase().includes(term) ||
        entry.causes.some((c) => c.toLowerCase().includes(term))
    )
  }, [searchTerm])

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
          <h1 className="text-4xl font-bold mb-4 text-primary">Common Linux Errors Reference</h1>
          <p className="text-lg text-foreground/80">
            Searchable lookup for common Linux errors with explanations and solutions.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              placeholder="Search errors..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setExpandedError(null)
              }}
              className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {searchTerm && (
            <p className="text-sm text-foreground/60 mt-2">
              Found {filteredErrors.length} error{filteredErrors.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Error List */}
        <div className="space-y-3">
          {filteredErrors.length > 0 ? (
            filteredErrors.map((entry, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden bg-card hover:bg-muted transition">
                <button
                  onClick={() => setExpandedError(expandedError === index ? null : index)}
                  className="w-full px-6 py-4 flex items-start justify-between text-left"
                >
                  <div className="flex-1">
                    <h3 className="font-mono font-bold text-primary mb-1">{entry.error}</h3>
                    <p className="text-sm text-foreground/70">{entry.meaning}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 ml-4 transition-transform ${
                      expandedError === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedError === index && (
                  <div className="px-6 py-4 bg-background border-t border-border space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-accent" />
                        Common Causes
                      </h4>
                      <ul className="space-y-1 text-sm text-foreground/80 ml-6">
                        {entry.causes.map((cause, idx) => (
                          <li key={idx}>• {cause}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        Solution
                      </h4>
                      <CodeBlock code={entry.solution} />
                    </div>

                    {entry.example && (
                      <div>
                        <h4 className="font-semibold mb-2">Example</h4>
                        <div className="font-mono text-sm bg-foreground/5 p-3 rounded border border-border text-destructive">
                          $ {entry.example}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <Card className="p-8 text-center">
              <AlertCircle className="w-12 h-12 text-foreground/40 mx-auto mb-4" />
              <p className="text-foreground/60">No errors found matching your search.</p>
            </Card>
          )}
        </div>

        {/* General Tips */}
        <section className="mt-16 border-t border-border pt-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">General Troubleshooting Tips</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-3">Read the Full Error</h3>
              <p className="text-sm text-foreground/80">
                Error messages often contain the exact line number and context. Always read the complete message, not just the first line.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3">Check Logs</h3>
              <p className="text-sm text-foreground/80">
                System logs provide detailed information. Check `/var/log/` or use `journalctl` for system service logs.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3">Verify Permissions</h3>
              <p className="text-sm text-foreground/80">
                Many errors are permission-related. Use `ls -l` to check file permissions and `whoami` to check current user.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3">Search Online</h3>
              <p className="text-sm text-foreground/80">
                Search the exact error message online. Often others have solved the same problem and documented the solution.
              </p>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 py-12 border-t border-border">
          <Link href="/terminal">
            <Button variant="outline">← Terminal Basics</Button>
          </Link>
          <Link href="/troubleshooting" className="ml-auto">
            <Button>Next: Troubleshooting →</Button>
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
