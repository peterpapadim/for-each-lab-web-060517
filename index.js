var iterativeLog = (array) => {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

var iterate = (callback) => {
  array = [1, 2, 3, 4, 5]
  array.forEach(callback)
  return array
}

var doToArray = (array, callback) => {
  array.forEach(callback)
}
