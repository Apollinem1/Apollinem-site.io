import React from "react";
import { observer } from "mobx-react-lite";
import { observable } from "mobx";

export const store = observable({
   theme: true,

   changeTheme() {
       this.theme= !this.theme
       console.log(this.theme)
   }
    
})