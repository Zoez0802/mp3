
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

// when i do props: it doesnt let me because it gives a type of any
export default function CalcButtons(props: CalcButtonsProps) {
    return (
        <section>
            <div className="calc-buttons">
                <button onClick={props.onAdd}>+</button>
                <button onClick={props.onSub}>−</button>
                <button onClick={props.onMul}>×</button>
                <button onClick={props.onDiv}>÷</button>
                <button onClick={props.onPow}>^</button>
                <button onClick={props.onClear}>C</button>
            </div>
            <p>{props.output}</p>
        </section>
    );
}


