<script setup lang="ts">
import dividerImg from '~/assets/common/divider.png'
import qrcode from '~/assets/common/qrcode.png'

// import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

// const { t, locale } = useI18n()

// async function toggleLocales() {
//   // change to some real logic
//   const locales = availableLocales
//   const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
//   await loadLanguageAsync(newLocale)
//   locale.value = newLocale
// }
</script>

<template>
  <nav flex="~ gap-6 justify-center lt-lg:col" p="x-1/10 t-2vw b-2vw" bg="#0C1E2F" text="#fff 18px">
    <div flex="~ 1 col">
      <div>湖北省微生物培养皿艺术设计大赛 <span>组委会</span></div>

      <img w-full py-6 :src="dividerImg">

      <div flex="~ items-center gap-6 wrap" whitespace-nowrap>
        <div flex="inline items-center mr-4">
          <div class="i-carbon:user-filled mr-2 inline-block" /> 刘莉、王庆鲁
        </div>
        <div flex="inline items-center mr-4">
          <div class="i-carbon:phone-filled mr-2 inline-block" />027-87287308
        </div>
        <div flex="inline items-center mr-4">
          <div class="i-carbon:email mr-2 inline-block" />hbwsw2022@163.com
        </div>
      </div>
    </div>
    <div flex="~ 1 justify-center col items-center">
      <n-image p="1" width="118" w-118px object="contain" :src="qrcode" />
      <div m="t-4 ">
        扫码加入赛事官方QQ群
      </div>
    </div>
  </nav>
</template>
