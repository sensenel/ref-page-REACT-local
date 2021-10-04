export function getContent() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          continent: 'Africa',
          length: '6,650 km',
          outflow: 'Mediterranean'
        })
      }, 1500)
    })
  }