import { useState } from "react";

function Form(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setemail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("");
    const [subject, setSubject] = useState("");
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [choice, setChoice] = useState("");
    const [about, setAbout] = useState("");

    function reset(){
        setFirstName("");
        setLastName("");
        setemail("");
        setContact("");
        setGender("");
        setSubject("");
        setResume("");
        setUrl("");
        setUrl("");
        setAbout("");
    }
    function submit(e) {
        e.preventDefault();
        console.log(e);
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            choice,
            subject,
            resume,
            url,
            about,
        )
    }

    return(
        <div className="form-container">
            <h1>Submission Form With React</h1>
            <fieldset>
                <form>      
                    <div className="firstname-div">
                        <label>First Name*</label>
                        <input  required 
                                type="text" 
                                name="firstname"
                                placeholder="Enter First Name" 
                                onChange={(e) => setFirstName(e.target.value)}/>
                    </div>

                    <div className="lastname-div">
                        <label>Last Name*</label>
                        <input  required 
                                type="text" 
                                name="lastname"
                                placeholder="Enter Last Name" 
                                onChange={(e) => setLastName(e.target.value)}/>
                    </div>

                    <div className="email-div">
                        <label>Enter Email*</label>
                        <input  required 
                                type="email" 
                                name="email"
                                placeholder="Enter email" 
                                onChange={(e) => setemail(e)}/>
                    </div>

                    <div className="contact-div">
                        <label>Contact*</label>
                        <input  required 
                                type="tel" 
                                name="contact"
                                placeholder="Enter Mobile number" 
                                onChange={(e) => setContact(e)}/>
                    </div>

                    <div className="gender-div">
                        <label>Gender*</label>
                        <div>
                            <input  name="gender" 
                                    id="male"   
                                    value="male" 
                                    type="radio" 
                                    onChange={(e) => setGender(e.target.value)}  />
                            <label htmlFor="male">Male</label>

                            <input  name="gender" 
                                    id="female" 
                                    value="female" 
                                    type="radio" 
                                    onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="female">Female</label>

                            <input  name="gender" 
                                    id="other" 
                                    value="other" 
                                    type="radio" 
                                    onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                    <div className="subject-div">
                        <label>Your best subject</label>
                        <div>
                            <input  name="subject" 
                                    type="checkbox" 
                                    value="English"
                                    checked={subject === "English"}  
                                    onChange={(e) => setSubject(e.target.value)}/>
                            <label htmlFor="">English</label>

                            <input  name="subject" 
                                    type="checkbox" 
                                    value="Maths"
                                    checked={subject === "Maths"}  
                                    onChange={(e) => setSubject(e.target.value)} />
                            <label htmlFor="">Maths</label>

                            <input  name="subject" 
                                    type="checkbox" 
                                    value="Physics"
                                    checked={subject === "Physics"}  
                                    onChange={(e) => setSubject(e.target.value)}  />
                            <label htmlFor="">Physics</label>
                        </div>
                    
                    </div>

                    <div className="resume-div">
                        <input  required 
                                type="file" 
                                id="file"
                                name="file"
                                onChange={(e) => setResume(e.target.files[0])}/>
                    </div>
                    <div className="url-div">
                        <label>Enter URL*</label>
                        <input  required 
                                type="url" 
                                id="url"
                                name="url"
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="Enter URL"/>
                    </div>
                    <div className="choice-div">
                        <label>Select Your Choice</label>
                        <select name="select"
                                id="select"
                                value={choice}
                                onChange={(e) => setChoice(e.target.value)}>
                            <option value="">
                                Select Your Choice
                                </option>
                            <option value="option1">
                                option 1
                                </option>
                            <option value="option2">
                                option 2
                                </option>
                            <option value="option3">
                                option 3
                                </option>
                        </select>
                    </div>
                    <div className="about-div">
                        <label htmlFor="about">About</label>
                        <textarea   required
                                    placeholder="About yourself..."
                                    name="about"
                                    id="about"
                                    onChange={(e) => setAbout(e.target.value)}>
                                    
                        </textarea>
                    </div>
                    <div className="submit-reset-div">
                        <button className="reset-button"
                                type="reset"
                                value="reset"
                                onClick={reset}>
                            Reset
                        </button>
                        <button className="submit-button"
                                type="submit"
                                value="submit"
                                onClick={(e) => submit(e)}>
                            Submit
                        </button>
                    </div>
                </form> 
            </fieldset>
        </div>
    )
}
export default Form;