const makeWASocket = require('@whiskeysockets/baileys').default;
const { useSingleFileAuthState } = require('@whiskeysockets/baileys');
const { default: handler } = require('./handler');
const { Boom } = require('@hapi/boom');
const P = require('pino');

const { state, saveState } = useSingleFileAuthState('./sessions/auth_info.json');

async function startBot() {
  const sock = makeWASocket({
    auth: state,
    logger: P({ level: 'silent' }),
    printQRInTerminal: true,
  });

  sock.ev.on('messages.upsert', async ({ messages }) => {
    if (!messages || !messages[0]?.message) return;
    const msg = messages[0];
    await handler(sock, msg);
  });

  sock.ev.on('creds.update', saveState);
}

startBot();
