'use client'

import React from 'react'

const ToggleSwitch = ({ isToggled }: { isToggled: boolean }) => {
  const handleToggle = () => {}

  return (
    <div
      className={`w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ease-in-out flex items-center p-1 ${
        isToggled ? 'bg-primary' : 'bg-gray-300'
      }`}
      onClick={handleToggle}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isToggled ? 'translate-x-8' : 'translate-x-0'
        }`}
      />
    </div>
  )
}

export default ToggleSwitch
