import React, {useState, useEffect} from 'react'
import * as yup from 'yup'


const initialForm = {
    name: '',
    size: '',
    pepperoni: false,
    sausage: false,
    mushroom: false,
    onion: false,
    special: ''
}

const OrderForm = (props) => {

    const formSchema = yup.object().shape({
        name: yup.string().min(2, "name must be at least 2 characters"),
        size: yup.string(),
        pepperoni: yup.bool(),
        sausage: yup.bool(),
        mushroom: yup.bool(),
        onion: yup.bool(),
        special: yup.string()
    })

    const [error, setError] = useState({
        name: ''
    })

    const [disabled, setDisabled] = useState(true)

    const [form, setForm] = useState(initialForm)
    const {orderSubmit} = props

    const formValidate = (e) => {
        yup.reach(formSchema, e.target.name)
            .validate(
                e.target.type === 'checkbox' ? e.target.checked : e.target.value
            )
            .then(() => {
                setError({...error, [e.target.name]: ''})
            })   
            .catch((error) => {
                setError({...error, [e.target.name]: error.errors[0]})
            })  
    }

    const formChange = (e) => {
        formValidate(e)
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setForm({...form, [e.target.name]:value})
    }

    const submitForm = (e) => {
        e.preventDefault()
        orderSubmit(form)
        setForm(initialForm)
    }

    useEffect(() => {
        formSchema.isValid(form).then((valid) =>{
            setDisabled(!valid)
        })
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
            <button type='submit' id='order-button' disabled={disabled}>Add to Order</button>
        </form>
        <p>{error.name}</p>
        </>)

}


export default OrderForm