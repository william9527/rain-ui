import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'
import LoadingButton from '../../src/LoadingButton'
class Demo extends Component {
  render() {
    return <div>
      <h1>my-component Demo</h1>
      <LoadingButton/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
