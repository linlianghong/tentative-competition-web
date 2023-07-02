import type { InjectionKey } from 'vue'

const APPLY_PREVIEW_KEY: InjectionKey<Ref<boolean>> = Symbol.for('APPLY_PREVIEW_KEY')

export function providerApplyPreview(val: Ref<boolean>) {
  provide(APPLY_PREVIEW_KEY, val)
}

export function injectApplyPreview() {
  return inject(APPLY_PREVIEW_KEY)
}
