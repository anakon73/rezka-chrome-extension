async function injectMovieButton() {
  const titleEl = document.querySelector('[data-testid="hero__pageTitle"]')
  const yearEl = document.querySelector(
    'a.ipc-link[href*="releaseinfo"]',
  )

  if (!titleEl || !yearEl)
    return

  const title = titleEl.textContent?.trim().toLowerCase().replace(/\s+/g, '+')
  const year = yearEl.textContent?.trim()

  if (!title || !year)
    return

  const apiUrl = `${import.meta.env.VITE_BASE_URL}/${title}+${year}`

  try {
    const response = await fetch(apiUrl)
    if (!response.ok) {
      console.error('[Extension] API error', response.status)
      return
    }

    const data = await response.json()
    if (!data.url)
      return

    if (document.getElementById('my-extension-link'))
      return

    const link = document.createElement('a')
    link.id = 'my-extension-link'
    link.href = data.url
    link.target = '_blank'
    link.textContent = '🎬 Смотреть на Rezka'

    link.style.display = 'flex'
    link.style.height = '24px'
    link.style.alignItems = 'center'
    link.style.justifyContent = 'center'
    link.style.padding = '0 5px'
    link.style.backgroundColor = '#4f46e5'
    link.style.color = '#ffffff'
    link.style.borderRadius = '6px'
    link.style.fontWeight = '600'
    link.style.textDecoration = 'none'
    link.style.fontSize = '12px'
    link.style.transition = 'all 0.2s ease-in-out'
    link.style.cursor = 'pointer'

    link.addEventListener('mouseenter', () => {
      link.style.backgroundColor = '#4338ca'
      link.style.transform = 'translateY(-2px)'
    })
    link.addEventListener('mouseleave', () => {
      link.style.backgroundColor = '#4f46e5'
      link.style.transform = 'translateY(0)'
    })

    titleEl.appendChild(link)

    console.info('[Extension] Button added', data.url)
  }
  catch (err) {
    console.error('[Extension] Fetch error', err)
  }
}

injectMovieButton()
