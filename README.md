Websocket is Updating a value or display, without having to refresh the web page or application. Websocket is not only for websites, but can also be used on desktops or mobile applications. So in the gateway/php or xrunrnapp system when new data comes in such as making a transfer, the wallet balance data will automatically increase or decrease. Without us having to refresh the application. This websocket is two-way or full duplex. Using a websocket website does not have to use SSL, but it would be better if the website uses SSL to be more secure from request or response tapping. The code for http is `ws://example.com/socket` while for https is `wss://example.com/socket`. Websocket can be used in several applications such as chat applications, online games, financial applications, and the internet of things (IoT)

# Getting Started

For running the sample websocket project

## Step 1: Clone this repo

Open your terminal or command prompt, and typing this command `git clone https://github.com/bi-brilliant/xrun-websocket.git`

## Step 2: Move directory

And then typing this command `cd xrun-websocket`

## Step 3: Run the project

After that, you must install some dependencies first with command `npm install`, after installation finish you can run `npm start` and the nodejs will running on port 3005, after that you can open file **index.html as Client 1** and **index2.html as Client 2** for testing the websocket.

Just click the **Send** button and then view each log console on inspect element of your browser. You will see the realtime activity

# Sample simple flowchart

![flowchart](flowchart.png)
