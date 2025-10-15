
import CalcInput from "./CalcInput";
import CalcButtons from "./CalcButtons";
import useCalc from "./useCalc";

export default function Calculator() {
    const { a, b, output, setA, setB, doAdd, doSub, doMul, doDiv, doPow, clearAll } = useCalc();

    return (
        <section className="calc-botton">
            <CalcInput id="one" label="Give me a Number: " value={a} onChange={setA} />
            <CalcInput id="two" label="Give me a Number: " value={b} onChange={setB} />
            <CalcButtons onAdd={doAdd} onSub={doSub} onMul={doMul} onDiv={doDiv} onPow={doPow} onClear={clearAll} output={output}/>
        </section>
    );
}
