# Node.js App Deployment on EC2 using PM2

This guide will walk you through the steps to deploy a Node.js application on an Amazon EC2 instance/Azure Virtual Machine using PM2 as the process manager.

## Prerequisites

- Amazon EC2 instance running a Linux-based operating system
- Node.js and npm installed on the EC2 instance
- An SSH key pair for connecting to the EC2 instance
- PM2 installed globally on the EC2 instance

## Step 1: Connect to the EC2 Instance

```bash
chmod 400 your-key.pem
ssh -i your-key.pem ec2-user@your-ec2-instance-ip
```

Replace `your-key.pem` with the path to your private key and `your-ec2-instance-ip` with the actual IP address of your EC2 instance.

## Step 2: Install Node.js and npm

```bash
sudo yum install -y nodejs
sudo yum install -y npm
```

## Step 3: Install PM2

```bash
sudo npm install -g pm2
```

## Step 4: Deploy Your Node.js App

Navigate to your app directory and start your Node.js app using PM2.

```bash
pm2 start app.js
```

If your app is the first process to be started, use the following command to start it with index 0.

```bash
pm2 start 0
```

## Step 5: Access Your Node.js App

Visit your app in a web browser using your EC2 instance's public IP address and the specified port.

```bash
http://your-ec2-instance-ip:3000/
```

Replace `your-ec2-instance-ip` with the actual IP address of your EC2 instance.

## Additional PM2 Commands

- To view running processes: `pm2 list`
- To stop a process: `pm2 stop <app_name_or_id>`
- To restart a process: `pm2 restart <app_name_or_id>`
- To view logs: `pm2 logs`
- For more PM2 commands, refer to the [official documentation](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/).

## Author

- [Visit My Portfolio](https://yatharthchauhan.me)

- [LinkedIn: Yatharth Chauhan](https://www.linkedin.com/in/yatharth-chauhan-729674202/)

- [GitHub: Yatharth Chauhan](https://github.com/YatharthChauhan2362)