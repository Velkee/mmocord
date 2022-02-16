import { Client, Intents } from 'discord.js';
import { token } from './config.json';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
  console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName == 'ping') {
    await interaction.reply('pong');
  }
});

client.login(token);
