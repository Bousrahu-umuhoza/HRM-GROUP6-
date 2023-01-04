import Button from './components/button'
import './App.css'

function App() {
  const elevetedButtonIsClicked=()=>{
    console.log("variant")
  }
  const filledButtonIsClicked=()=>{
    console.log("Mariette")
  
  }
  const tonalButtonIsClicked=()=>{
    console.log("Angel")
  
  }
  const outlinedButtonIsClicked=()=>{
    console.log("Benite")
  
  }
  const textButtonIsClicked=()=>{
    console.log("Didi")
  
  }

  return (
    <div className="App">
      <Button type="button" variant="elevated" onclick={elevetedButtonIsClicked}>
        elevated
      </Button>
      <Button type="submit" variant="filled" onclick={filledButtonIsClicked}>
        filled
     </Button>
     <Button type="button" variant="tonal" onclick={tonalButtonIsClicked}>
      tonal
      </Button>
      <Button type="submit" variant="outlined" onclick={outlinedButtonIsClicked}>
        outlined
     </Button>
     <Button type="button" variant="text" onclick={textButtonIsClicked}>
        text
      </Button>
    
    </div>
  )
}

export default App
