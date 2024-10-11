import { Update, Ctx, Start, Help, On, Hears } from 'nestjs-telegraf';
import { Scenes } from 'telegraf';

type TelegrafContext = Scenes.SceneContext;

@Update()
export class AppUpdate {
  @Start()
  async start(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('Start', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Open Web App',
              web_app: { url: 'NGROK_URL' },
            },
          ],
        ],
      },
    });
  }

  @Help()
  async help(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async on(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('👍');
  }

  @Hears('hi')
  async hears(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('Hey there');
  }
}
