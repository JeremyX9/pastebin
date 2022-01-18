# Pastebin.js
## How to start
First of all you have to download the package with `npm install @jeremyx9/pastebin.js`<br>
Then you have to get a `developer key` at https://pastebin.com/doc_api#1<br>
<br>
#### include the pastebin.js module
```js
const Pastebin = require("@jeremyx9/pastebin");
```
#### create a paste variable to configure options and create a paste
```js
const paste = new Pastebin("your_dev_key");
```
#### configure options
> the following options are the options set by default
```js
paste.options = {
    paste_private: "1",
    paste_expire_date: "10M",
    paste_name: "PastebinAPI Snippet",
    paste_format: "text",
    user_key: "",
};
```
#### create a paste and get the associated url
```js
async function createPaste() {
    const url = await paste.newPaste("$world = new World();");
    console.log(url); // https://pastebin.com/4CaivHJm
}
```
### Thats it!
