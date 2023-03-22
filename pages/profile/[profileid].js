import { useRouter } from 'next/router'
import Profile from '../../components/UserProfile'
import PieChart from '../../components/Chart'

const data = [
  ["Task", "Hours per Day"],
  ["Fede", 10],
  ["Speranza", 10],
  ["Carità", 10],
  ["Giustizia", 10],
  ["Sapienza", 10],
  ["Temperanza", 10],
];

const options = {
  title: "Virtù Personali",
  is3D: true,
  backgroundColor: "white",   //rgb(15, 23, 42)
  colors: ["red", "blue", "green", "purple", "blue", "orange"]
};


export default function ProfileFromId() {
  const router = useRouter()
  let id = router.query.profileid

  return (
    <Profile>
      <div className="grid grid-cols-3 gap-2">
        <div className="text-red-600">
          <label>Nome : </label>
          <label className='text-slate-200'>KIng</label>
        </div>
        <div className="text-red-600">
          <label>Cognome : </label>
          <label className='text-slate-200'>Fra</label>
        </div>
        <div className="text-red-600">
          <label>Data di nascita : </label>
          <label className='text-slate-200'>06/05/1997</label>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 pt-10">
        <div className="text-red-600">
          <label>Indirizzo : </label>
          <label className='text-slate-200'>KIng</label>
        </div>
        <div className="text-red-600">
          <label>Civico : </label>
          <label className='text-slate-200'>Fra</label>
        </div>
        <div className="text-red-600">
          <label>Email : </label>
          <label className='text-slate-200'>06/05/1997</label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 w-2/3 pt-10">
        <div className="text-red-600">
          <label>Numero di Telefono : </label>
          <label className='text-slate-200'>KIng</label>
        </div>
        <div className="text-red-600">
          <label>N.Carta di Identità : </label>
          <label className='text-slate-200'>Fra</label>
        </div>
      </div>
      <PieChart data={data} options={options} ></PieChart>
    </Profile>
  )
}