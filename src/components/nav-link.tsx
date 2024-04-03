import { ComponentProps } from 'react'

export interface NavLinkProps extends ComponentProps<'a'> {
  children: string
}

export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} className="cursor-pointer text-sm font-medium text-zinc-300">
      {props.children}
    </a>
  )
}
