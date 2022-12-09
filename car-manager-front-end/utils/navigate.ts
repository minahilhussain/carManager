import Router from 'next/router'

export const navigate = (param: string) => {
  Router.push(param)
}