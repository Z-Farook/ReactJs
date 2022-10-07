function WarningButton() {
    // const test = () => { alert('Are you sure?'); }};
    return (
        <button onClick={() => { alert('Are you sure?'); }}>Don't Click Here</button>
    );
}
export default WarningButton;