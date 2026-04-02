/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PAYSTACK_LINK: string
  readonly VITE_FLUTTERWAVE_LINK: string
  readonly VITE_AMAZON_LINK: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
