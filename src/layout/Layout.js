import { View, Text } from 'react-native'
import React from 'react'
import Login from '../features/login/Login'


const Layout = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    return (
        <View>
            <Login />
        </View>
    )
}

export default Layout