import { useContext } from 'react'
import Current from './components/Current'
import Navbar from './components/Navbar'
import { Context } from './context/Context'
import Loader from './components/Loader'
import Daily from './components/Daily'

function App() {
  const {data} = useContext(Context)
  if(data.length <= 0 || !data.current || !data.daily) return <Loader />
  return (
    <>
      <Navbar />
      <Current data={data.current} />
      <Daily data={data.daily} />
    </>
  )
}

export default App