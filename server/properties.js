/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5d6cf8a94a4f7c744b6c964c
*
* You will get 10% discount for each one of your friends
* 
*/
module.exports = {
    
  choonti_db_dbUrl: (process.env.DB_HOST || 'localhost') + ':27017/choonti_db',

  // Factom properties
  factom: {
    config: {
      baseUrl: "https://ephemeral.api.factom.com/v1",
      accessToken: {
        appId: "myAppId",
        appKey: "myAppKey"
      }
    },
    model: {
      // Start Factom model properties
      Products: {
        factomized: "",
      },
      Shop: {
        factomized: "",
      },
      User: {
        factomized: "",
      },

      // End Factom model properties
    }
  },

  publicPath: "public",
  port: process.env.NODE_PORT || 3000,
  tokenSecret: "Insert Your Secret Token",
  api: process.env.NODE_API != null ? process.env.NODE_API : "/api"
};
