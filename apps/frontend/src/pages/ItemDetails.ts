import { html } from '@utils/html'

interface ItemDetailsProps {
  id: string // preact-iso injects URL parameters directly as props
}

export default function ItemDetails({ id }: ItemDetailsProps) {
  return html`
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-slate-100">Inspecting ID Matrix</h2>
      <div
        class="bg-slate-900 p-4 border border-slate-800 rounded-lg text-sm text-cyan-400 font-mono"
      >
        Active Route ID: ${id}
      </div>
    </div>
  `
}
