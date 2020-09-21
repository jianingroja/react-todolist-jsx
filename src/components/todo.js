import React from "react";
import "./todo.css";

const title = <h1>Jquery To Do List</h1>;
const des = <p>Sipmle Todo List with adding and filter by diff status.</p>;
const ac1 = (
  <div>
    {title}
    {des}
  </div>
);

const ac2 = (
  <div>
    <input />
    <button>add</button>
  </div>
);

const list = ["All", "Active", "Complete"];
const ac3 = (
  <div>
    {list.map((a) => (
      <div className="statu">{a}</div>
    ))}
  </div>
);

class Todo extends React.Component {
  render() {
    return (
      <div>
        {ac1}
        {ac2}
        {ac3}
      </div>
    );
  }
}

/*
ReactDOM.render(ac1, document.getElementById("ac1"));

ReactDOM.render(ac2, document.getElementById("ac2"));

ReactDOM.render(ac3, document.getElementById("ac3"));
*/

export default Todo;
