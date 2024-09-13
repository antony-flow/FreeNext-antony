"use client";
import todoReducer from "@/lib/todoReducer";
import { useEffect, useReducer, useState } from "react";
import debounce from "lodash.debounce";

export default function todoHome() {
  interface list {
    txt: string;
    id: number;
    done: boolean;
  }
  interface EditingState {
    txt: string;
    id: number;
    idEditing: boolean;
  }
  interface propstype {
    txt: string;
    id: number;
  }
  const initiallist: list[] = [
    {
      txt: "rahul",
      id: 1,
      done: false,
    },
    {
      txt: "karan",
      id: 2,
      done: false,
    },
  ];
  const [tasks, dispatch] = useReducer(todoReducer, initiallist);
  const [nextid, setNextId] = useState(3);
  const [loading, setLoading] = useState(true);

  const [text, setText] = useState("");
  // const [editing, setEditing] = useState(false);
  const [edittxt, setEditTxt] = useState("");
  const [editKey, setEditkey] = useState({ id: 0, boo: false });
  const [editingState, setEditingState] = useState<EditingState[]>([]);

  const handleAdd = () => {
    console.log("hello from handleadd");
    dispatch({ nextid, text, type: "adding" });
    setText("");
    setNextId(nextid + 1);
  };
  const HandleDelete = (data: propstype) => {
    dispatch({ nextid: data.id, type: "delete", text: "to be deleted" });
  };
  const HandleEdit = (data: propstype) => {
    // dispatch({ nextid: id, type: "edit", text });
    // setEditkey({id, boo: true });
    // setEditing(true);
    // setEditTxt(txt);
    setEditingState((prev) => [
      ...prev,
      { txt: data.txt, id: data.id, idEditing: true },
    ]);
  };
  const HandleSave = (data: propstype) => {
    const curr_editing = editingState.find((st) => st.id === data.id);
    if (curr_editing) {
      dispatch({ nextid: data.id, type: "save", text: curr_editing.txt });
      setEditingState((prev) => prev.filter((it) => it.id !== data.id));
    }

    // setEditTxt("");
    // setEditing(false);
  };
  const HandleEditChange = (data: propstype) => {
    setEditingState((prev) =>
      prev.map((it) => (it.id === data.id ? { ...it, txt: data.txt } : it))
    );
  };
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const resp = await fetch("http://127.0.0.1:3000/todo/api", {
          cache: "no-store",
        });
        const data = await resp.json();
        console.log(data);
        let ini: list[] = Object.values(data.initiallist);
        console.log(ini);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      <input
        name="task"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={debounce(handleAdd, 3000)}>Add</button>
      <ul>
        {loading === false ? (
          tasks.map((item: list) => {
            let editingst = editingState.find((st) => st.id === item.id);
            return (
              <li key={item.id}>
                {editingst && editingst.idEditing ? (
                  <>
                    <input
                      style={{ display: "inline" }}
                      value={editingState.find((st) => st.id === item.id)?.txt}
                      onChange={(e) =>
                        HandleEditChange({ txt: e.target.value, id: item.id })
                      }
                    />
                    <button
                      onClick={() => HandleSave({ txt: edittxt, id: item.id })}
                    >
                      save
                    </button>
                  </>
                ) : (
                  <>
                    <p style={{ display: "inline", margin: "20px" }}>
                      {item.txt}
                    </p>
                    <button
                      onClick={() => HandleEdit({ txt: item.txt, id: item.id })}
                    >
                      Edit
                    </button>
                  </>
                )}

                <>
                  <button
                    onClick={() => HandleDelete({ txt: "", id: item.id })}
                  >
                    Delete
                  </button>
                </>
              </li>
            );
          })
        ) : (
          <h3>Loading..........</h3>
        )}
      </ul>
    </div>
  );
}
