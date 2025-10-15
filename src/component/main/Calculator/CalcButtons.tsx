import styled from "styled-components";
// Each prop here represents a function (like onAdd or onSub)
// that the CalcButtons component can call when a button is clicked.
// The type "() => void": the function takes no parameters and the function doesn't return any value
type CalcButtonsProps = {
    onAdd: () => void;
    onSub: () => void;
    onMul: () => void;
    onDiv: () => void;
    onPow: () => void;
    onClear: () => void;
    output: string;
};


const ButtonRow = styled.div`
    margin-top: 16px;
    padding-top: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    border-top: 2px solid #cbd5e1;
`;

const Button = styled.button<{ $wide?: boolean }>`
    background: #3b82f6;
    color: white;
    border-radius: 999px;
    padding: 12px 16px;
    font-size: calc(14px + 0.2vw);
    margin-top: 10px;
    border: none;
    width: ${(p) => (p.$wide ? "80px" : "auto")}; /* adjust width for Clear button */
`;

const Output = styled.p`
    margin: 4px 0 0 0;
    padding: 14px 16px;
    background: #e6ffe6;
    border-radius: 16px;
    border: 1px solid #88c488;
    font-size: calc(22px + 0.5vw);
    color: #0f172a;
`;

export default function CalcButtons({onAdd, onSub, onMul, onDiv, onPow, onClear, output,}: CalcButtonsProps) {
    const isNegative = Number(output) < 0;

    return (
        <section>
            <ButtonRow>
                <Button onClick={onAdd}>+</Button>
                <Button onClick={onSub}>−</Button>
                <Button onClick={onMul}>×</Button>
                <Button onClick={onDiv}>÷</Button>
                <Button onClick={onPow}>^</Button>
                <Button $wide onClick={onClear}>Clear</Button>
            </ButtonRow>

            <Output id="output" style={{ color: isNegative ? "red" : "black" }}>
                {output}
            </Output>
        </section>
    );
}
