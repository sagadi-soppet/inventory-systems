import { html } from '@utils/html'
import { useLocation } from 'preact-iso'

export default function Sidebar() {
  const { url } = useLocation()

  return html`
    <div className="fixed top-0 left-0 w-1/4 h-full bg-gray-900 text-white">
      <nav
        class="bg-slate-900 border-b border-slate-800 px-6 py-4 hidden md:block"
      >
        <div class="max-w-4xl mx-auto flex items-center justify-between">
          <span class="font-black text-cyan-400 tracking-wider text-sm"
            >ISO // OS</span
          >
          <div class="flex gap-6 text-sm font-medium text-slate-400">
            <a
              href="/"
              class=${`hover:text-slate-200 transition ${url === '/' ? 'text-cyan-400' : ''}`}
            >
              Home
            </a>
            <a
              href="/settings"
              class=${`hover:text-slate-200 transition ${url === '/settings' ? 'text-purple-400' : ''}`}
            >
              Settings
            </a>
          </div>
        </div>
      </nav>
    </div>
  `
}
