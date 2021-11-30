import React, { useState } from 'react'

function Reviews({reviews}) {

  return(
    reviews.map((person) => {
      const { id, name, date, rating, comment, img, like, dislike, love } = person;

      return (
        <div className="reviews-comments-item">
          <div className="review-comments-avatar">
            <img src={img} className="img-fluid" alt="" /> 
          </div>
          <div className="reviews-comments-item-text">
            <h4>{name}<span className="reviews-comments-item-date"><i className="ti-calendar theme-cl"></i>{date}</span></h4>

            <div className="listing-rating">
            <i className="fas fa-star active"></i><i className="fas fa-star active"></i><i className="fas fa-star active"></i>
            </div>
            <div className="clearfix"></div>
            <p>{comment}</p>
            <div className="pull-left reviews-reaction">
              <a className="comment-like active"><i className="ti-thumb-up"></i> {like}</a>
              <a className="comment-dislike active"><i className="ti-thumb-down"></i> {dislike}</a>
              <a className="comment-love active"><i className="ti-heart"></i> {love}</a>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default Reviews
