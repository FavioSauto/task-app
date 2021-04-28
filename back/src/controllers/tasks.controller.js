import Task from "../models/tasks";

export async function createTask(req, res) {
  const { title, completed } = req.body;

  const newTask = await Task.create(
    {
      title,
      completed,
    },
    {
      fields: ["title", "completed"],
    }
  );

  res.json({ message: "New task created" });
}

export async function getTasks(req, res) {
  const tasks = await Task.findAll({
    attribute: ["id", "title", "completed"],
    order: [["id", "ASC"]],
  });

  res.json({ tasks });
}

export async function getOneTask(req, res) {
  const { id } = req.params;

  const task = await Task.findOne({
    where: { id },
    attributes: ["id", "title", "completed"],
  });

  res.json(task);
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const { title, completed } = req.body;

  const task = await Task.findOne({
    attributes: ["id", "title", "completed"],
    where: { id },
  });

  const updatedTask = await Task.update(
    { title, completed },
    {
      where: { id },
    }
  );

  res.json({
    message: "Task updated",
    updatedTask,
  });
}

export async function deleteTask(req, res) {
  const { id } = req.params;

  await Task.destroy({
    where: {
      id,
    },
  });

  res.json({ message: "Deleted" });
}
