import './style.scss'
import { Fragment, defineComponent, ref } from 'vue'

const Counter = defineComponent((props, context) => {
  const count = ref(0)

  const decrement = () => {
    count.value--
  }

  const increment = () => {
    count.value++
  }

  return () => (
    <Fragment>
      <p>{context.slots.default ? context.slots.default() : <span>This is slot default content.</span>}</p>
      <div>
        <button onClick={decrement}>CountDecrement</button>
        <span className='number'>{count.value}</span>
        <button onClick={increment}>CountIncrement</button>
      </div>
      <p>{context.slots.footer ? context.slots.footer() : <span>This is footer slot default content.</span>}</p>
    </Fragment>
  )
})

export default Counter
