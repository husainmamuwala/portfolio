import React from 'react'
import { Listnew } from '../Technologies/TechnologiesStyles'

function Listboxy(title) {
  return (
    <Listnew>
        <ListItemnew>
      <picture>
        <DiHtml5 size="4rem"/>
      </picture>
      <ListContainernew>
      <ListTitle>{title}</ListTitle>
      </ListContainernew>
      </ListItemnew>
    </Listnew>
  )
}

export default Listboxy