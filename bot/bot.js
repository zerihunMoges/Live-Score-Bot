const token = '5320053436:AAFN1ylnc9sAvjXzIEVyHZyQ2607Cgma7KU'

const { Telegraf } = require('telegraf')
const link = 'https://venerable-youtiao-6ebbe5.netlify.app'
const bot = new Telegraf(token)

 
bot.start((ctx) => {
  console.log(ctx.message)
  ctx.reply('Click the button below to use Live Score Bot', {
    reply_markup: {
      inline_keyboard: [[{ text: 'Pl Live', web_app: { url: link } }]]
    }
  })
})

bot.hears('send', (ctx) =>
  ctx.reply('Click the button below to use Live Score Bot', {
    reply_markup: {
      inline_keyboard: [[{ text: 'Live Score', web_app: { url: link } }]]
    }
  })
)

// bot.telegram.setWebhook('https://powerful-bull-costume.cyclic.app');
bot.launch({
  webhook: {
    domain: 'https://powerful-bull-costume.cyclic.app',
    port: 8443
  }
})
