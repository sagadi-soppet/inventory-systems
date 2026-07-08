import { html } from '@utils/html'

export default function NotFound() {
  return html`
    <div class="text-center py-12">
      <h2 class="text-3xl font-black text-rose-500">404</h2>
      <p class="text-slate-400 mt-2">
        Route target missing from location register.
      </p>
    </div>
  `
}
