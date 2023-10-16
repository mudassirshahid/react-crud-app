import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { data } from 'autoprefixer'

const AddCustomer = () => {
  // const [values, setValues] = useState({
  //   name: "",
  //   email: "",
  //   img: ""
  // })


  // const navigate = useNavigate();
  const apiUrl = 'https://reqres.in/api/users?page=1';
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(apiUrl, values)
      .then(response => {
        console.log(response);
        navigate("/")
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }

  // const addCustomerFunc = () => {
  //   setData([...data, {
  //     first_name: name,
  //     last_name: name,
  //     email: email,
  //     avatar: img,
  //   }])
  //   console.log(data,'this is my code')
  // }

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn text-white bg-gradient-to-r from-[#57BC90] via-[#147c6d] to-[#004B40]" onClick={()=>document.getElementById('my_modal_3').showModal()}>+ Add New Customer</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box max-h-max max-w-sm">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <div className="flex min-h-full flex-1 flex-col justify-center py-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add New Customer
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder='Customer Name'
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={e => setValues({...values, name: e.target.value})}
              />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='Email'
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={e => setValues({...values, email: e.target.value})}
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
              <input className='border-none' type="file" id="img" name="img" accept="image/*"
              onChange={e => setValues({...values, img: e.target.value})}
              />
              </div>
            </div>

            <div>
             
            
            </div>

            <div>
              <button
                type="button"
                onClick={() => addCustomerFunc()}
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-[#57BC90] via-[#147c6d] to-[#004B40] px-3 py-2 text-sm uppercase font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Customer
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
  </div>
</dialog>
    </>
  )
}

export default AddCustomer;
