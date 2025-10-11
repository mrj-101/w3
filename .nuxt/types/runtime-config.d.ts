import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },
  }
  interface SharedPublicRuntimeConfig {
   aos: {
      disable: boolean,

      startEvent: string,

      initClassName: string,

      animatedClassName: string,

      useClassNames: boolean,

      disableMutationObserver: boolean,

      debounceDelay: number,

      throttleDelay: number,

      offset: number,

      delay: number,

      duration: number,

      easing: string,

      once: boolean,

      mirror: boolean,

      anchorPlacement: string,
   },
  }
declare module '@nuxt/schema' {
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }