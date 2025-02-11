addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  try {
    const response = await fetch(`https://komarev.com/ghpvc/?username=wari-sul&label=Profile%20views&color=0e75b6&style=flat`)
    // Clone the response and modify headers to prevent caching
    const newResponse = new Response(response.body, response)
    newResponse.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    newResponse.headers.set('Pragma', 'no-cache')
    newResponse.headers.set('Expires', '0')
    return newResponse
  } catch (error) {
    return new Response('Error fetching profile views', { status: 500 })
  }
}
