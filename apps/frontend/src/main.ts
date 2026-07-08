import { h, render } from 'preact'
import { html } from '@utils/html'
import { LocationProvider, Router, useLocation } from 'preact-iso'
import './style.css'

import Sidebar from '@components/Sidebar'
import Home from '@pages/Home'
import Settings from '@pages/Settings'
import ItemDetails from '@pages/ItemDetails'
import NotFound from '@pages/Errors/NotFound'

// Move your UI layout here so it safely lives UNDER the LocationProvider
function AppLayout() {
  const { route } = useLocation()

  // Simple programmatic navigation handler example
  const navigateTo = (path: string, e: MouseEvent): void => {
    e.preventDefault()
    route(path)
  }

  return html`
      <div class="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased flex flex-col">
        ${Sidebar()}

        <main class="flex-1 max-w-4xl w-full mx-auto p-6 sm:p-12">
          <${Router}>
            <${Home} path="/" />
            <${Settings} path="/settings" />
            <${ItemDetails} path="/items/:id" />
            <${NotFound} default />
          </${Router}>
        </main>
      </div>
    `
}

// App simply provides the context now
function App() {
  return html`
    <${LocationProvider}>
      <${AppLayout} />
    </${LocationProvider}>
  `
}

// Root Injection Wrapper
const rootElement = document.getElementById('app')
if (rootElement) {
  render(html`<${App} />`, rootElement)
}
