import { useState } from "react";

export default function useCalc() {
    //my custom hooks
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [output, setOutput] = useState("");
    const [color, setColor] = useState("black");

    function Changecolor(value: number) {
        setOutput(String(value)); //convert the output to string
        if (value < 0) setColor("red");
        else setColor("black");
    }

    function doAdd() {
        // MP1: String(Number(one.value) + Number(two.value))
        const ans = Number(a) + Number(b);
        Changecolor(ans);
    }

    function doSub() {
        const ans = Number(a) - Number(b);
        Changecolor(ans);
    }

    function doMul() {
        const ans = Number(a) * Number(b);
        Changecolor(ans);
    }

    function doDiv() {
        if (Number(b) === 0) {
            setOutput("ERROR :( ");
            setColor("red");
        } else {
            const ans = Number(a) / Number(b);
            Changecolor(ans);
        }
    }

    function doPow() {
        const Base = Number(a);
        const exp = Number(b);

        let Answer = 1;
        for (let count = 0; count < Math.abs(exp); count++) {
            Answer = Answer * Base;
        }
        if (exp < 0) {
            Answer = 1 / Answer;
        }
        Changecolor(Answer);
    }

    function clearAll() {
        setA("");
        setB("");
        setOutput("");
        setColor("black");
    }

    return {
        a, b, output, color,
        setA, setB,
        // actions (same names as MP1)
        doAdd, doSub, doMul, doDiv, doPow, clearAll,
    };
}
