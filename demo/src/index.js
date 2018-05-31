import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'
import LoadingButton from '../../src/LoadingButton'
import Button from '../../src/Button'

class Demo extends Component {
  render() {
    return <div>
      <h1>RAIN UI DEMO</h1>
      <Button type="button" color="primary"> Hello </Button>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
