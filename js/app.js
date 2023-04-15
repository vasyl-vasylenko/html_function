// Импортируем нужные библиотеки
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Задаем переменные для работы с Telegram API и finage.co.uk API
const botToken = '5779247172:AAHdv3DfpWZmVx0lQtJPPFF0l8xoKWR8nJ0';
const chatId = '-928413899';
const currencies = ['EURUSD', 'GBPUSD', 'GBPJPY', 'USDCHF', 'EURGBP'];
const timeframe = '5';

// Создаем экземпляр Telegram бота
const bot = new TelegramBot(botToken, { polling: true });

// Функция для получения данных о котировках из finage.co.uk API
async function getQuotes(symbol) {
  const response = await axios.get(`https://api.finage.co.uk/last/${symbol}?apikey=API_KEYdaULAVGHMATYOLJO8XVVCGT610TSYROD`);
  const { o, h, l, c } = response.data[symbol];
  return { open: o, high: h, low: l, close: c };
}

// Функция для определения типа геометрической фигуры
const ta = require('ta.js');

function detectPattern(quotes) {
  const high = quotes.map(q => q.high);
  const low = quotes.map(q => q.low);
  const close = quotes.map(q => q.close);
  
  // Определение типа фигуры
  const headAndShoulders = ta.pattern.headAndShoulders({ high, low, close });
  const rectangle = ta.pattern.rectangle({ high, low, close });
  const channelUp = ta.pattern.channelUp({ high, low, close });
  const channelDown = ta.pattern.channelDown({ high, low, close });
  const flag = ta.pattern.flag({ high, low, close });
  const pennant = ta.pattern.pennant({ high, low, close });
  const triangleAsc = ta.pattern.triangleAsc({ high, low, close });
  const triangleDesc = ta.pattern.triangleDesc({ high, low, close });
  const doubleTop = ta.pattern.doubleTop({ high, low, close });
  const doubleBottom = ta.pattern.doubleBottom({ high, low, close });
  
  // Возврат типа фигуры
  if (headAndShoulders) {
    return 'headAndShoulders';
  } else if (rectangle) {
    return 'rectangle';
  } else if (channelUp) {
    return 'channelUp';
  } else if (channelDown) {
    return 'channelDown';
  } else if (flag) {
    return 'flag';
  } else if (pennant) {
    return 'pennant';
  } else if (triangleAsc) {
    return 'triangleAsc';
  } else if (triangleDesc) {
    return 'triangleDesc';
  } else if (doubleTop) {
    return 'doubleTop';
  } else if (doubleBottom) {
    return 'doubleBottom';
  } else {
    return 'unknown';
  }
}


// Функция для отправки сообщения в Telegram канал
function sendMessage(message) {
  bot.sendMessage(chatId, message);
}

// Главная функция, которая будет выполняться каждые 5 минут
async function main() {
  for (const currency of currencies) {
    const quotes = await getQuotes(currency);
    const pattern = detectPattern(quotes);
    if (pattern) {
      const message = `Обнаружена геометрическая фигура ${pattern} на паре ${currency}`;
      sendMessage(message);
    }
  }
}

// Запускаем выполнение главной функции с интервалом 5 минут
setInterval(main, timeframe * 60 * 1000);
