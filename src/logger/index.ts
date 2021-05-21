import pino from 'pino';

const logger = pino({
  level: 'debug',
  prettyPrint: {
    levelFirst: true,
    colorize: true,
    translateTime: 'dd-mm-yyyy HH:MM:ss',
  },
});

export default logger;
