import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as placeDetailActions from '../../actions/placeDetailActions'
import Footer from '../footer/Footer'
import PhotoList from '../photoList/PhotoList'
import TipList from '../tipList/TipList'
import Rating from '../rating/Rating'

import logo_detail from '../../assets/images/logo_detail.png'
import category from '../../assets/images/category.png'
import location_ico from '../../assets/images/location.png'
import contact_ico from '../../assets/images/contact.png'

import './PlaceDetail.css'

class PlaceDetail extends Component {
  componentWillMount () {
    const id = this.props.params.id
    this.props.actions.getPlaceDetail(id)
  }
  render () {
    const {bestPhoto, name, photos, tips, location, contact, rating, ratingSignals} = this.props.place
    return (
      <div className='wrapper'>
        <div className='place-detail'>
          <header className='place-detail-header'>
            <img src={logo_detail} className='logo' alt='logo' />
            <img src={category} className='category' alt='category' />
            <div className='image-cover' />
            <div className='line' />
            <div className='place-name'>{name}</div>
            <Rating rating={rating} />
            <div className='place-information'>
              <div><img src={location_ico} /> {location.address}</div>
              <div><img src={contact_ico} /> {contact.formattedPhone}</div>
              <div>{ratingSignals}</div>
            </div>
            <img src={bestPhoto.prefix + '1280x600' + bestPhoto.suffix} className='cover-image' alt='cover' />
          </header>
          <content className='place-detail-content'>
            <PhotoList photos={photos} />
            <TipList tips={tips} />
          </content>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {place} = state.placeDetail
  return {
    place
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(placeDetailActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetail)
