module.exports = {
    apps: [{
      name: 'tutorial-2',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-219-193-201.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/FEC.pem',
        ref: 'origin/master',
        repo: 'https://github.com/axe-center/JL-test',
        path: '/home/ubuntu/tutorial-2',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }