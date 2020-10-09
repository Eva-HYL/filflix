/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/display-name */
import Link from 'next/link'
import React, { RefObject } from 'react'
import { Dropdown } from 'rsuite'

interface NavLinkProps {
  children: React.ReactNode
  href: string
  as?: string
}

const MyLink = React.forwardRef(
  (
    props: NavLinkProps,
    ref: string | ((instance: HTMLAnchorElement | null) => void) | RefObject<HTMLAnchorElement> | null | undefined
  ) => {
    const { href, children, as } = props
    return (
      <Link href={href} as={as}>
        <a ref={ref}>{children}</a>
      </Link>
    )
  }
)
const NavLink = (props: NavLinkProps) => <Dropdown.Item componentClass={MyLink} {...props} />

export default NavLink
