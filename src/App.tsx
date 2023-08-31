import React, { useState } from 'react'
import { buildSearchParams } from './lib/utils'

const App: React.FC = () => {
  const [url, setUrl] = useState('https://example.com?name=Sajad&age=30')
  const searchParams = buildSearchParams(url)

  return (
    <main className="p-4">
      <h1 className="text-[20px] font-bold mb-4">Decode URL params</h1>

      <input
        type="text"
        placeholder="Enter URL"
        className="border px-2 py-1 w-full max-w-lg mb-5"
        autoFocus
        value={url}
        onChange={(event) => {
          setUrl(event.target.value)
        }}
      />

      {searchParams && searchParams.length > 0 ? (
        <div className="overflow-x-scroll max-w-5xl">
          <table>
            <thead>
            <tr>
              <th>Param</th>
              <th>Value</th>
            </tr>
            </thead>

            <tbody>
            {searchParams.map(([param, value]) => {
              return (
                <tr key={param}>
                  <td>{param}</td>
                  <td>{value}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className={url ? 'block' : 'hidden'}>No search params in URL.</p>
      )}
    </main>
  )
}

export default App
