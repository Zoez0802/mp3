import { useState } from "react";

export default function useCalc() {
    //my custom hooks
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [output, setOutput] = useState("");
    // I do color switch is calcBotton

    function doAdd() {
        // MP1: String(Number(one.value) + Number(two.value))
        const ans = Number(a) + Number(b);
        setOutput(String(ans));
    }

    function doSub() {
        const ans = Number(a) - Number(b);
        setOutput(String(ans));
    }

    function doMul() {
        const ans = Number(a) * Number(b);
        setOutput(String(ans));
    }

    function doDiv() {
        if (Number(b) === 0) {
            setOutput("ERROR :( ");
        } else {
            const ans = Number(a) / Number(b);
            setOutput(String(ans));
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
        setOutput(String(Answer));
    }

    function clearAll() {
        setA("");
        setB("");
        setOutput("");

    }

    return {
        a, b, output,
        setA, setB,
        // actions (same names as MP1)
        doAdd, doSub, doMul, doDiv, doPow, clearAll,
    };
}
