type CalcInputProps = {
    id: string;
    value: string; // "one" or "two"
    label: string;           // "Give me a Number: "
    onChange: (v: string) => void;
};

export default function CalcInput({ id, label, value, onChange }: CalcInputProps) {
    return (
        <>
            <p>{label}</p>
            <input
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                //When types value, take the text they entered and give it to the parent component.
            />
        </>
    );
}
