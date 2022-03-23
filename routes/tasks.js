const express = require('express');
const router = express.Router();

app.get('/', (req, res) => {
  res.send('タスクを全て取得しました');
});

app.post('/', (req, res) => {
  res.send('タスクを新規作成しました');
});

app.get('/:id', (req, res) => {
  res.send('ある特定のタスクを取得しました');
});

app.patch('/:id', (req, res) => {
  res.send('ある特定のタスクを更新しました');
});

app.delete('/:id', (req, res) => {
  res.send('ある特定のタスクを削除しました');
});

module.exports = router;
