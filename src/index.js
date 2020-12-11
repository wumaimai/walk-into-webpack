import _ from 'lodash'

function component () {
  var element = document.createElement('div')
  var button = document.createElement('button')
  var br = document.createElement('br')

  button.innerHTML = _.join(['hello', 'world3333'], ' ')
  element.appendChild(br)
  element.appendChild(button)

  return element
}

document.body.appendChild(component())



