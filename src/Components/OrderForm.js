import React, {useState, useEffect} from 'react'

const OrderForm = () => {

    const [form, setForm] = useState({
        name: '',
        size: '',
        pepperoni: false,
        sausage: false,
        mushroom: false,
        onion: false,
        special: '',
        accepted: false
    })

    const formChange = (e) => {
        console.log(e.target.name, e.target.value, e.target.checked)
    }


    return(<>
        <h1>Program your pizza!</h1>
        <form id="pizza-form">
            <label>
                Enter your name
                <input onChange={formChange} type='text' name='name' id='name-input' value={form.name} />
            </label>
            <label>
                Select your size
                <select name='size' id='size-dropdown' value={form.size}>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            <div> Toppings(as many as you want!):
                <label>Pepperoni
                    <input onChange={formChange} type='checkbox' name='pepperoni' value={form.pepperoni} checked={form.pepperoni} />
                </label>
                <label>Sausage
                    <input onChange={formChange} type='checkbox' name='sausage' value={form.sausage} checked={form.sausage} />
                </label>
                <label>Mushroom
                    <input onChange={formChange} type='checkbox' name='mushroom' value={form.mushroom} checked={form.mushroom} />
                </label>
                <label>Onion
                    <input onChange={formChange} type='checkbox' name='onion' value={form.onion} checked={form.onion} />
                </label>
            </div>
            <label>
                Special Instructions:
                <input onChange={formChange} type='text' name='special' id='special-text' />
            </label>
            <label>
                Ready to bake!
                <input onChange={formChange} type='checkbox' name='accepted' value={form.accepted} />
            </label>
        </form>
        </>)

}


export default OrderForm