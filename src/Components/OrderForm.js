import React, {useState, useEffect} from 'react'

const initialForm = {
    name: '',
    size: '',
    pepperoni: false,
    sausage: false,
    mushroom: false,
    onion: false,
    special: '',
    accepted: false
}

const OrderForm = (props) => {

    // console.log(props)

    const {orderSubmit} = props

    const [form, setForm] = useState(initialForm)

    const formChange = (e) => {
        // console.log(e.target.name, e.target.value, e.target.checked)
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setForm({...form, [e.target.name]:value})
    }

    const submitForm = (e) => {
        e.preventDefault()
        // console.log(form)
        orderSubmit(form)
        setForm(initialForm)
    }

    useEffect(() => {
        // console.log(form)
    }, [form] )

    return(<>
        <h1>Program your pizza!</h1>
        <form id="pizza-form" onSubmit={submitForm}>
            <label>
                Enter your name
                <input onChange={formChange} type='text' name='name' id='name-input' value={form.name} />
            </label>
            <label>
                Select your size
                <select onChange={formChange} name='size' id='size-dropdown' value={form.size}>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            <div> Toppings:
                <label>Pepperoni
                    <input onChange={formChange} type='checkbox' name='pepperoni' checked={form.pepperoni} />
                </label>
                <label>Sausage
                    <input onChange={formChange} type='checkbox' name='sausage' checked={form.sausage} />
                </label>
                <label>Mushroom
                    <input onChange={formChange} type='checkbox' name='mushroom' checked={form.mushroom} />
                </label>
                <label>Onion
                    <input onChange={formChange} type='checkbox' name='onion' checked={form.onion} />
                </label>
            </div>
            <label>
                Special Instructions:
                <input onChange={formChange} type='text' name='special' id='special-text' value={form.special} />
            </label>
            {/* <label>
                Ready to bake!
                <input onChange={formChange} type='checkbox' name='accepted' value={form.accepted} />
            </label> */}
            <button type='submit' id='order-button'>Add to Order</button>
        </form>
        </>)

}


export default OrderForm