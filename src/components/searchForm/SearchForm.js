import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as searchActions from '../../actions/searchActions'

import './SearchForm.css'

class SarchForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      place: this.props.place || '',
      location: this.props.location || '',
      disabled: true
    }
    this.searchPlace = this.searchPlace.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount () {
    this.checkInput()
  }

  handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
    this.checkInput()
  }

  checkInput () {
    const inputValid = this.state.place && this.state.location
    this.setState({
      disabled: !inputValid
    })
  }

  searchPlace (event) {
    event.preventDefault()
    this.props.actions.searchPlace(this.state.place, this.state.location)
  }

  render () {
    return (
      <div className='search-form'>
        <form onSubmit={this.searchPlace}>
          <input type='text' name='place' value={this.state.place} onChange={this.handleChange} className='input input-big' placeholder='I am looking for' />
          <input type='text' name='location' value={this.state.location} onChange={this.handleChange} className='input input-small' placeholder='place' />
          <button type='submit' className='button' disabled={this.state.disabled} />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SarchForm)
