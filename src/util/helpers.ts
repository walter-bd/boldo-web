export const validateDate = (dateInput: string, pastOrFuture?: 'past' | 'future') => {
  try {
    const date = new Date(dateInput)
    const isoString = date.toISOString().split('T')[0]
    if (pastOrFuture === 'past' && new Date() < date) return false // Please enter a Date in the past
    if (pastOrFuture === 'future' && new Date() > date) return false // Please enter a Date in the future
    return isoString === dateInput
  } catch (err) {
    return false
  }
}

export const validateTime = (timeInput: string) => {
  const match = timeInput.match(/((\d{2}):(\d{2}))/)

  if (match?.[0] !== timeInput || isNaN(+match?.[2]) || isNaN(+match?.[3]) || +match?.[2] > 23 || +match?.[3] > 59)
    return false
  else return true
}

export const avatarPlaceholder = (profession: string, gender?: string) => {
  let genderShort = gender === 'male' ? 'm' : 'f'
  return `/img/${profession}-${genderShort}.svg`
}
