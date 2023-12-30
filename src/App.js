import './App.css';

function App() {

  const submitForm = (event) => {
    event.preventDefault(); //prevent form getting refresh when submitting the form
    let form = event.target;
    // console.log(form);

    //get form data from the form
    let getFormData = new FormData(form);

    //return value from the form inputs
    let getFormDataObj = Object.fromEntries(getFormData.entries());
    console.log(getFormDataObj);

    //in JSON string
    let getFormJSON = JSON.stringify(getFormDataObj);
    console.log(getFormJSON);

    //validation for form inputs
    // if(getFormDataObj.name === '') {
    //   alert("Name is required");
    // } else if(getFormDataObj.email === '') {
    //   alert("Email is required");
    // } else if(getFormDataObj.gender === '') {
    //   alert("Gender is required");
    // } else if(getFormDataObj.country === '') {
    //   alert("Country is required");
    // } else {
    //   return alert("Thank you");
    // }

  }

  return (
    <>
      <h1>Studywithme React pt.7</h1>
      <h2>Form</h2>
      <div className='flex-apart'>
        <form className='card' onSubmit={submitForm}>
          <div>
          <label>Name: </label>
          <input name='name' type='text'/>
          </div>
          <br/>
          <div>
            <label>Email: </label>
            <input name='email' type='email'/>
          </div>
          <br/>
          <div>
            <label>Gender: </label>
            <select name='gender'>
              <option value=''>Select</option>
              <option value='Female'>Female</option>
              <option value='Male'>Male</option>
            </select> 
          </div> 
          <br/>
          <div>
            <label>Country: </label>
            <input name='country' type='radio' value='Malaysia'/>
            <label>Malaysia</label>

            <input name='country'  type='radio' value='Outside Malaysia'/>   
            <label>Outside Malaysia</label>
          </div>
          <br/>
          <div>
            <label>Interest in Software?: </label>
            <input name='software' type='checkbox' value='Yes' />
            <label>Yes</label>
          </div>
          <br/>
          <div>
            <button>Submit</button>            
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
