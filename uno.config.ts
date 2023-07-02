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
    ['btn', 'text-center inline-block cursor-pointer rounded-10px border-1 border-primary border-solid min-h-30px w-14vw text-primary text-14px py-1/150vw transition-all transition-300 hover:(text-white bg-primary) lt-lg:(w-25vw)'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    // ['title-board', ' after:(bg-gradient-to-tr from-[#D44CE4] to-[#AA55D6])'],
    ['title-board', 'inline-block w-auto text-6 border-b-3 border-solid border-#D44CE4'],
    ['article', 'leading-42px font-normal! text-20px indent-2em'],
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
