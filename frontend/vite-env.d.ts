/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_APP_TITLE: string; // Add your custom environment variables here
    // Add more variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  