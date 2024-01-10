import nunjucks from 'vite-plugin-nunjucks'
import { viteSingleFile } from "vite-plugin-singlefile"

export default {
    plugins: [
        nunjucks(),
        viteSingleFile()
    ]
}