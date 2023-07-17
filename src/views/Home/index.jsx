import './style.scss'
import { Fragment, defineComponent } from 'vue'
import Counter from '../../components/Counter'
// import useUserStore from '../../store/modules/userStore'
import useStore from '../../store'

const Home = defineComponent((props, context) => {
  // Use single store
  // const userStore = useUserStore()

  // Or use root store
  const { userStore } = useStore()

  return () => (
    <Fragment>
      <div className="home-container">
        <p>
          <h1>Welcome! {userStore.username}</h1>
          <br />
          <h2>This is Parcel + Vue3 + JSX demo.</h2>
          <h2>Use JSX, write less, do more.</h2>
          <br />
          <Counter
            v-slots={{
              default: () => <span>Hello Counter!</span>,
              footer: () => <span>Hello Footer!</span>
            }}
          />
        </p>
      </div>
    </Fragment>
  )
})

export default Home
