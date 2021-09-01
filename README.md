# Dev-Essential-Server
<div align=center>

[![Open Issues](https://img.shields.io/github/issues/hardikk2002/Dev-Essentials?style=for-the-badge&logo=github)](https://github.com/hardikk2002/Dev-Essential-Server/issues) [![Forks](https://img.shields.io/github/forks/hardikk2002/Dev-Essential-Server?style=for-the-badge&logo=github)](https://github.com/hardikk2002/Dev-Essential-Server/network/members) [![Stars](https://img.shields.io/github/stars/hardikk2002/Dev-Essentials?style=for-the-badge&logo=reverbnation)](https://github.com/code-monk08/connect-four/stargazers) ![Open Source Love](https://img.shields.io/badge/Open%20Source-%E2%99%A5-red?style=for-the-badge&logo=open-source-initiative)
</div>
<div align=center >
<img width="180px" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1630461387242/dW781sn37.png" />
</div>

<h1 align="center">Dev Essentials ✨️</h1>
<p align="center"> A Chrome Extension to keep you updated with the latest happenings✨️ </P>

![12.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1630443229855/U0uZjg--0.jpeg)
## 🔰 An Insight
**Dev Essentials** is a Chrome Extension built for Developers and Tech Enthusiasts, to keep them updated with the latest happenings, upcoming contests and, new tech innovations. 

### This Repo contains server coder of [Dev Essentials](https://github.com/hardikk2002/Dev-Essentials)

### 📝 Installation Requirements: 
- Install git (https://git-scm.com/download/win)
- Install Nodejs (https://nodejs.org/en/download/)
- Install MongoDB (https://docs.mongodb.com/manual/installation/)
  - Alternative, Use MongoDB Atlas (MongoURI) for online database management (https://www.mongodb.com/cloud/atlas) 
  
## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/hardikk2002/Dev-Essentials.git
```

2. Change the working directory

```bash
cd Dev-Essential-server
```

3. Install dependencies

```bash
npm install
```

4. Build the app

```bash
nodemon start
```

You are all set! Open [localhost:4000/](http://localhost:4000/) to see the message.

This server is also hosted on Heroku at [devessential.herokuapp.com/](devessential.herokuapp.com)🚀 
So you may not want to run this explicitly if you are trying [Dev Essentials](https://github.com/hardikk2002/Dev-Essentials) at your local.

## 📝 API Calls

1. To Fetch Contest lists
```bash
      "https://devessential.herokuapp.com/api/contest",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resource: resource }),
      }
```
Resource is the name of the Platform, eg. "codechef.com", "codeforces.com", and so on...

2. To Fetch latest Apple News

```bash
     const response = await fetch(
        "https://devessential.herokuapp.com/api/news-apple"
      );
```

3. To Fetch latest Tesla News

```bash
      const response = await fetch(
        "https://devessential.herokuapp.com/api/news-tesla"
      );
```

4. To Fetch news on tech Keywords

 ```bash
      "https://devessential.herokuapp.com/api/news-keyword",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resource: searchKey,
      })
 ```
 
 ## 🍰 Contributing

- Please contribute using [GitHub Flow](https://guides.github.com/introduction/flow). 

Create a branch, add commits, and [open a pull request](https://github.com/hardikk2002/Dev-Essential-Server/pulls).
 
 ## 🛡️ License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

## 🙏 Support

### If you found the app helpful ❤️, Don't forget to leave a star ⭐️

## 🦄 Spread the word

Share on [twitter](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fhardikk2002%2FDev-Essentials&via=%40hardikk2002&text=Check%20out%20Dev%20Essentials%2C%20It%20will%20keep%20you%20updated%20with%20the%20latest%20happenings%20and%20contests%2C%20so%20that%20you%20will%20never%20miss%20the%20opportunities.&hashtags=devcommunity%2C%20hashnode%2C%20productivity%2C%20opensource) with pre populated message.


 
         
