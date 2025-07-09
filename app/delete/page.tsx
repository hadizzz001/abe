"use client"

import React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import { sendEmail1 } from '../api/sendEmail1/sendEmail1'






export default function Home() {
  const router = useRouter();
  const [inputs, setInputs] = useState({});



  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };




  return (
    <>


      <div className="">
        <div className="container-xl">
          <br />
          <h4 className="br_text-2xl-serif md:br_text-3xl-serif" style={{ textAlign: "center" }}>Remove my account (permanently)</h4>
          <p>At Sheikh Medlej, we respect your privacy and provide you with the option to permanently delete your account and all associated data. To proceed with deletion, simply complete two quick steps on this page. First, enter your username and password to verify your identity. Second, provide a reason for requesting deletion. Once submitted, your account and all related data — including login credentials, personal information, order history, and any stored preferences — will be permanently and irreversibly removed from our system. No data will be retained after deletion. If you need assistance or have any questions, please contact us at <a href="mailto:medlej333@gmail.com">medlej333@gmail.com</a>.</p>
        </div>
      </div>
      <div className="container-xl mt-5">
        <div>
          <div className="pl-5 pt-4 pr-5">
            <form action={async formData => { await sendEmail1(formData); }}>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="username"
                        type="text"
                        placeholder="Username"
                        onChange={handleChange}
                        required
                        id='mycusinputs'
                      />
                    </div>
                  </div>

                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="password"
                        type="text"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        id='mycusinputs'
                      />
                    </div>
                  </div>


                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <textarea
                        className="form-control form-control-text-area"
                        name="message"
                        placeholder="Reason to remove account..."
                        rows={9}
                        required
                        onChange={handleChange}
                        defaultValue={""}
                        id='mycusinputs'
                      />
                    </div>
                  </div>
                </div>

              </div>
              <div className="form-group row pt-2">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                  <button type="submit" className="klaviyo_submit_button" style={{ padding: "1.5em" }}>
                    Send
                  </button>
                </div>
                <div className="col-md-5"></div>
              </div>
              <br />
            </form>
          </div>
        </div>

      </div>
      <div className="clearfix" />

    </>

  )
}
