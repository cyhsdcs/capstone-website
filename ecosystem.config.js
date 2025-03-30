module.exports = {
  apps: [{
    name: 'capstone-website',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
} 