import dotenv from 'dotenv'
dotenv.config()

const URL = `https://646592869c09d77a62eecef7.mockapi.io/api/v1/Animals`

export async function fetchAnimals({ errorRate = 0 } = {}) {
  // simulate an error if desired
  const errorThreshold = 1.0 - errorRate
  const rando = Math.random()
  if (rando > errorThreshold) {
    throw new Error(
      `Request failed: triggered simulated error (${rando} > ${errorThreshold})`,
    )
  }

  // fetch data
  const response = await fetch(URL, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'GET',
  })
  if (!response.ok) throw new Error(`Request failed: ${response.statusText}`)
  const data = await response.json()
  console.log(data)
  return {
    ok: true,
    data: data.map(transform).sort(sorter),
  }
}

function transform(item) {
  console.log(item)
  return {
    createdAt: item.createdAt,
    name: item.animal,
    tags: item.name,
  }
}

function sorter(a, b) {
  if (a.createdAt < b.createdAt) return -1
  if (a.createdAt > b.createdAt) return 1
  return 0
}
