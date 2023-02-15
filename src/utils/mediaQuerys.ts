import { css } from 'styled-components'

interface StringArrayType {
  [index: string]: number
}

export const BREAKPOINTS: StringArrayType = {
  xs: 320,
  s: 360,
  w375: 375,
  w387: 387,
  w400: 400,
  ms: 480,
  xms: 640,
  preSm: 760,
  sm: 768,
  preMd: 1024,
  md: 1030,
  w1044: 1044,
  preMax: 1360,
  laptop: 1440,
  lg: 1460,
  max: 1460,
  xl: 1920
}

const breakpointsKeys = Object.keys(BREAKPOINTS)

export const scRespondTo = breakpointsKeys.reduce((accumulator: any, label: any) => {
  accumulator[label] = css`
    @media (min-width: ${BREAKPOINTS[label]}px)
  `
  return accumulator
}, {})