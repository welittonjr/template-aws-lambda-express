import app from './src/boot'
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`)
})
