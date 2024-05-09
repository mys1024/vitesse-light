export const useAppStore = defineStore('app', () => {
  // theme
  const dark = useDark()
  const toggleDark = useToggle(dark)
  const preferredDark = usePreferredDark()

  watchEffect(() => {
    document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    )!.content = dark.value ? '#00aba9' : '#ffffff'
    document.querySelector<HTMLLinkElement>(
      'link[rel="icon"][type="image/svg+xml"]',
    )!.href = preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'
  })

  // i18n
  const { locale, availableLocales } = useI18n()

  function toggleLocales() {
    const localeIndex = availableLocales.indexOf(locale.value)
    const nextIndex = (localeIndex + 1) % availableLocales.length
    locale.value = availableLocales[nextIndex]
  }

  return {
    dark,
    toggleDark,
    toggleLocales,
  }
})
