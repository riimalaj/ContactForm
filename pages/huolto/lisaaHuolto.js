
import {useState} from 'react'
import formiStyle from '../../styles/Formi.module.css'
import Nav from "../../components/Nav"
//import { GetServerSideProps } from 'next'

export default function Huolto() {
    console.log("Now in lisaaHuolto.js file")
    const [formData, setFormData] = useState({})
    const [on, setOn] = useState(false)

    const huoltoData = {
        "kohde": formData.kohde,
        "huolto": formData.huolto,
        "km": parseInt(formData.km),
        "info": formData.info,            
    }
      
    const saveHuolto = async(huolto) => {
        const response = await fetch('../api/PostHuolto', {
            method:'POST',
            body:JSON.stringify(huolto)
        })

        if (!response.ok){
            throw new Error(response.statusText)
        }

        return await response.json()
    }

    const handleInputChange = (event) => {
        console.log(event.target.name)
        setFormData(preFormData => {
            return{
                ...preFormData,
                [event.target.name]: event.target.value
            }
        })
    } 


    console.log("formdata: ", formData)

    const submitData = async (event) => { 
        event.preventDefault;             
        console.log("submitData: ", huoltoData);    
        await saveHuolto(huoltoData)          
    }    

    const readData = async () => {
        const res = await fetch('./api/Read', {
            method:'GET'
        })

        return{
            props:{res}
        }
        
    }

   const show = () => setOn(true)
    return (
    <div>
    <Nav />
    <div className = {formiStyle.form}>
        <form onSubmit={submitData}>
        <input 
            className = {formiStyle.input}
            type = "text"
            name = "kohde"
            placeholder = "Kohde"
            onChange={handleInputChange}
            value={formData.kohde}
        />

        <input 
            className = {formiStyle.input}
            type = "text"
            name = "huolto"
            placeholder = "Huolto"
            onChange={handleInputChange}
            value={formData.huolto}
        />

        <input 
            className = {formiStyle.input}
            type = "number"
            name = "km"
            placeholder = "km"
            onChange={handleInputChange}        
            value={formData.km}
        />

        <textarea 
            className = {formiStyle.input}            
            name = "info"
            placeholder = "Lisäinfo"
            onChange={handleInputChange}        
            value={formData.info}
        />
        <button className = {formiStyle.button}>Talleta</button>
        </form>
    </div>   
</div>
  )
}

