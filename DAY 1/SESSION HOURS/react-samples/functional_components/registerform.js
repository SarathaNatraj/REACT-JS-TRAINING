import React, { Component } from 'react';

// USE MATERIAL UI!
export default function RegisterForm(){
    return(
        <>
        <form action="|">
            <h2>
                HELLO
            </h2>
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" />

            <label htmlFor="">LastName</label>
            <input type="text" name="" id="" />
            
            <label htmlFor="">ID</label>
            <input type="text" name="" id="" />

            <label htmlFor="promotions">Recieve Promotions</label>
            <input type="checkbox" name="promotions" id="promotions" />

            <label htmlFor="promotions">Recieve News</label>
            <input type="checkbox" name="news" id="news" />

            <input type="submit" value="" />

            {/* <div>
                <label htmlFor="promotions">Yes</label>
                <input type="radio" name="promotions" id="yes" />
                <label htmlFor="promotions">No</label>
                <input type="radio" name="promotions" id="no" />
            </div> */}
        </form>
        </>
    )
}
