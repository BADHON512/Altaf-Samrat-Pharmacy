import React from 'react'
import TopHeader from './TopHeader'
import SecondHeader from './SecondHeader'

type Props = {}

const Header = (props: Props) => {
    return (
        <div><TopHeader />
            <SecondHeader /></div>
    )
}

export default Header