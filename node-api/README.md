# Node API Deployment with Nginx

Deploy a Node.js API using Nginx as a reverse proxy on a Nginx server. Follow these steps to set up your project.

## Step 1: Create Node.js API Project

```bash
mkdir node-api
cd node-api
npm init -y
npm install express
```

## Step 2: Create API Script

Create a file named `api.js` in your project folder and add the following content:

```javascript
// api.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('API is running!');
});

app.get('/yc', (req, res) => {
    res.send('Yatharth Chauhan Here!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
```

## Step 3: Test the API Locally

Run the API locally to ensure it's working on http://localhost:3000:

```bash
node api.js
```

Access the API at http://localhost:3000 and http://localhost:3000/yc in your browser.

## Step 4: Set Up Nginx

Install Nginx if you haven't already:

```bash
sudo apt-get update
sudo apt-get install nginx
```

Create an Nginx configuration file for your API:

```bash
sudo nano /etc/nginx/sites-available/node-api.conf
```

Add the following configuration:

```nginx
# node-api.conf

server {
    listen 80;
    server_name 127.0.0.1;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

}
```

## Step 5: Enable Nginx Configuration

Create a symbolic link to enable the Nginx configuration:

```bash
sudo ln -s /etc/nginx/sites-available/node-api.conf /etc/nginx/sites-enabled
```

Check Nginx configuration and restart:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

## Step 6: Test Deployment

Access your API through Nginx at http://127.0.0.1:3000. Ensure that the routes http://127.0.0.1:3000/yc and others work as expected.

Now, your Node.js API is deployed using Nginx as a reverse proxy. 

## Author
- [Visit My Portfolio](https://yatharthchauhan.me)

- [LinkedIn: Yatharth Chauhan](https://www.linkedin.com/in/yatharth-chauhan-729674202/)

- [GitHub: Yatharth Chauhan](https://github.com/YatharthChauhan2362)
