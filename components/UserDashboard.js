import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useDispatch, useSelector } from "react-redux";
import { iconAction } from "../redux/store";



export default function UserDashboard() {

    const {icon} = useSelector((state) => (state.icon))
    const dispatch = useDispatch();

    const initialState = {
        name: "",
        surname: "",
        address: "",
        palace: ""

    }
    const initialVirtuState = {
        fede: 0,
        speranza: 0,
        carita: 0,
        giustizia: 0,
        sapienza: 0,
        temperanza: 0,
    }
    const { userInfo, currentUser } = useAuth()
    const [people, setPeople] = useState([])
    const [todo, setTodo] = useState(initialState)
    const [virtu, setVirtu] = useState(initialVirtuState)

    function SetForm(e) {
        switch (e.id) {
            case "name":
                setTodo({ ...todo, name: e.value })
                return;
            case "address":
                setTodo({ ...todo, address: e.value })
                return;
            case "surname":
                setTodo({ ...todo, surname: e.value })
                return;
            case "palace":
                setTodo({ ...todo, palace: e.value })
                return;
        }

    }

    /*

    function setVirtuForm(e) {
        switch (e.id) {
            case "fede":
                setVirtu({ ...virtu, fede: e.value })
                return;
            case "speranza":
                setVirtu({ ...virtu, speranza: e.value })
                return;
            case "carita":
                setVirtu({ ...virtu, carita: e.value })
                return;
            case "giustizia":
                setVirtu({ ...virtu, giustizia: e.value })
                return;
            case "sapienza":
                setVirtu({ ...virtu, sapienza: e.value })
                return;
            case "temperanza":
                setVirtu({ ...virtu, temperanza: e.value })
                return;
        }

    }
    */

    function Addone(e) {
        console.log(e.id)
        switch (e.id) {
            case "addF":
                setVirtu({ ...virtu, fede: virtu.fede < 10 ? virtu.fede+1 : virtu.fede })
                return;
            case "addS":
                setVirtu({ ...virtu, speranza: virtu.speranza < 10 ? virtu.speranza+1 : virtu.speranza })
                return;
            case "addC":
                setVirtu({ ...virtu, carita: virtu.carita < 10 ? virtu.carita+1 : virtu.carita })
                return;
            case "addG":
                setVirtu({ ...virtu, giustizia: virtu.giustizia < 10 ? virtu.giustizia+1 : virtu.giustizia })
                return;
            case "addSA":
                setVirtu({ ...virtu, sapienza: virtu.sapienza  < 10 ? virtu.sapienza+1 : virtu.sapienza})
                return;
            case "addT":
                setVirtu({ ...virtu, temperanza: virtu.temperanza < 10 ? virtu.temperanza+1 : virtu.temperanza})
                return;
        }

    }

    function SubtractOne(e) {
        switch (e.id) {
            case "subF":
                setVirtu({ ...virtu, fede: virtu.fede!==0 ? virtu.fede-1 : 0 })
                return;
            case "subS":
                setVirtu({ ...virtu, speranza: virtu.speranza!==0 ? virtu.speranza - 1 : 0 })
                return;
            case "subC":
                setVirtu({ ...virtu, carita: virtu.carita!==0 ? virtu.carita - 1 : 0  })
                return;
            case "subG":
                setVirtu({ ...virtu, giustizia: virtu.giustizia!==0 ? virtu.giustizia - 1 : 0  })
                return;
            case "subSA":
                setVirtu({ ...virtu, sapienza: virtu.sapienza!==0 ? virtu.sapienza - 1 : 0  })
                return;
            case "subT":
                setVirtu({ ...virtu, temperanza: virtu.temperanza!==0 ? virtu.temperanza - 1 : 0  })
                return;
        }


    }




    //console.log(todos)

    // useEffect(() => {
    //     if (!userInfo || Object.keys(userInfo).length === 0) {
    //         setAddTodo(true)
    //     }
    // }, [userInfo])

    async function handleAddTodo() {
        if (!todo) { return }
        console.log(virtu)
        let newperson = { ...todo }
        if (todo && todo.length !== 0) {
            setPeople([...people, newperson])
        }
        ClearForm()
    }

    function ClearForm() {
        setTodo(initialState)
        setVirtu(initialVirtuState)
        if(icon === "moon"){
            dispatch(iconAction.iconSun())
            return
        }
        dispatch(iconAction.iconMoon())
    }

    return (
        <div className='w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5'>
            <div className='flex items-stretch'>
                <div id="filed" className="w-full grid grid-rows-2 grid-flow-col gap-x-8 gap-y-4">
                    <div>
                        <label className="text-red-600 row-start-1" >Name:</label>
                        <br></br>
                        <input id="name" type='text' placeholder="Enter todo" value={todo.name} onChange={(e) => SetForm(e.target)} className='outline-none p-5 text-base  text-slate-900 rounded' />
                    </div>
                    <div>
                        <label className="text-red-600 row-start-1" >Address:</label>
                        <br></br>
                        <input id="address" type='text' placeholder="Enter todo" value={todo.address} onChange={(e) => SetForm(e.target)} className='outline-none p-5 text-base  text-slate-900 rounded' />
                    </div>
                    <div>
                        <label className="text-red-600 row-start-1" >Surname:</label>
                        <br></br>
                        <input id="surname" type='text' placeholder="Enter todo" value={todo.surname} onChange={(e) => SetForm(e.target)} className='outline-none p-5 text-base  text-slate-900 rounded' />
                    </div>
                    <div>
                        <label className="text-red-600 row-start-1" >palace:</label>
                        <br></br>
                        <input id="palace" type='text' placeholder="Enter todo" value={todo.palace} onChange={(e) => SetForm(e.target)} className='outline-none p-5 text-base  text-slate-900 rounded' />
                    </div>
                </div>
            </div>
            <div id="filedRowsVir" className="w-full grid grid-rows-7 grid-cols-2 gap-4">
                <div className="text-red-600 " >Virtù:
                </div>
                <br></br>
                <div className="text-white-600 py-5" >Fede:</div>
                <div className='input-dash'>
                    <div className='float-left w-10 py-4'>
                        <button className='border-solid border-2 rounded-full pl-2 pr-2 cursor-pointer' id="subF" onClick={(e) => SubtractOne(e.target)}>
                            -
                        </button>
                    </div>
                    <input id="fede" type='text' placeholder="Enter number from 1 to 10" value={virtu.fede} readOnly={true} /*onChange={(e) => setVirtuForm(e.target)}*/ className='rounded-lg w-50 outline-none p-5 text-base  text-slate-900' />
                    <div className='float-right w-10 py-4'>
                        <button className='border-solid border-2 rounded-full pl-2 pr-2 cursor-pointer' id="addF" onClick={(e) => Addone(e.target)}>
                            +
                        </button>
                    </div>
                </div>
                <div className="text-white-600 py-5" >Speranza:</div>
                <div className='input-dash'>
                    <div className='float-left w-10 py-4'>
                        <button className='border-solid border-2 rounded-full pl-2 pr-2 cursor-pointer' id="subS" onClick={(e) => SubtractOne(e.target)}>
                            -
                        </button>
                    </div>
                    <input id="speranza" type='text' placeholder="Enter number from 1 to 10" value={virtu.speranza} readOnly={true} /*onChange={(e) => setVirtuForm(e.target)}*/ className='rounded-lg w-50 outline-none p-5 text-base  text-slate-900' />
                    <div className='float-right w-10 py-4'>
                        <button className='border-solid border-2 rounded-full pl-2 pr-2 cursor-pointer' id="addS" onClick={(e) => Addone(e.target)}>
                            +
                        </button>
                    </div>
                </div>
                <div className="text-white-600 py-5" >Carità:</div>
                <div className='input-dash'>
                    <div className='float-left w-10 py-4'>
                        <button className='border-solid border-2 rounded-full pl-2 pr-2 cursor-pointer' id="subC" onClick={(e) => SubtractOne(e.target)}>
                            -
                        </button>
                    </div>
                    <input id="carita" type='text' placeholder="Enter number from 1 to 10" value={virtu.carita} readOnly={true} /*onChange={(e) => setVirtuForm(e.target)}*/ className='rounded-lg w-50 outline-none p-5 text-base  text-slate-900' />
                    <div className='float-right w-10 py-4'>
                        <button className='border-solid border-2 rounded-full pl-2 pr-2 cursor-pointer' id="addC" onClick={(e) => Addone(e.target)}>
                            +
                        </button>
                    </div>
                </div>
                <div className="text-white-600 py-5" >Sapienza:</div>
                <div className='input-dash'>
                    <div className='float-left w-10 py-4'>
                        <button className='border-solid border-2 rounded-full pl-2 pr-2 cursor-pointer' id="subSA" onClick={(e) => SubtractOne(e.target)}>
                            -
                        </button>
                    </div>
                    <input id="sapienza" type='text' placeholder="Enter number from 1 to 10" value={virtu.sapienza} readOnly={true} /*onChange={(e) => setVirtuForm(e.target)}*/ className='rounded-lg w-50 outline-none p-5 text-base  text-slate-900' />
                    <div className='float-right w-10 py-4'>
                        <button className='border-solid border-2 rounded-full pl-2 pr-2 cursor-pointer' id="addSA" onClick={(e) => Addone(e.target)}>
                            +
                        </button>
                    </div>
                </div>
                <div className="text-white-600 py-5" >Giustizia:</div>
                <div className='input-dash'>
                    <div className='float-left w-10 py-4'>
                        <button className='border-solid border-2 rounded-full pl-2 pr-2 cursor-pointer' id="subG" onClick={(e) => SubtractOne(e.target)}>
                            -
                        </button>
                    </div>
                    <input id="giustizia" type='text' placeholder="Enter number from 1 to 10" value={virtu.giustizia} readOnly={true} /*onChange={(e) => setVirtuForm(e.target)}*/ className='rounded-lg w-50 outline-none p-5 text-base  text-slate-900' />
                    <div className='float-right w-10 py-4'>
                        <button className='border-solid border-2 rounded-full pl-2 pr-2 cursor-pointer' id="addG" onClick={(e) => Addone(e.target)}>
                            +
                        </button>
                    </div>
                </div>
                <div className="text-white-600 py-5" >Temperanza:</div>
                <div className='input-dash'>
                    <div className='float-left w-10 py-4'>
                        <button className='border-solid border-2 rounded-full pl-2 pr-2 cursor-pointer' id="subT" onClick={(e) => SubtractOne(e.target)}>
                            -
                        </button>
                    </div>
                    <input id="temperanza" type='text' placeholder="Enter number from 1 to 10" value={virtu.temperanza} readOnly={true} /*onChange={(e) => setVirtuForm(e.target)}*/ className='rounded-lg w-50 outline-none p-5 text-base  text-slate-900' />
                    <div className='float-right w-10 py-4'>
                        <button className='border-solid border-2 rounded-full pl-2 pr-2 cursor-pointer' id="addT" onClick={(e) => Addone(e.target)}>
                            +
                        </button>
                    </div>

                </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-2 gap-3">
                <div>
                    <button onClick={handleAddTodo} className='outline-none max-w-lg px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40'>Add</button>
                </div>
                <div>
                    <button onClick={ClearForm} className='outline-none max-w-lg px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40'>Reset</button>
                </div>
            </div>
        </div>
    )
}
