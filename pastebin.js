const axios = require("axios");
var qs = require("qs");
/**
 * This is the main class of the Pastebin API
 */
class Pastebin {
  /**
   *
   * @param {string} dev_key = your pastebin dev key, get it on https://pastebin.com/doc_api#1
   */
  constructor(dev_key) {
    if (!dev_key) {
      throw new Error("Pastebin dev key is required");
    }
    this.options = {
      dev_key: dev_key,
      paste_private: "1",
      paste_expire_date: "10M",
      paste_name: "Code Snippet",
      paste_format: "text",
      user_key: "",
    };
    this.paste_url = "https://pastebin.com/api/api_post.php";
    Pastebin.url = "undefined";
  }
  async newPaste(paste_code) {
    if (!paste_code) {
      throw new Error("Paste code is required");
    }
    var data = qs.stringify({
      api_option: "paste",
      api_paste_code: paste_code,
      api_paste_private: this.options.paste_private,
      api_user_key: this.options.user_key,
      api_paste_name: this.options.paste_name,
      api_paste_expire_date: this.options.paste_expire_date,
      api_paste_format: this.options.paste_format,
      api_dev_key: this.options.dev_key,
    });
    var config = {
      method: "post",
      url: this.paste_url,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    const response = await axios(config).catch(function (error) {
      throw new Error(error.response.data);
    });
    return response.data;
  }
}
module.exports = Pastebin;
