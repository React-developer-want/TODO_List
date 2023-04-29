export const mapTodoData = (data) => {
  return {
    inputComponents: [
      {
        component: "taskInput",
        details: {
          type: "text",
          placeholder: "Enter task title",
          areaLabel: "task",
          className: "mb-2"
        }
      },
      {
        component: "description",
        details: {
          type: "textArea",
          placeholder: "Enter task description",
          areaLabel: "task-description",
          className: "mb-2"
        }
      }
    ],
    allTasks: data?.tasks ?? []
  }
}