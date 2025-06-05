'use client'

import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext, useState } from 'react'

const Theme = () => {
    const {handleToggle, mode} = useContext(ThemeContext);

    return (
      <div>
        {mode === "dark" ? (
          <button onClick={handleToggle}>Sun</button>
        ) : (
          <button onClick={handleToggle}>Moon</button>
        )}
      </div>
    );
}

export default Theme
