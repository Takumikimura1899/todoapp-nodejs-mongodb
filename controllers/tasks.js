const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const getAllTask = await Task.find({});
    res.status(200).json(getAllTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleTask = async (req, res) => {
  try {
    if (!getSingleTask) {
      return res.status(404).json(`_id:${req.params.id}は存在しません`);
    }

    const getSingleTask = await Task.findOne({ _id: req.params.id });
    res.status(200).json(getSingleTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateTask = (req, res) => {
  res.send('ある特定のタスクを更新しました');
};

const deleteTask = (req, res) => {
  res.send('ある特定のタスクを削除しました');
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
