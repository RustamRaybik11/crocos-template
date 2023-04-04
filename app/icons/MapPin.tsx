import React from 'react'

const MapPin = ({stroke = '#C96332'}) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6666 8.33335C16.6666 13.3334 9.99992 18.3334 9.99992 18.3334C9.99992 18.3334 3.33325 13.3334 3.33325 8.33335C3.33325 6.56524 4.03563 4.86955 5.28587 3.61931C6.53612 2.36907 8.23181 1.66669 9.99992 1.66669C11.768 1.66669 13.4637 2.36907 14.714 3.61931C15.9642 4.86955 16.6666 6.56524 16.6666 8.33335V8.33335Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 10.8333C11.3807 10.8333 12.5 9.71402 12.5 8.33331C12.5 6.9526 11.3807 5.83331 10 5.83331C8.61929 5.83331 7.5 6.9526 7.5 8.33331C7.5 9.71402 8.61929 10.8333 10 10.8333Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
  )
}

export default MapPin