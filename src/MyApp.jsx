import React from "react";
import {Avatar, ShellBar, ShellBarItem} from "@ui5/webcomponents-react"
import "@ui5/webcomponents-icons/dist/add.js";

export function MyApp() {
  return (
  <div>
    <ShellBar 
      logo={<img src="reactLogo.png" alt="logo" />} 
      profile={
      <Avatar>
        <img src="profilePictureExample.png"  alt="profile" />
      </Avatar>}
      primaryTitle="Daniel's App"
    >
      <ShellBarItem icon="add" text="Add" />
    </ShellBar>
  </div>
  );
}