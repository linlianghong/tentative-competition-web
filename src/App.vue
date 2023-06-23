<script setup lang="ts">
import type { GlobalComponentConfig, GlobalThemeOverrides } from 'naive-ui'
import 'swiper/css'
import 'swiper/css/pagination'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: '湖北省第二届微生物培养皿艺术设计大赛',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    // {
    //   name: 'theme-color',
    //   content: () => isDark.value ? '#00aba9' : '#ffffff',
    // },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: 'rgba(186, 54, 210, 1)',
  },
  Button: {
    // textColorPrimary: '#fff',
    // rippleColorPrimary: 'rgba(186, 54, 210, 1)',
    // colorFocusPrimary: 'rgba(186, 54, 210, 1)',
    // colorPressedPrimary: 'rgba(186, 54, 210, 1)',
    // colorPrimary: 'rgba(186, 54, 210, 1)',
    // colorHoverPrimary: 'rgba(186, 54, 210, 1)',
    // borderHoverPrimary: 'rgba(186, 54, 210, 1)',
    // borderFocusPrimary: 'rgba(186, 54, 210, 1)',
    // borderPressed: '#fff',
    // colorHover: 'rgba(186, 54, 210, 1)',
    // colorFocus: 'rgba(186, 54, 210, 1)',
    // colorPressed: 'rgba(186, 54, 210, 1)',
    // border: '#fff',
    borderHover: '#fff',
    borderFocus: '#fff',
    textColor: '#fff',
    textColorFocus: '"#fff',
    textColorHover: '#fff',
    textColorPressed: '#fff',
  },
}

const componentOptions: GlobalComponentConfig = {

}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides" :component-options="componentOptions">
    <RouterView />
  </n-config-provider>
</template>
