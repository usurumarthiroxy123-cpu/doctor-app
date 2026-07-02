import { useNavigate } from 'react-router-dom'
function Navbar() {
  let navigate=useNavigate()
  return (
    <header>
        <div>Doctor App</div>
        <div>
            <button onClick={()=>navigate('/')}>Home</button>
            <button onClick={()=>navigate('/add-doctor')}>Add doctor</button>
        </div>
    </header>
  )
}

export default Navbar