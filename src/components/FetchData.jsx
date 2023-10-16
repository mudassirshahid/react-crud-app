import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddCustomer from './AddCustomer';

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [formState, setFormState] = useState(false)

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = 'https://reqres.in/api/users?page=1';

    // Fetch data from the API
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // The empty dependency array ensures the effect runs once when the component mounts
  console.log(data);

  

  return (
    <>
    <div className='mt-16 overflow-x-auto'>
        <table className='w-full table table-bordered bg-white border rounded table-content border-spacing-y-20'>
            <thead>
                <tr className='text-left text-[#015249] bg-[#57bc908a]'>
                <th></th>
                    <th>Customer ID</th>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {/* {loading ? (
        <p>Loading...</p>
      ) : ( */}
    <>   
          {data?.data?.map(item => {
            return <>
            {/* <li key={item.id}>{item?.avatar}</li> */}
            <tr className='' key={item.id}>
            <td className='xl:px-4 md:px-1 px-0'><img className='lg:w-2/4 w-96' src={item.avatar} width="50%"  /></td>
                <td>{item.id}</td>
                <td>{item.first_name} {item.last_name}</td>
                <td>{item.email}</td>
                <td className='flex justify-between xl:mt-7 mt-2 xl:gap-0 gap-4'>
                <button className="py-1 px-9 rounded text-[#008212] bg-[#39b54a79] font-semibold btn-success capitalize"  onClick={()=>document.getElementById('my_modal_3').showModal()}>Edit</button>
                <button className="py-1 px-9 rounded text-[#D80000] bg-[#d8000075] font-semibold btn-error capitalize">Delete</button>
                </td>
                
            </tr>
             </>
          })}
        </>
      {/* )} */}
            </tbody>
        </table>
      
    </div>


{/* <AddCustomer  setData={setData} /> */}
</>
  );
}

export default FetchData;
