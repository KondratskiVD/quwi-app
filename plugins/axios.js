
export default function ({ $axios, app }) {
  $axios.onError(error => {
    const statusCode = error.response.status
    switch (statusCode) {
      case 401:
        app.$store.dispatch('user/LOG_OUT')
          .then(() => {
            app.$toast.error('Please Log in again.')
          })
        break

      case 404:
        app.$toast.error('This page not found.')
        break

      case 417:
        const message = error.response.data.first_errors.email ?? error.response.data.first_errors.password
        app.$toast.error(message)
        break

      default:
        app.$toast.error('Error')
    }
  })
}
