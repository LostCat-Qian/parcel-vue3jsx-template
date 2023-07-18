import { Fragment, defineComponent } from 'vue'
import './style.scss'
import Home from './views/Home'

const App = defineComponent((props, context) => {
  return () => (
    <Fragment>
      <RouterLink to="/home">
        <button>HomePage</button>
      </RouterLink>
      &nbsp;
      <RouterLink to="/about">
        <button>AboutPage</button>
      </RouterLink>
      <h2>If you can write vue in jsx syntax like me, then I think this thing is really cool!</h2>
      <RouterView />
    </Fragment>
  )
})

export default App
