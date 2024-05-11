import React, { useState } from "react";
import Id_1_review from "./Id_1_review";
import Id_2_review from "./Id_2_review";
import Id_3_review from "./Id_3_review";
import Id_5_review from "./Id_5_review";
import Id_4_review from "./Id_4_review";
import "./Customer_review.css"

function Customer_Review() {
    const [id,setId] = useState(1)

  return (
    <div className="flex h-auto bg-zinc-500 px-5 lg:px-16 py-10">
      <div className="w-full lg:w-[80%] h-auto bg-green-00 flex flex-col lg:items-end lg:justify-end mt-20 lg:mt-0">
        <div className="w-full bg-green-00 flex items-center justify-center mb-10">
          <p className="archivo-black-regular text-6xl text-zinc-900">Don’t take our words <br />
trust our  customer</p>
        </div>

        {id===1 && <Id_1_review/>}
        {id===2 && <Id_2_review/>}
        {id===3 && <Id_3_review/>}
        {id===4 && <Id_4_review/>}
        {id===5 && <Id_5_review/>}


        <div className="flex gap-2 items-center bg-green-20 w-full">
          <div className={`${id===1 ? "w-20 h-20" : "w-14 h-14"} rounded-full bg-slate-300`} onClick={() => setId(1)}>
          </div>
          <div className={`${id===2 ? "w-20 h-20" : "w-14 h-14"} rounded-full bg-slate-300`} onClick={() => setId(2)}></div>
          <div className={`${id===3 ? "w-20 h-20" : "w-14 h-14"} rounded-full bg-slate-300`} onClick={() => setId(3)}></div>
          <div className={`${id===4 ? "w-20 h-20" : "w-14 h-14"} rounded-full bg-slate-300`} onClick={() => setId(4)}></div>
          <div className={`${id===5 ? "w-20 h-20" : "w-14 h-14"} rounded-full bg-slate-300`} onClick={() => setId(5)}>
            <img src="https://i.ibb.co/CWz3tDy/premium-photo-1677368597077-009727e906db.jpg" alt="" className="w-full h-full rounded-full object-cover"/>
          </div>
        </div>
      </div>
      <div className="w-[20%] h-auto bg-red-00 hidden lg:block">
      <img src="https://i.ibb.co/GVN6rSf/2391-removebg-preview.png" alt="" className="w-full h-full rounded-full object-cover"/>

      </div>
    </div>
  );
}

export default Customer_Review;
