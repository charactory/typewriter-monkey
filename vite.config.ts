import nunjucks from 'vite-plugin-nunjucks'
import { viteSingleFile } from "vite-plugin-singlefile"
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default {
    build: {
        minify: true,
      },
    plugins: [
        nunjucks(),
        viteSingleFile(),
        // ViteMinifyPlugin({}),
    ]
}