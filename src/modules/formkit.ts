import { defaultConfig, plugin } from '@formkit/vue'
import type { UserModule } from '~/types'

export const install: UserModule = ({ isClient, app }) => {
  if (isClient)
    app.use(plugin, defaultConfig)
}
