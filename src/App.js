import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
   <div className="flex flex-col items-center mt-2">
   <form onSubmit={submitHandler} className="bg-slate-50 w-[50vw] p-5 rounded-2xl hover:shadow-2xl" >

   <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
    <label htmlFor="firstName" className="block text-lg font-semibold  text-gray-900">First name</label>
    <br/>
    <input
      type="text"
      name="firstName"
      id="firstName"
      placeholder="Love"
      value={formData.firstName}
      onChange={changeHandler}
      className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/2"
    />

    <br/>
    <label htmlFor="lastName" className="block text-lg font-semibold  text-gray-900">Last name</label>
    <br/>
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Babbar"
      value={formData.lastName}
      onChange={changeHandler}
      className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/2"
    />

    <br/>
    <label htmlFor="email" className="block text-lg font-semibold  text-gray-900">Email Address</label>
    <br/>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="love@abcd.com"
      value={formData.email}
      onChange={changeHandler}
      className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/2"
    />

    <br/>
    <label htmlFor="country" className="block text-lg font-semibold  text-gray-900">Country</label>
    <br/>
    <select
      id="country"
      name="country"
      value={formData.country}
      onChange={changeHandler}
      className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/2"
      >

      <option>India</option>
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
    </select>

    <br/>
    <label htmlFor="streetAddress" className="block text-lg font-semibold  text-gray-900">Street Address</label>
    <br/>
    <input
      type="text"
      name="streetAddress"
      id="streetAddress"
      placeholder="B-25C"
      value={formData.streetAddress}
      onChange={changeHandler}
      className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/2"
    />

    <br/>
    <label htmlFor="city" className="block text-lg font-semibold  text-gray-900">City</label>
    <br/>
    <input
      type="text"
      name="city"
      id="city"
      placeholder="B-25C"
      value={formData.city}
      onChange={changeHandler}
      className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/2"
    />

  <br/>
    <label htmlFor="state" className="block text-lg font-semibold  text-gray-900">State / Province</label>
    <br/>
    <input
      type="text"
      name="state"
      id="state"
      placeholder="Bihar"
      value={formData.state}
      onChange={changeHandler}
      className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/2"
    />

    <br/>
    <label htmlFor="postalCode" className="block text-lg font-semibold  text-gray-900">Postal Code</label>
    <br/>
    <input
      type="text"
      name="postalCode"
      id="postalCode"
      placeholder="110077"
      value={formData.postalCode}
      onChange={changeHandler}
      className="outline block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/2"
    />

    <br/>
    <br/>
    <fieldset>
      <legend>By Email</legend>

      <div className="flex">
      <input
        id="comments"
        name="comments"
        type="checkbox"
        checked={formData.comments}
        onChange={changeHandler}
        
      />
      <div>
        <label htmlFor="comments">Comments</label>
        <p>Get notified when someones posts a comment on a posting.</p>
      </div>
      </div>

      <div className="flex">
      <input
        id="candidates"
        name="candidates"
        type="checkbox"
        checked={formData.candidates}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="candidates">Candidates</label>
        <p>Get notified when a candidate applies for a job.</p>
      </div>
      </div>

      <div className="flex">
      <input
        id="offers"
        name="offers"
        type="checkbox"
        checked={formData.offers}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="offers">Offers</label>
        <p>Get notified when a candidate accepts or rejects an offer.

</p>
      </div>
      </div>
      


    </fieldset>

    <br/>
    <br/>
    <fieldset>
      <legend>Push Notifications</legend>
      <p>These are delivered via SMS to your mobile phone.</p>

      <input
        type="radio"
        id="pushEverything"
        name="pushNotifications"
        value="Everything"
        onChange={changeHandler}
      />

      <label htmlFor="pushEverything">Everything</label>

      <br/>
      <input
        type="radio"
        id="pushEmail"
        name="pushNotifications"
        value="Same as email"
        onChange={changeHandler}
      />

      <label htmlFor="pushEmail">Same as email</label>

      <br/>
      <input
        type="radio"
        id="pushNothing"
        name="pushNotifications"
        value="No Push Notifications"
        onChange={changeHandler}
      />

      <label htmlFor="pushNothing">No Push Notifications</label>

    </fieldset>



   <button
   className="bg-blue-500 text-white font-bold rounded py-2 px-4"
   >Save</button>
    </div>
   </div>

 






   </form>

   </div>
  );
}

export default App;
