import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import TodoCard from './TodoCard'
import { doc, setDoc, deleteField } from 'firebase/firestore'
import { db } from '../firebase'
import useFetchTodos from '../hooks/fetchTodos'

export default function UserDashboard() {
    const initialState = {
        name: "",
        surname: "",
        address: "",
        palace: ""

    }
    const initialVirtuState = {
        fede: "",
        speranza: "",
        carita: "",
        giustizia: "",
        sapienza: "",
        temperanza: "",
    }
    const { userInfo, currentUser } = useAuth()
    const [edit, setEdit] = useState(null)
    const [people, setPeople] = useState([])
    const [todo, setTodo] = useState(initialState)
    const [virtu, setVirtu] = useState(initialVirtuState)
    const [edittedValue, setEdittedValue] = useState('')
    let peopleToString = ""

    const { todos, setTodos, loading, error } = useFetchTodos()

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




    //console.log(todos)

    // useEffect(() => {
    //     if (!userInfo || Object.keys(userInfo).length === 0) {
    //         setAddTodo(true)
    //     }
    // }, [userInfo])

    async function handleAddTodo() {
        if (!todo) { return }
        //const newKey = todos ? (Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos))) + 1 : 1
        console.log(virtu)
        let newperson = { ...todo }
        console.log(JSON.stringify(newperson))
        if(todo && todo.length!==0){
            setPeople([...people, newperson])
        }
        console.log(typeof (people))
        /*
        setTodos({ ...todos, [newKey]: todo })
        const userRef = doc(db, 'users', currentUser.uid)
        await setDoc(userRef, {
            'todos': {
                [newKey]: todo
            }
        }, { merge: true })
        setTodo('')
        */
    }

    function ClearForm() {
        setTodo(initialState)
        setVirtu(initialVirtuState)
    }

    async function handleEditTodo() {
        if (!edittedValue) { return }
        const newKey = edit
        setTodos({ ...todos, [newKey]: edittedValue })
        const userRef = doc(db, 'users', currentUser.uid)
        await setDoc(userRef, {
            'todos': {
                [newKey]: edittedValue
            }
        }, { merge: true })
        setEdit(null)
        setEdittedValue('')
    }

    function handleAddEdit(todoKey) {
        return () => {
            console.log(todos[todoKey])
            console.log('bannan')
            setEdit(todoKey)
            setEdittedValue(todos[todoKey])
        }
    }

    function handleDelete(todoKey) {
        return async () => {
            const tempObj = { ...todos }
            delete tempObj[todoKey]

            setTodos(tempObj)
            const userRef = doc(db, 'users', currentUser.uid)
            await setDoc(userRef, {
                'todos': {
                    [todoKey]: deleteField()
                }
            }, { merge: true })

        }
    }

    return (
        <div className='w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5'>
            <div className='flex items-stretch'>
                <div id="filed" className="w-full grid grid-rows-2 grid-flow-col gap-x-8 gap-y-4">
                    <div>
                        <label className="text-red-600 row-start-1" >Name:</label>
                        <br></br>
                        <input id="name" type='text' placeholder="Enter todo" value={todo.name} onChange={(e) => SetForm(e.target)} className='outline-none p-5 text-base  text-slate-900' />
                    </div>
                    <div>
                        <label className="text-red-600 row-start-1" >Address:</label>
                        <br></br>
                        <input id="address" type='text' placeholder="Enter todo" value={todo.address} onChange={(e) => SetForm(e.target)} className='outline-none p-5 text-base  text-slate-900' />
                    </div>
                    <div>
                        <label className="text-red-600 row-start-1" >Surname:</label>
                        <br></br>
                        <input id="surname" type='text' placeholder="Enter todo" value={todo.surname} onChange={(e) => SetForm(e.target)} className='outline-none p-5 text-base  text-slate-900' />
                    </div>
                    <div>
                        <label className="text-red-600 row-start-1" >palace:</label>
                        <br></br>
                        <input id="palace" type='text' placeholder="Enter todo" value={todo.palace} onChange={(e) => SetForm(e.target)} className='outline-none p-5 text-base  text-slate-900' />
                    </div>
                </div>
            </div>
            <div id="filedRowsVir" className="w-full grid grid-rows-7 grid-cols-2 gap-4">
                <div className="text-red-600 " >Virtù:
                </div>
                <br></br>
                <div className="text-white-600 py-5" >Fede:</div>
                <div>
                    <input id="fede" type='text' placeholder="Enter number from 1 to 10" value={virtu.fede} onChange={(e) => setVirtuForm(e.target)} className='w-full outline-none p-5 text-base  text-slate-900' />
                </div>
                <div className="text-white-600 py-5" >Speranza:</div>
                <div>
                    <input id="speranza" type='text' placeholder="Enter number from 1 to 10" value={virtu.speranza} onChange={(e) => setVirtuForm(e.target)} className='w-full outline-none p-5 text-base  text-slate-900' />
                </div>
                <div className="text-white-600 py-5" >Carità:</div>
                <div>
                    <input id="carita" type='text' placeholder="Enter number from 1 to 10" value={virtu.carita} onChange={(e) => setVirtuForm(e.target)} className='w-full outline-none p-5 text-base  text-slate-900' />
                </div>
                <div className="text-white-600 py-5" >Sapienza:</div>
                <div>
                    <input id="sapienza" type='text' placeholder="Enter number from 1 to 10" value={virtu.sapienza} onChange={(e) => setVirtuForm(e.target)} className='w-full outline-none p-5 text-base  text-slate-900' />
                </div>
                <div className="text-white-600 py-5" >Giustizia:</div>
                <div>
                    <input id="giustizia" type='text' placeholder="Enter number from 1 to 10" value={virtu.giustizia} onChange={(e) => setVirtuForm(e.target)} className='w-full outline-none p-5 text-base  text-slate-900' />
                </div>
                <div className="text-white-600 py-5" >Temperanza:</div>
                <div>
                    <input id="temperanza" type='text' placeholder="Enter number from 1 to 10" value={virtu.temperanza} onChange={(e) => setVirtuForm(e.target)} className='w-full outline-none p-5 text-base  text-slate-900' />
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
            {(loading) && (<div className='flex-1 grid place-items-center'>
                <i className="fa-solid fa-spinner animate-spin text-6xl"></i>
            </div>)}
            {(
                <>
                    {
                        people && 
                        Object.keys(people).map((i) => {
                            peopleToString = Object.values(people[i]).join()
                            return (
                                <TodoCard handleEditTodo={handleEditTodo} key={i} handleAddEdit={handleAddEdit} edit={edit} todoKey={todo} edittedValue={edittedValue} setEdittedValue={setEdittedValue} handleDelete={handleDelete}>
                                    {peopleToString}
                                </TodoCard>
                            )
                        })}
                </>
            )}
            {/* {!addTodo && <button onClick={() => setAddTodo(true)} className='text-cyan-300 border border-solid border-cyan-300 py-2 text-center uppercase text-lg duration-300 hover:opacity-30'>ADD TODO</button>} */}
        </div>
    )
}
