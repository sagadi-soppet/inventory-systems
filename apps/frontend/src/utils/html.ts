import { h } from 'preact'
import htm from 'htm'

// A single, centralized source of truth for your UI compiler
export const html = htm.bind(h)
