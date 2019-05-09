import { grey, white, yellow } from 'material-colors'

export const theme = {
  direction: 'ltr',
  space: {
    unit: 8,
    size: {
      sm: 25,
      md: 40,
      lg: 50
    }
  },
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  palette: {
    primary: {
      light: yellow[200],
      main: yellow['a400'],
      dark: yellow[900]
    },
    secondary: {
      light: 'blue',
      main: 'blue',
      dark: 'blue'
    },
    assets: {
      backgroundGrey: grey[50],
      grey: grey[300],
      background: white,
      text: {
        white: white,
        grey: grey[700],
        dark: grey[900]
      }
    },
    error: 'red',
    text: 'gray'
  }
}

export const choseColor = (color?: string, theme: Object) => {
  switch (color) {
    case 'primary':
      return theme.palette.primary.main
    case 'secondary':
      return theme.palette.secondary.main
    case 'default':
    default:
      return theme.palette.assets.grey
  }
}
export const choseTextColor = (color?: string, theme: Object) => {
  switch (color) {
    case 'primary':
      return theme.palette.primary.main
    case 'secondary':
      return theme.palette.secondary.main
    case 'default':
    default:
      return theme.palette.assets.text.dark
  }
}

export const choseSize = (color?: string, theme: Object) => {
  switch (color) {
    case 'lg':
      return theme.space.size.lg
    case 'md':
      return theme.space.size.md
    case 'sm':
    default:
      return theme.space.size.sm
  }
}
