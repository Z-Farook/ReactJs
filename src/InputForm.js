import PropTypes from 'prop-types';
function InputForm(props) {

  const handleTextChange = (e) => {
    const newUserInput = { ...props.userInput, reminderText: e.target.value };
    props.setUserInput(newUserInput);
  }

  const handleDateChange = (e) => {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    const newUserInput = { ...props.userInput, dueDate: date };
    props.setUserInput(newUserInput);

  }

  const handelClick = (e) =>{
    e.preventDefault();
    const itemToDo =  {...props.userInput, status: false}
    props.addNewReminder(itemToDo)
  }


  return (
    <form>
      <input value={props.userInput.reminderText}
        id="reminderText"
        type="text"
        placeholder="What do you want to do?" 
        onChange={handleTextChange}/>
      <input value={props.userInput.dueDate}
        id="dueDate"
        type="date" 
        onChange={handleDateChange}/>
      <button onClick={handelClick} >Add Item</button>
    </form>
  );
}

InputForm.propTypes = {
  userInput: PropTypes.shape({
    reminderText: PropTypes.string,
    dueDate: PropTypes.string,
  }),
  setUserInput: PropTypes.func,
  addNewReminder: PropTypes.func
}
const date = new Date().toISOString().substring(0, 10);

InputForm.defaultProps = {
  userInput: {
    reminderText: "",
    dueDate: date
  }
}

export default InputForm;