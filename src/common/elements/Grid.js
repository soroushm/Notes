// @flow

// ************* Note *************
// Gide for Flex Style https://css-tricks.com/snippets/css/a-guide-to-flexbox/

// ************* WTF  *************
// spend one hour on this Grid we should be use http://material-ui.com

import React from 'react'
import injectSheet from 'react-jss'
import humps from 'humps'

type Props = {
  classes: Object,
  children?: any,
  container?: boolean,
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline',
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch',
  alignContent?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly',
  styles?: Object
}

const Grid = (props: Props) => {
  return <div className={props.classes.root}>{props.children}</div>
}

const styles = () => ({
  root: ({ container, direction, alignItems, alignContent, alignSelf, justify, styles = {} }) => {
    const { root = null } = styles
    return {
      display: container && 'flex',
      direction: direction && humps.camelizeKeys(direction),
      alignItems: alignItems && humps.camelizeKeys(alignItems),
      alignContent: alignContent && humps.camelizeKeys(alignContent),
      alignSelf: alignSelf && humps.camelizeKeys(alignSelf),
      justifyContent: justify && humps.camelizeKeys(justify),
      ...root
    }
  }
})

export default injectSheet(styles)(Grid)
