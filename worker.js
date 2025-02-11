addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // Check if it's a request to increment views
  if (url.pathname === '/increment') {
    const count = parseInt(url.searchParams.get('count')) || 10
    const maxCount = Math.min(count, 100) // Limit to 100 per request for safety
    
    try {
      // Make multiple requests to increment views
      const promises = Array.from({ length: maxCount }, () =>
        fetch(`https://komarev.com/ghpvc/?username=wari-sul&label=Profile%20views&color=0e75b6&style=flat`, {
          headers: { 'Cache-Control': 'no-cache' }
        })
      )
      
      await Promise.all(promises)
      return new Response(`Increased view count by ${maxCount}`, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      })
    } catch (error) {
      return new Response('Error incrementing views', { status: 500 })
    }
  }

  // Regular view counter endpoint
  try {
    const response = await fetch(`https://komarev.com/ghpvc/?username=wari-sul&label=Profile%20views&color=0e75b6&style=flat`)
    const newResponse = new Response(response.body, response)
    newResponse.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    newResponse.headers.set('Pragma', 'no-cache')
    newResponse.headers.set('Expires', '0')
    return newResponse
  } catch (error) {
    return new Response('Error fetching profile views', { status: 500 })
  }
}
