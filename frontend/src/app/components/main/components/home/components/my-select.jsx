import React from 'react'

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <div>
      <select className="sort__select" value={value} name="" id="" onChange={(e) => onChange(e.target.value)}>
        <option className="sort__select-option" value="">
          {defaultValue}
        </option>
        {options.map((option) => {
          return (
            <option className="sort__select-option" key={option.value} value={option.value}>
              {option.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default MySelect
