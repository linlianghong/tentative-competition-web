import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    // ['title-board', ' after:(bg-gradient-to-tr from-[#D44CE4] to-[#AA55D6])'],
    ['title-board', 'inline-block w-auto text-6 border-b-3 border-solid border-#D44CE4'],
    ['article', 'leading-loose font-bold text-4'],
  ],
  theme: {
    colors: {
      primary: 'rgba(186, 54, 210, 1)',
      post: {
        title: 'rgb(33, 33, 33)',
        desc: '#999',
        text: '#666',
      },
    },
  },
  presets: [
    presetUno({

    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default as any),
      },
    }),
    presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     sans: 'DM Sans',
    //     serif: 'DM Serif Display',
    //     mono: 'DM Mono',
    //   },
    // }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})
