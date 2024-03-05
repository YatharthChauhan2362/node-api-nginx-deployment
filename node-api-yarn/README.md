# Node API Deployment with Nginx

Deploy a Node.js API using Yarn and Nginx as a reverse proxy:

## Step 1: Create Node.js API Project with Yarn

```bash
mkdir node-api-yarn
cd node-api-yarn
yarn init -y
yarn add express
```

## Step 2: Create API Script

Create a file named `app.js` in your project folder and add the following content:

```javascript
// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('API is running via Yarn!');
});

app.get('/yc', (req, res) => {
    res.send('Yatharth Chauhan Here!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
```

## Step 3: Test the API Locally

Run the API locally to ensure it's working on http://localhost:3000:

```bash
yarn start
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
sudo nano /etc/nginx/sites-available/node-api-yarn.conf
```

Add the following configuration:

```nginx
# node-api-yarn.conf

server {
    listen 80;
    server_name localhost;

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
sudo ln -s /etc/nginx/sites-available/node-api-yarn.conf /etc/nginx/sites-enabled
```

Check Nginx configuration and restart:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

## Step 6: Test Deployment

Access your API through Nginx at http://localhost. Ensure that the routes http://localhost/yc and others work as expected.

Now, your Node.js API is deployed using Yarn as the package manager and Nginx as a reverse proxy.

## Author
- [Visit My Portfolio](https://yatharthchauhan.me)

- [LinkedIn: Yatharth Chauhan](https://www.linkedin.com/in/yatharth-chauhan-729674202/)

- [GitHub: Yatharth Chauhan](https://github.com/YatharthChauhan2362)




# pm2
chmod 400 azure-key.pem
ssh -i azure-key.pem azureuser@20.193.238.205
sudo apt install -y nodejs
sudo apt install -y npm
sudo npm install -g pm2
pm2 start app.js
pm2 start 0
http://20.193.238.205:3000/