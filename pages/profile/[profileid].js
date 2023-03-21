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
    ["Temperanza",10],
  ];

  const options = {
    title: "Virtù Personali",
    is3D: true,
    backgroundColor: "rgb(15, 23, 42)",
    colors: ["red","blue","green","purple","blue","orange"]
  };


export default function ProfileFromId() {
    const router = useRouter()
    let id = router.query.profileid

    return (
        <Profile>
            <div> User id : {id}</div>
            <PieChart data = {data} options = {options} ></PieChart>
        </Profile>
    )
}