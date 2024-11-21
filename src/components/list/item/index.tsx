import { TaskProps } from "../../../types/task"
import style from "../item/Item.module.scss"

interface Props extends TaskProps {
    selectTask: (selectedTask: TaskProps) => void
}

export default function Item({ task, time, selected, completed, id, selectTask }: Props) {
    return (
        <li
            className={`${style.item} ${selected ? style.itemSelected : ''} ${completed ? style.itemCompleted : ""}`}
            onClick={() => !completed && selectTask(
                {
                    task,
                    time,
                    selected,
                    completed,
                    id,
                }
            )}
        >
            <h3>
                {task}
            </h3>
            <span>
                {time}
            </span>
            {completed && <span className={style.completed} aria-label="completed task " />}
        </li>
    )
}