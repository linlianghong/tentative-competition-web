import type { Router } from 'vue-router'

import { type UserModule } from '~/types'

// eslint-disable-next-line import/no-mutable-exports
let router: Router

export const install: UserModule = ({ router: r }) => {
  router = r
}

export { router }
