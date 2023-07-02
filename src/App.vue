<script setup lang="ts">
import type { GlobalComponentConfig, GlobalThemeOverrides } from 'naive-ui'
import 'swiper/css'
import 'swiper/css/pagination'
import { dateZhCN, zhCN } from 'naive-ui'

try {
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
}
catch (error) {

}

const store = useTeamInfoStore()

const loaded = ref(false)

store.updateBasicInfo().finally(() => loaded.value = true)

store.updateTeamInfo()

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
      href: () => '/favicon.png',
    },
  ],
})

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: 'rgba(186, 54, 210, 1)',
  },
  Button: {
    borderPressed: 'rgba(186, 54, 210, .8)',
    // colorPrimary: 'linear-gradient(#D44CE4 1%, #AA55D6 100%)',
    colorHoverPrimary: 'rgba(186, 54, 210, .8)',
    colorFocusPrimary: 'rgba(186, 54, 210, .8)',
    colorPressedPrimary: 'rgba(186, 54, 210, .8)',
    // borderPrimary: 'rgba(186, 54, 210, .8)',
    borderHoverPrimary: 'rgba(186, 54, 210, .8)',
    borderFocusPrimary: 'rgba(186, 54, 210, .8)',
    borderPressedPrimary: 'rgba(186, 54, 210, .8)',
    // textColorPrimary: 'rgba(186, 54, 210, 1)',
    textColorTextHoverPrimary: 'rgba(186, 54, 210, .8)',
    textColorTextFocusPrimary: 'rgba(186, 54, 210, .8)',
    textColorGhostPrimary: 'rgba(186, 54, 210, 1)',
    textColorGhostHoverPrimary: 'rgba(186, 54, 210, .8)',
    textColorGhostFocusPrimary: 'rgba(186, 54, 210, .8)',
    textColorGhostPressedPrimary: 'rgba(186, 54, 210, .8)',
    // textColorText: 'rgba(186, 54, 210, 1)',
    textColorTextHover: 'rgba(186, 54, 210, .8)',
    textColorTextPressed: 'rgba(186, 54, 210, .8)',
    textColorTextFocus: 'rgba(186, 54, 210, .8)',

    // default
    borderHover: 'rgba(186, 54, 210, .8)',
    textColorHover: 'rgba(186, 54, 210, .8)',
    textColorFocus: 'rgba(186, 54, 210, .8)',
    textColorPressed: 'rgba(186, 54, 210, .8)',
    borderColorHover: 'rgba(186, 54, 210, .8)',
    borderColorFocus: 'rgba(186, 54, 210, .8)',
    borderColorPressed: 'rgba(186, 54, 210, .8)',

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
    // borderHover: '#fff',
    // borderFocus: '#fff',
    // textColor: '#fff',
    // textColorFocus: '"#fff',
    // textColorHover: '#fff',
    // textColorPressed: '#fff',
  },
  Input: {
    // border: 'rgba(186, 54, 210, 1)',
    borderHover: 'rgba(186, 54, 210, .8)',
    borderFocus: 'rgba(186, 54, 210, .8)',
  },
  Select: {

  },
  InternalSelection: {
    borderHover: 'rgba(186, 54, 210, .8)',
    borderFocus: 'rgba(186, 54, 210, .8)',
    borderPressed: 'rgba(186, 54, 210, .8)',
  },
}

const componentOptions: GlobalComponentConfig = {

}
</script>

<template>
  <n-config-provider v-if="loaded" :theme-overrides="themeOverrides" :component-options="componentOptions" :locale="zhCN" :date-locale="dateZhCN">
    <n-dialog-provider>
      <n-message-provider>
        <RouterView />
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>
