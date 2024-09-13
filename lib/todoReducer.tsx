interface list {
  txt: string;
  id: number;
  done: boolean;
}
interface actiontype {
  nextid: number;
  text: string;
  type: string;
}
export default function todoReducer(tasks: list[], action: actiontype): list[] {
  switch (action.type) {
    case "adding": {
      return [
        ...tasks,
        {
          id: action.nextid,
          txt: action.text,
          done: false,
        },
      ];
    }
    case "delete": {
      return tasks.filter((i) => i.id !== action.nextid);
    }
    case "save": {
      //  let data = tasks.find((task) => task.id===action.nextid);
      return tasks.map((task) =>
        task.id == action.nextid ? { ...task, txt: action.text } : task
      );
    }
    default: {
      return [];
    }
  }
}
