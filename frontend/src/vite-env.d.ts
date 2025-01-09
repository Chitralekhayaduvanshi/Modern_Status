/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_AUTH0_DOMAIN: string
  readonly VITE_AUTH0_CLIENT_ID: string
  // Add other env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 