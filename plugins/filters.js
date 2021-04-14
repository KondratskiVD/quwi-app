import Vue from 'vue'

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  const arr = value.split(' ')
  let capitalized_array = []
  arr.forEach((word) => {
    const capitalized = word.charAt(0).toUpperCase()
    capitalized_array.push(capitalized)
  })
  if (arr.length > 2) {
    capitalized_array = capitalized_array.slice(0,2)
  }
  return capitalized_array.join('')
})
