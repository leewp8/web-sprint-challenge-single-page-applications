import React, {useState, useEffect} from 'react'

const OrderForm = () => {

    const [form, setForm] = useState({
        name: '',
        accepted: ''
    })


    return(<>
        <h1>Program your pizza!</h1>
        <form>
            <label>
                Enter your name
                <input type='text' name='name' id='name-input' />
            </label>
            <label>
                Ready to bake!
                <input type='checkbox' name='accepted' id='' />
            </label>
        </form>
        </>)

}


export default OrderForm