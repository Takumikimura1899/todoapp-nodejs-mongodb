const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/v1/tasks', (req, res) => {
  res.send('タスクを全て取得しました');
});

app.listen(PORT, console.log('サーバーが起動しました'));
