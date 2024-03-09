export const showDate = (props) => {
  const dateLocal = new Date(props.post.date)
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }
  return dateLocal.toLocaleDateString('en-EN', options).replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase()
  })
}
