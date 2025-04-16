# WhatsApp Rto Bot

Multi-purpose WhatsApp bot for downloading YouTube videos, checking weather, fetching vehicle info (India), and chatting with a GPT-like assistant.

---

## Features

- **/yt [query or URL]** – Download YouTube video or audio
- **/weather [city]** – Get real-time weather updates
- **/rc [vehicle number]** – Fetch detailed vehicle registration info (India)
- **/ask [question]** – Lite ChatGPT interaction

---

## Tech Stack

- **Node.js**
- **Baileys** for WhatsApp API
- **yt-dlp / ffmpeg** for video/audio
- **OpenWeatherMap API** for weather
- **Unofficial mParivahan API/Scraper** for vehicle info

---

## Project Structure

```
whatsapp-bot/
├── bot/
│   ├── index.js            # Entry point to start bot
│   └── handler.js          # Message handler logic
├── commands/              # Each feature as a module
│   ├── youtube.js
│   ├── weather.js
│   ├── vehicleInfo.js
│   └── chatgpt.js
├── utils/
│   ├── downloader.js
│   ├── api.js
│   └── logger.js
├── sessions/              # WhatsApp session data
├── config/
│   └── config.js
├── .env
├── package.json
└── README.md
```

---

## Deploying the Bot

### 1. **On VPS / Ubuntu Server**

```bash
sudo apt update && sudo apt install nodejs npm git ffmpeg -y
git clone https://github.com/DroppedPyDev/whatsapp-utility-bot.git
cd whatsapp-utility-bot
npm install
node bot/index.js
```

### 2. **On Termux (Android)**

```bash
pkg update && pkg install nodejs git ffmpeg -y
git clone https://github.com/DroppedPyDev/whatsapp-utility-bot.git
cd whatsapp-utility-bot
npm install
node bot/index.js
```

### 3. **On Railway (Cloud Platform)**

- Create a new Node.js project
- Link GitHub repo
- Add environment variables from `.env`
- Set `Start Command`: `node bot/index.js`
- Deploy

### 4. **On Heroku**

```bash
git clone https://github.com/DroppedPyDev/whatsapp-utility-bot.git
cd whatsapp-utility-bot
heroku create
heroku buildpacks:add heroku/nodejs
heroku config:set OPENWEATHER_API_KEY=your_key CHATGPT_API_KEY=your_key

git push heroku main
heroku logs --tail
```

> Note: Baileys may need session handling tweaks for cloud deployment.

---

## Environment Variables

Create a `.env` file:
```
OPENWEATHER_API_KEY=your_openweather_key
CHATGPT_API_KEY=your_gpt_key
```

---

## License
MIT

---

## Contributing
Feel free to open issues or pull requests for improvements or new features.
