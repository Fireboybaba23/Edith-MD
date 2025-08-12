const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEVhQnZtQ2srbi8vTWpOS2JzVmpZZHpjMmhlcWx0eS9PYUt1bjhRTktFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlRidm9ETTFSYW94NkRaV0VhTmhLK0RaOTc2d01VeEJraTYzU0E1M1JnOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQmdBeUR2MHIwMktWakh2RjdpMFczdDhSdjl5dEZQblJ6RlZaQnBwUm44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzRnhzR1dMVWVEd2Q5MUlBcGwxeTJnVDNqd2FsYmZ0azdyRVFQdXhhU0VNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNEYXJwbERZeVd3Q2NjZElCbjIzQTdzU0V0RUVJeVo2U04rUERwczR4VlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl1eDc3UXpNb3ExMm12NFZtak9hdGZhRGtIdGtWTEdGbzNEcE55c3ZNRVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0JaTk84OW5vaTVISWZXM0ZPblQwcldYWGFrNXVZTUtURjRFQlFaMjAwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakxuOEIwUEJ4UHVObTlubVFUdDlhbHYzR0lwMi9XUGVJRnl5Tk5RSWF4Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYvV1gwRDhQSGNtQzB3d1FrQUNiT0syODlyWVNnaXVuTkhRcVV3a1BkNW9ENk1IU2dEY2FpUWNGdEN4Q0F6b29RMVU5L3hmOFJhMy9mczZvcFFmcWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiIycStiR0xocTE2RkhldTY1anlWWWNwZHU1eUx6SkVVRFJSRFowMVZaMkYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMzk1OTg5ODVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0MxMkY5RDBCQjJERDJFNjIxNzdCNEYwQ0M5RTdCMEYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDk5NTU5NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRURJVEgxMjMiLCJtZSI6eyJpZCI6IjIzNDgxMzk1OTg5ODU6NjNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI3NzI2NjY0NjI0OTU1ODo2M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xPNS9wd0hFSUczN01RR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFzeHB3TFNMWVM4bVFLbVZFU2NUZStwRDVlb3VrOEJ0WlNYU2VxRGQ1UW89IiwiYWNjb3VudFNpZ25hdHVyZSI6IlRLOEJPOVM5Y2pRSmZVZ21IZ2hoMlpIai8ra2FieW9idExjb3VnNkR5eW1veHUrWVpWeUFTelNIbVdRaWcwL2VTRGhXRGsrdU1pTkZVMGJYeUpaMUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZVWJTZ0xwMXFKVk1JNGZBSDEzZDVnYWRVRjAyeFZrd3NnNytjTk44dk0yeGduemgvZjFDR3VPUUg3Zis1WVVpaitCdDlVMGxWdHhqUFZQNE9IQ3Bpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzk1OTg5ODU6NjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUxNYWNDMGkyRXZKa0NwbFJFbkUzdnFRK1hxTHBQQWJXVWwwbnFnM2VVSyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0OTk1NTg5LCJsYXN0UHJvcEhhc2giOiIyRzRBbXUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhwciJ9",
  START_IMG: process.env.START_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS EDITH-MD*",
  WELCOME: process.env.WELCOME || "true",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
  PREFIX: process.env.PREFIX || ".",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "true",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2348139598985",
  OWNER_NAME: process.env.OWNER_NAME || "𝕷𝖔𝖗𝖉 【𖢣】 Ɇ₳Ɽ₦Ɇ₴₮ 😈",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "2348139598985",
  ANTI_VV: process.env.ANTI_VV || "true",
  ANTI_CALL: process.env.ANTI_CALL || "true",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_And Get the fuck off*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
};
