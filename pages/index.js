import React, { useState } from 'react';
import Header from '../comps/Header';
import Divider from '../comps/Divider';
import Input from '../comps/Inputs';
import Button from '../comps/Button';

export default function Home() {
  // const [contentColor, setContentColor] = useState(false);

  // const [contentImg, setContentImg] = useState(false);

  // const HandleMenu = (str) =>{
  //   // capture what happened in the menu & change the page state based on it
  //   // alert(str);
  //   if(str==="bg"){
  //     setContentColor("#DCA877");
  //     // interaction from MENU, change from PAGE
  //     // refer to week 3 vid 6 (@ ~9 min)
  //   } else if (str==="img"){
  //     setContentImg("/puppies.jpg")
  //   }
  // }

  return <div className="home">
    <div></div>
    <div>
      <Header />
      <Button />
      <Divider />
      <Input />
      <Input />
      <div></div>
      <Button />
      <Button />
    </div>
  </div>
}
