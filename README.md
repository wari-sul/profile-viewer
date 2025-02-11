# GitHub Profile Views Counter

A Cloudflare Worker that powers the view counter for [wari-sul's GitHub profile](https://github.com/wari-sul/). This counter tracks and displays the number of visits to the GitHub profile using [komarev.com](https://komarev.com/)'s profile views service.

## Features

- Profile view counter display
- View count increment functionality
- No-cache implementation for accurate counting
- Deployed on Cloudflare's global network

## Endpoints

1. **Main Counter Endpoint**: `https://your-worker.workers.dev/`
   - Displays the profile view counter badge
   - Use this URL in your GitHub README.md

2. **Increment Views Endpoint**: `https://your-worker.workers.dev/increment?count=NUMBER`
   - Increases the view count by specified number
   - Maximum 100 views per request
   - Example: `/increment?count=50` increases views by 50

## Usage

### Display Counter
Add this to your GitHub profile README.md:
```markdown
![Profile Views](https://your-worker.workers.dev/)
```

### Increment Views
Make a GET request to:
```
https://your-worker.workers.dev/increment?count=50
```

## Deployment

1. Install dependencies:
```bash
npm install
```

2. Login to Cloudflare:
```bash
npx wrangler login
```

3. Deploy the worker:
```bash
npm run deploy
```

After deployment, replace `your-worker.workers.dev` in the examples above with the actual URL provided by Cloudflare.

## Note

Please use the increment feature responsibly. The counter is rate-limited to prevent abuse.
