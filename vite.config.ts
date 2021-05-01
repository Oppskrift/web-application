import { defineConfig } from 'vite';

import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [Vue(), Pages(), WindiCSS()],
});
