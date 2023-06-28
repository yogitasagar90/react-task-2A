import React, { useState } from 'react'
import './MyForm.css'

function MyForm() {

    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
    })

    const [data, setData] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, formData])
    }

    const [selected, setSelected] = useState("")
    const handleSelectChange = (e) => {
        setSelected(e.target.value)
    }
    console.log("select", selected);

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <label className='fn'>
                        First Name
                        <input name='FirstName' value={formData.FirstName} type='text' onChange={handleChange} />
                    </label>
                    <label>
                        Last Name
                        <input name='LastName' value={formData.LastName} type='email' onChange={handleChange} />
                    </label>
                    <h4>How should we contact you?</h4>
                    <select
                        onChange={handleSelectChange}
                    >
                        <option style={{visibility:'hidden'}}>Choose option</option>
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                    </select>

                    <div style={{ display: selected ? " " : "none" }}>
                        {selected === "phone" ? <label className='pn'>
                            Phone Number
                            <input name='PhoneNumber' value={formData.PhoneNumber} type='text' onChange={handleChange} />
                        </label> : <label className='ea'>
                            Email Address
                            <input name='email' value={formData.PhoneNumber} type='text' onChange={handleChange} />
                        </label>}
                    </div>
                </form>
            </div>
        </>
    )
}

export default MyForm
