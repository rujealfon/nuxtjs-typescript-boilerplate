import { Middleware } from '@nuxt/types'

const authenticated: Middleware = (context) => {
  // Use context

  console.log(context)

  //   if (true) {
  //     return redirect('/')
  //   }
}

export default authenticated
