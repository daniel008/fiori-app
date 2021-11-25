import React from "react";
import {Avatar, ShellBar, ShellBarItem} from "@ui5/webcomponents-react"
import "@ui5/webcomponents-icons/dist/add.js";
import {Routes, Route, Navigate} from 'react-router-dom'
import {Home} from './Home';
import {Detail} from './Detail';

export function MyApp() {
  return (
  <>
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
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="detail" element={<Detail />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  </>
  );
}