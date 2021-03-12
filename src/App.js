
import './App.css';
import react, {useEffect} from 'react'
import { atom , useRecoilState }from 'recoil'

import Testing from './components/testing'

const repoState = atom({
  key: "repos",
  default: 5
})

function App() {
  const [repos, setReops] = useRecoilState(repoState)
  return (
    <div>
      <Testing/>
    </div>

  )
}

export default App;
