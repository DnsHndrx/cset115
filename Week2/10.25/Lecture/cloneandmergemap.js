//clone//
const original = new Map([
    [1, 'one']
  ])
  
  const clone = new Map(original)
  
  console.log(clone.get(1))       // one
  console.log(original === clone) // false (useful for shallow comparison)


//merge//
  const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ])
  
  const second = new Map([
    [1, 'uno'],
    [2, 'dos']
  ])
  
  // Merge two maps. The last repeated key wins.
  // Spread operator essentially converts a Map to an Array
  const merged = new Map([...first, ...second])
  
  console.log(merged.get(1)) // uno
  console.log(merged.get(2)) // dos
  console.log(merged.get(3)) // three