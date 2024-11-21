import { useEffect, useState } from "react";
import { TaskProps } from "../../types/task";
import Button from "../button";
import Clock from "./clock";
import style from "./Stopwatch.module.scss"
import { timeToSeconds } from "../../common/utils/time";

interface Props {
    selected?: TaskProps;
    finishTask: () => void;
}

export default function Stopwatch({ selected, finishTask }: Props) {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    function regressive(count: number = 0) {
        setTimeout(() => {
            if (count > 0) {
                setTime(count - 1);
                return regressive(count - 1);
            }
            finishTask();
        }, 1000);
    };

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={style.clockWrapper}>
                <Clock time={time} />
            </div>
            <Button
                title="Começar"
                onClick={() => regressive(time)}
            />
        </div >
    )
}