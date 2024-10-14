const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919434732576";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Tanmoy⚡🍃",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_08_10_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3NixcbiAgICAgICAgMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTksXG4gICAgICAgIDQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE0LFxuICAgICAgICAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODksXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc2LFxuICAgICAgICA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NixcbiAgICAgICAgMTAyLFxuICAgICAgICA2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDczLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDksXG4gICAgICAgIDEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NSxcbiAgICAgICAgNzksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk3LFxuICAgICAgICA3NCxcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAyNixcbiAgICAgICAgOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDcxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwLFxuICAgICAgICA2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICA3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQzLFxuICAgICAgICAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDUxLFxuICAgICAgICA3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxODksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMzksXG4gICAgICAgIDcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmcnR0NW5yNGpvald1dXNVOXM1TWpVMFFvUFBXWXlnTXA4WkNBRHhGWWR3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTQzNDczMjU3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTc2Nzk4RjFDOTlBOTIzNzQwM0Q0NkRDNUY0RTZBQjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4OTAwNTI0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5NDM0NzMyNTc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMkZFRTZBODNDMjk5N0EyMUI2QkE5MTZDRDJBMjg0NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjg5MDA1MjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaUJuX0JDMjRUZUNfZFFuaHRhMzdqd1wiLFxuICBcInBob25lSWRcIjogXCIzNDY2ODM3ZS02NjBiLTQwODAtYmNjZS1hY2YyNDgwNjQ3ODBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMjAxLFxuICAgICAgMTQxLFxuICAgICAgMTgxLFxuICAgICAgMTk3LFxuICAgICAgMTI3LFxuICAgICAgMTM0LFxuICAgICAgMjMsXG4gICAgICA3LFxuICAgICAgODEsXG4gICAgICAxNSxcbiAgICAgIDM2LFxuICAgICAgMjI2LFxuICAgICAgMzYsXG4gICAgICA2NixcbiAgICAgIDEzNSxcbiAgICAgIDY1LFxuICAgICAgMTc4LFxuICAgICAgOTQsXG4gICAgICAyNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICA5OSxcbiAgICAgIDM4LFxuICAgICAgMjMzLFxuICAgICAgMTc3LFxuICAgICAgNjUsXG4gICAgICAzMCxcbiAgICAgIDEzOCxcbiAgICAgIDE4NyxcbiAgICAgIDI4LFxuICAgICAgMTIxLFxuICAgICAgMjgsXG4gICAgICAyNDMsXG4gICAgICA5OSxcbiAgICAgIDIzLFxuICAgICAgMTkxLFxuICAgICAgMTcyLFxuICAgICAgNjYsXG4gICAgICAyMTksXG4gICAgICAzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGREM5RTZHSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5NDM0NzMyNTc2OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Zj/CdmZbwnZmj8J2ZovCdmaTwnZmuIPCdmZnwnZma8J2ZrlwiLFxuICAgIFwibGlkXCI6IFwiMjA1MzkwMTM0NDA3MTgxOjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09TZTNaZ0RFS1hiczdnR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZjVLVEZKc3RJZWRiUllTZkZ3aXhCcHUvZ0YwVXZwd2FiZzZvRTRMT2x4RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHTzg3WlFvSjZWS0hQZzZzSW1qMHN4bXZVOGcrWVVTR0hKbGpFWFlDWHE0eGltcWp4eVZza09GRmowMjduanNyMldNRnJWUkJ6VWVacVErV08yZWpDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqTEM2MUJmVGd6cmxnMW12WGZBZGpEMHdNMUtLOTljaGxjcE1jMzlqWkxFaHIvKzIzRjc0SE92RHpzUDl1UG41Q1RVZ3BDTVVKUTQ5Sm54cmtVWHVoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk0MzQ3MzI1NzY6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODkwMDUyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpGSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkZKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNWZLYjl2cXJZTVdrQlBPbDBRVEE3NHc0YjJxbEs2NWlzWUlkZHlaU3FJRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NTcxNjU2NjgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyODU0NzM4NzYxM1wifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
