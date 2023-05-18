import * as React from 'react'

export function Animal({ name, tags }) {
  return (
    <li className="flex text-2xl mb-2">
      <div className="font-bold w-80">{name}</div>
      <div className="flex">
          <div className="px-2 mr-2 rounded-lg bg-blue-300 text-white">
            {tags}
          </div>
      </div>
    </li>
  )
}
