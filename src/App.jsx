import { Fragment, defineComponent } from 'vue'
import './style.scss'
import Home from './views/Home'

const App = defineComponent((props, context) => {
  return () => (
    <Fragment>
      <Home />
    </Fragment>
  )
})

export default App
