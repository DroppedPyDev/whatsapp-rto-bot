const youtube = require('../commands/youtube');
const weather = require('../commands/weather');
const vehicleInfo = require('../commands/vehicleInfo');
const chatgpt = require('../commands/chatgpt');

module.exports = async (sock, msg) => {
  const body = msg.message?.conversation || msg.message?.extendedTextMessage?.text || '';
  const sender = msg.key.remoteJid;

  if (body.startsWith('/yt ')) {
    return youtube(sock, sender, body.replace('/yt ', ''));
  } else if (body.startsWith('/weather ')) {
    return weather(sock, sender, body.replace('/weather ', ''));
  } else if (body.startsWith('/rc ')) {
    return vehicleInfo(sock, sender, body.replace('/rc ', ''));
  } else if (body.startsWith('/ask ')) {
    return chatgpt(sock, sender, body.replace('/ask ', ''));
  } else if (body === '/help') {
    const helpText = `
*WhatsApp Utility Bot Commands:*
/yt [query or URL] - Download YouTube video/audio
/weather [city] - Get weather info
/rc [vehicle number] - Vehicle info
/ask [question] - Chat with bot
    `;
    await sock.sendMessage(sender, { text: helpText });
  }
};
