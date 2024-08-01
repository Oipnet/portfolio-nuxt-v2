import type {Config} from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    content: [
        "./app.vue",
        "./formkit.theme.ts",
        "node_modules/tailvue/dist/tailvue.es.js",
    ],
    theme: {
        extend: {
            colors: {
                black: '#081408',
                primary: '#5a8036',
                'primary-hover': '#466045',
            },
            gridTemplateColumns: {
                'header': '2fr 1fr',
            },
            fontFamily: {
                title: ['Lobster', 'sans-serif'],
                'sub-title': ['Raleway', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            }
        }
    }
}
