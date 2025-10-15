import styled from "styled-components";

type CalcInputProps = {
    id: string;
    value: string;
    label: string;
    onChange: (v: string) => void;
};

const Label = styled.label`
    display: block;
    font-size: calc(12px + 0.2vw);
    color: #e2e8f0;
    margin-top: 8px;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    max-width: 420px;
    padding: 12px 14px;
    font-size: calc(14px + 0.2vw);
    color: black;
    background: white;
    border: 1px solid #94a3b8;
    border-radius: 12px;
    margin-top: 10px; 
`;

export default function CalcInput({ id, label, value, onChange }: CalcInputProps) {
    return (
        <>
            <Label htmlFor={id}>{label}</Label>
            {/* I use htmlFor={id} because it links the label to the input field.*/}
            <Input id={id} value={value} onChange={(e) => onChange(e.target.value)} />
            {/* I use value and onChange together because this makes the input a controlled component. It always gives the state from the parent, and updates that state whenever I type something. */}
        </>
    );
}
