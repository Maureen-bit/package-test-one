
const Button = () => {

    const onGreeting = () => {
        console.log("Hola, cómo están?")
    };

    return (
        <button onClick={onGreeting}>
            Click me
        </button>
    );
}

export default Button;