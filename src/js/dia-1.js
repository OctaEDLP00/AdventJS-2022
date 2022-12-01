function wrappingJS(gifts) {
  const wrapped = []
  gifts.forEach((gift) => {
    const wrap = '*'.repeat(gift.length + 2)
    wrapped.push(`${wrap}\n*${gift}*\n${wrap}`)
  })
  return wrapped
}

const gifts = [
  'book',
  'game',
  'soocks'
]

wrappingJS(gifts)
