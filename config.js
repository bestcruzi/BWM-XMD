const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OiOBj9K1t5hR5BQMSqrloUlYt4aVGRrXmIECAiFxNAscv/PoXdXd0PO7O9PKUCnJycy/cKshxTZKEGDF5BQXANS9Quy6ZAYACGVRgiAlgQwBKCAWAWqkuWXsI79t4c1yq2VqXIzdZUscXbeGnMTGmhLhO8F/rP4M6CojqcsP8HwG3tc1RjvN4WjqtjV/J1ggReqW1HW85dgRFRPgvtuafxq2dwbxEhJjiLxkWMUkTgyULNEmLyPfr7aTedaLnRUJkLRpNOtGPiWm2k6lLcVtPaVoboIJoSPWf+9+hn1TDsGHsSy/545/VHsW53Yh2h+ULEgnSYGYtR6C1emM7Ff6NPcZShwAhQVuKy+bbuqs5RbaXKzdi6dg5KIBUiP4Uz0ZjTzKUl2Th0GciGc5sk3yM+fLmOw4sYG6O1ZGbT61rp2EF6cckuvMyYrWXti4O8y3rjE/eV+JJ8ZCX5P7r3l3rGXLKJxZeKbfrRpm/wXtoEclVNfe1YZBsSKL6vV9vL9+gfswVOBIvr7KoFPa8nWqXrZxEyYtnLzaOjDW11Fpjz4XiTfNKHZUX+xBL2ZhCPsnSoc+WV4g5Pzsfwxd7cch43i2WH2MbZ3kn5iovWzm5yZMhFzZpRzw250FwetA7yJsONl/ApuXDaS6Gqx360en7cKEGNEYABf2cBQRGmJYElzrPHntRlAQzqNfIJKh/yAseFuTLB2tSDupvoEZ1arnO9qmfFdOtbNfFwn4rXOjJ63DNgQUFyH1GKAh3TMieNjSiFEaJg8M9PFmToWr4Z1x4n8CwIMaHlJquKUw6DD1c/XkLfz6usXDeZP2oXiIAB97mNyhJnEW11rDJI/BjXaBTDkoJBCE8U3VkQoBr7qMUDJsQ0GMvYucIX4k1uqXwaRquWcpxnb58ofCj4Ig+fIBd2n0Qkwqe+hHpPUOxySAiDIJB9wAL83pn2n99aOJ/ygtNhNJSpjePXhT+1lqOxFTNQfdjwpj0iKACDklSIBQfoJ1Xh5AnK/oQ7MgXJFGMy0+lGi5RpoEjHvSw7l8sX3DdPweD1c06N8qDF6/V5XplrOmBB+oggbm/eFUSFE7uiIPV7/YHE/U1/XFolYVH8yFAJWJDB9EFnvHb+crbtSe82tBgBKiE+UTAAo0XPFbubVbrU81rd71WsqpaqttH4sO0j/2/5WsOEa8L9bXWrz9fdJFCGzTV4ORjMSVot3HTCqGH6kleMOl39GwgYgBruy05i9LqHUcBT89I7zykn5Gf1QL3T/Cwv+6NcDjxFFfTNPOJzZTOOD4lgTc2Zyvgp0fbUPGw30858fd3i7vQ206HWluUjPl8Ps63sEviW6qbyNewn/sQz9ovJ+lp09KTKr0NvHPfidbRdyOuJbA9TJuA4Mq3dUOZN7+BGZyvcn93wEpm7kNudytueMXD01szHZDi9T2T86Mzre9hCjB4D7t2F/7brM/jcnf0C8j4zfzeLN2kxt7Ouzdlyj25jN1z51N3smmWBNtpJisNIlxI4q6NhAu73nywoTrAMc5KCAaDpAQIWnCAt1c/iOjhFtIRpAQa8LPT5HtdVRBakjVoU6xKWH30HavuMRwjcfwFErh4iCwgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "2349042435868",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

