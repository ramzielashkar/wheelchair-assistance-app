import TabsStack from "./TabsStack";
import AuthStack from "./AuthStack";
import { useState } from "react";
import { useSelector } from 'react-redux'

// stack switcher based on user
const StackSwitcher = ()=>{
    const user = useSelector((state)=>state.token)
    return user? <TabsStack/> : <AuthStack/>
}

export default StackSwitcher;