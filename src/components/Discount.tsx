import React, { FormEvent } from "react";
import './Discount.css'
import { db } from "../api/firebase";
import { collection, addDoc } from "firebase/firestore";

const Discount = () => {

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault()
        const docRef = addDoc(collection(db, "users"), {
            email: e.target.email.value,
        });
    }

    return (
        <div className="discount_container">
        <img className="discount-img" src="https://www.humanproofdesigns.com/wp-content/uploads/2020/12/discount.png"/>
        <div className="text-container">
        <div className="discount-title">RECEIVE AN EXTRA 10% DISCOUNT</div>
        <div>Sign up to the newsletter and have all the promos in your inbox the moment they are published.</div>
        <form onSubmit={handleSubmit}>
             <label htmlFor="email">Enter your Email</label><br></br>
             <input type="email" id="email"  name="email" required/><br></br>
             <input type="checkbox" id="agreed" name="agreed" value="Agreed" required/>
             <label htmlFor="agreed"> I hereby agree to receive commercial information (newsletter) 
             from Sol Hotel with its registered office in Tajna Góra (01-100) al. Nieznana 5 
             (hereinafter referred to as the Company) by electronic means to the e-mail address provided 
             in the form. I understand that I may withdraw my consent at any time and that such withdrawal 
             shall not affect the lawfulness of processing based on consent before its withdrawal.</label><br></br>
             <input type="submit" id="submit" name="submit" value="Submit"/>
        </form>
        </div>
        </div>
    )
}

export default Discount;