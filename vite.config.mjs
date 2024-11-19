/* eslint-env node */
import { defineBaseConfig } from '@padcom/vite-config-default'
import { defineVueBaseConfig } from '@padcom/vite-config-vue'
import zip from 'vite-plugin-zip-pack'
import pkg from './package.json' with { type: 'json' }

export default defineBaseConfig(pkg, defineVueBaseConfig({
  plugins: [
    zip({ outDir: '.', outFileName: 'website.zip' }),
  ],
}))
