import React from "react";
import './Main.css';
import Box from './Box';

const Main = () => {
  return (
    <main className="main">
      <Box name="Matilda" title="CEO" age="35"/>
      <Box name="Clara" title="Designer" age="22"/>
      <Box name="Ryan" title="CFO" age="27"/>
    </main>
  )
};

export default Main;