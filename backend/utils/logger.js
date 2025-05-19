import fs from 'fs';
const logFile = './backend/logs/interactions.json';

export const logInteraction = (interaction) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    ...interaction
  };

  const currentLogs = fs.existsSync(logFile)
    ? JSON.parse(fs.readFileSync(logFile))
    : [];

  currentLogs.push(logEntry);
  fs.writeFileSync(logFile, JSON.stringify(currentLogs, null, 2));
};
