import TabsStack from "./TabsStack";
import AuthStack from "./AuthStack";
import { useState } from "react";

// stack switcher based on user
const StackSwitcher = ()=>{
    const [user, setUser] = useState(true);
    return user? <TabsStack/> : <AuthStack/>
}

export default StackSwitcher;