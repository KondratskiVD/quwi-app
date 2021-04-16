
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
        app.$toast.error(error.response.data.first_errors.email)
        break

      default:
        app.$toast.error('Error')
    }
  })
}
