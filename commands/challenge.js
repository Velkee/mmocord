const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('challenge')
    .setDescription('Challenge another user to combat.')
    .addUserOption((option) => option.setName('target').setDescription('Which user to target').setRequired(true)),
  async execute(interaction) {
    const user = interaction.options.getUser('target');
    if (user) return interaction.reply(`You have challenged ${user.username} to battle!`);
  },
};
