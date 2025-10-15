import styled from "styled-components";
import CalcInput from "./CalcInput";
import CalcButtons from "./CalcButtons";
import useCalc from "./useCalc";

const CalcSection = styled.section`
    /* .calc-botton */
    margin: 30px 40px;
    padding: 20px;
    background: steelblue;
    border-radius: 22px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    max-width: 50%;
    
`;

export default function Calculator() {
    const { a, b, output, setA, setB, doAdd, doSub, doMul, doDiv, doPow, clearAll } = useCalc();

    return (
        <CalcSection className="calc-botton">
            <CalcInput id="one" label="Give me a Number: " value={a} onChange={setA} />
            <CalcInput id="two" label="Give me a Number: " value={b} onChange={setB} />
            <CalcButtons onAdd={doAdd} onSub={doSub} onMul={doMul} onDiv={doDiv} onPow={doPow} onClear={clearAll} output={output}/>
        </CalcSection>
    );
}

