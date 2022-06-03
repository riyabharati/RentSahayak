


export const generateDisplayEmail = email => {
  const atIndex = email.indexOf('@')
  return `${email.slice(0,2)}****${email.slice(atIndex)}`
}

export const capitalizeFirstLetterOfEachWord=
    sentence => sentence.split(' ').map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ')




export const getYearList = () => {
  const currentYear = new Date().getFullYear()
  let years= [] 
  Array.from(Array(150)).map((_, i) => {
    years.push((currentYear - i).toString())
  })
  return years
}

export const isNumber = str => /^-?[\d.]+(?:e-?\d+)?$/.test(str)

