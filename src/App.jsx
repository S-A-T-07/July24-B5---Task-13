
import './App.css';
import { useState } from 'react';
import Textarea from '@mui/joy/Textarea';
import TextField from '@mui/material/TextField';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function App() {

  const [fullname,setFullname] = useState("")
  const [address,setAddress] = useState("")
  const [mobile,setMobile] = useState("")
  const [email,setEmail] = useState("")
  const [selectedDate, setSelectedDate] = useState('');

  const [gender,setGender] = useState("")
  const [course,setCourse] = useState("")

  const [isFullnameInvalid,setIsFullnameInvalid]= useState(false)
  const [isAddressInvalid,setIsAddressInvalid]= useState(false)
  const [isMobileInvalid,setIsMobileInvalid]= useState(false)
  const [isEmailInvalid,setIsEmailInvalid]= useState(false)

  const isFormIncomplete = !fullname || !address || !mobile || !email || !selectedDate || !gender || !course;

  



  const handleFullnameValidation=(tag)=>{
    const {name,value}=tag
    console.log(!!value.match(/^[A-Za-z\s.]*$/));

    if(!!value.match(/^[A-Za-z\s.]*$/)){
        //valid
        if(name=="fullname")
          {
            setFullname(value)
            setIsFullnameInvalid(false)
          }
    }else{
        //invalid
        if(name=="fullname")
          {
            setFullname(value)
            setIsFullnameInvalid(true)
          }
    }
  }

  const handleAddressValidation=(tag)=>{
    const {name,value}=tag;
    console.log(!!value.match(/^[A-Za-z\d\s,]*$/));

    if(!!value.match(/^[A-Za-z\d\s,]*$/))
      {
          //valid
          if(name=="address"){
            setAddress(value);
            setIsAddressInvalid(false);           
          }
      }
      else
      {
        //invalid
        if(name=="address")
          {
          setAddress(value);
          setIsAddressInvalid(true);
         }
            
      }

  }

  const handleMobileValidation=(tag)=>{
    const {name,value}=tag;
    console.log(!!value.match( /^$|^(?:\+?91[\-\s]?)?[0]?(?:[789]\d{9})$/));

    if(!!value.match( /^$|^(?:\+?91[\-\s]?)?[0]?(?:[789]\d{9})$/))
      {
          //valid
          if(name=="mobile"){
            setMobile(value);
            setIsMobileInvalid(false);    
          }
      }
      else
      {
        //invalid
        if(name=="mobile")
          {
          setMobile(value);
          setIsMobileInvalid(true);
         }
            
      }
  };

  const handleEmailValidation=(tag)=>{
    const {name,value}=tag;
    console.log(!!value.match(/(^$|^.*@.*\..*$)/));

    if (!!value.match(/(^$|^.*@.*\..*$)/))
      {
          //valid
          if(name=="email"){
            setEmail(value);
            setIsEmailInvalid(false);    
          }
      }
      else
      {
        //invalid
        if(name=="email")
          {
          setEmail(value);
          setIsEmailInvalid(true);
         }
            
      }
  };

  const handleDobChange = (event) => {
    setSelectedDate(event.value)
  };


  const handleGenderChange=(event)=>{
    setGender(event.target.value);
  };

  const handleCourseChange=(event)=>{
    setCourse(event.target.value);
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleReset = () => {
    setFullname("");
    setAddress("");
    setMobile("");
    setEmail("");
    setSelectedDate("");
    setGender("");
    setCourse("");
    setIsFullnameInvalid(false);
    setIsAddressInvalid(false);
    setIsMobileInvalid(false);
    setIsEmailInvalid(false);
  };

  const handleUpload = () => {
    alert("Details Submitted Succesfully!!");
  };
  
  
       
  return (
  <>
  <div className="container">
    <div className="mainBox">
    <h3 className='text-center'>
      STUDENT REGISTRATION FORM
    </h3>
   

<div className="form-container">
<div className="form-field-container">
    <div>
    <TextField  name='fullname' onChange={e=>handleFullnameValidation(e.target)
    }  className='w-100 txtfield'
          id="fullname"
          label="Full Name"
          value={fullname}
          type="text"
          autoComplete="current-name"
        />
{
  isFullnameInvalid &&
      <div className="mb-3 mt-2 text-danger fw-bolder">Invalid Username</div>
}
<div>
   
    </div>
    

</div>

<div>
<Textarea onChange={e=>handleAddressValidation(e.target)} className='w-100 addressfield' name="address"  placeholder="Address" variant="outlined" id='address'
value={address} />
{
  isAddressInvalid &&
      <div className="mb-3 mt-2 text-danger fw-bolder">Invalid Address</div>
}
</div>

<div>
<TextField className='w-100 txtfield' 
          id="mobile"
          onChange={e=>handleMobileValidation(e.target)}
          label="Mobile"
          name='mobile'
          type="Mobile"
          value={mobile}
          autoComplete="current-password"
        />
        {
          isMobileInvalid &&
      <div className="mb-3 mt-2 text-danger fw-bolder">Invalid Mobile Number</div>
       }
</div>

<div>
<TextField className='w-100 txtfield'
          id="email"
          onChange={e=>handleEmailValidation(e.target)}
          label="Email"
          type="email"
          name='email'
          value={email}
          autoComplete="current-password"
        />

{
          isEmailInvalid &&
      <div className="mb-3 mt-2 text-danger fw-bolder">Invalid Email</div>
       }
</div>
    </div>

   <div className="form-field-container">
 <div style={{display:'flex', flexDirection:'column'}}> 
 <h6 className='mt-2'> 
    Date of Birth
    </h6>
    <TextField className='w-100 txtfield'
          id="dob"
          label=""
          type="date"
          autoComplete="dob"
          name='dob'
          value={selectedDate}
          onChange={e=>handleDobChange(e.target)}
        />
 </div>

 <div className="mt-3 text-center">
              <FormControl >
                <FormLabel
                  id="gender"
                  className="mb-3 text-center "
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={gender}
                  onChange={handleGenderChange}
                  
                  
                  
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="mt-4">
              <FormControl className="w-100 "
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Course
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="course"
                  value={course}
                  onChange={handleCourseChange}
                  autoWidth
                  label="Course" className='txtfield'
                >
                  <MenuItem value={20}>Biology</MenuItem>
                  <MenuItem value={21}>Computer Science</MenuItem>
                  <MenuItem value={22}>Commerce</MenuItem>
                </Select>
              </FormControl>
            </div>

         <div className='mt-2'>
          <button
           disabled={
            isAddressInvalid ||
            isEmailInvalid ||
            isFullnameInvalid ||
            isMobileInvalid ||
            isFormIncomplete
          } onClick={handleShow} className='btn btn-success me-2 w-100 mb-2' type='submit'> 
            Register
          </button>
          <button onClick={handleReset} className='btn btn-danger border-dark mt-2 w-100' type='button'>
           Reset
          </button>

         </div>

         

         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title ><h3 className='text-success m-0'>Data Stored Successfully!</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="Details">
        <table>
                    <tr>
                    <th>Full Name</th>
                    <td>: {fullname}</td>
                    </tr>
                    <tr>
                    <th>Address</th>
                    <td>: {address}</td>
                    </tr>
                    <tr>
                    <th>Mobile</th>
                    <td>: {mobile}</td>
                    </tr>
                    <tr>
                    <th>Email</th>
                    <td>: {email}</td>
                    </tr>
                    <tr>
                    <th>Date of Birth</th>
                    <td>: {selectedDate}</td>
                    </tr>
                    <tr>
                    <th>Gender</th>
                    <td>: {gender}</td>
                    </tr>
                    <tr>
                    <th>Course</th>
                    <td>: {course === 20
                        ? "Biology"
                        : course === 21
                        ? "Computer Science"
                        : course === 22
                        ? "Commerce"
                        : ""}
                    </td>
                    </tr>
                    
                    
                  </table>
                 
                  </div>

                
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"
          onClick={()=>{
            handleClose();
                    handleReset();
                    handleUpload();
          }}
          >Upload</Button>
        </Modal.Footer>
      </Modal>

  

 
   </div>
</div>




    </div>

    
  </div>
  </>
  )
}

export default App
