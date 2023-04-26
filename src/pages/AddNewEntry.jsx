import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddNewEntry = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/table")
  }

  return (
    <div className='flex h-screen justify-center items-center'>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <input type="date" className='border border-violet-500 bg-gray-50 w-[250px] rounded-md'/>
          <select name="type" id="type" className='border border-violet-500 bg-gray-50 w-[250px] rounded-md'>
            <option value="inflow">InFlow</option>
            <option value="outflow">OutFlow</option>
          </select>
          <input list='account' placeholder='Choose Account' className='border border-violet-500 bg-gray-50 w-[250px] rounded-md'/>
          <datalist id="account">
            <option value="Garanti"/>
            <option value="İşbankası"/>
            <option value="Akbank"/>
          </datalist>
          <input type="number" placeholder='Enter amount' className='border border-violet-500 bg-gray-50 w-[250px] rounded-md'/>
          <input type="text" placeholder='Enter desc...' className='border border-violet-500 bg-gray-50 w-[250px] rounded-md'/>
          <input list="currency" placeholder='Choose Currency' className='border border-violet-500 bg-gray-50 w-[250px] rounded-md'/>
          <datalist id='currency'>
            <option value="Euro" />
            <option value="Dolar" />
            <option value="TL" />
          </datalist>
          <button type='submit' className='bg-violet-500 text-white rounded-md'>Add Entry</button>
        </form>
    </div>
  )
}

export default AddNewEntry