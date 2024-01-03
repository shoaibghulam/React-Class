import React from 'react'
import { Link } from 'react-router-dom'

export default function NavItem(props) {
    const {to,label} = props
  return (
    <Link
    to={to}
    className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
  >
    {label}
  </Link>
  )
}
