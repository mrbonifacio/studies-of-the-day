import { TaskProps } from "../../types/task";
import Item from "./item";
import style from "./List.module.scss"

interface Props {
    tasks: TaskProps[],
    selectTask: (selectedTask: TaskProps) => void
}

function List({ tasks, selectTask }: Props) {
    return (
        <aside className={style.listTasks}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tasks.map((item) => (
                    <Item
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside >
    )
}

export default List;