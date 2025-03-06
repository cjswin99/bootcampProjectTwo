import "../../styles/Input.css"
interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

 export const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
    return (
        <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
        />
    );
};
