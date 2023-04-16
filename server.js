const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const cors = require('cors');
const { test } = require("node:test");

// 创建Express应用程序
const app = express();
const port = 3000;

const configuration = new Configuration({
  apiKey: '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'
});

const openai = new OpenAIApi(configuration);

// 使用body-parser和cors中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const corsOptions = {
  origin: ['http://10.0.0.193:8080'],
};

app.use(cors(corsOptions));

// 处理POST请求
app.post("/api/chat", async (req, res) => {
  const prompt = req.body.message;
  try {
    const completion = await openai.createCompletion({
      max_tokens: 2048,
      model: "text-davinci-003",
      prompt: prompt,
    });
    const text = completion.data.choices[0].text.trim();
    res.send(text);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
});

// 监听端口
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});