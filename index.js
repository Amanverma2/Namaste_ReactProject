// const heading = React.createElement("h1",{id:"heading"},"Hellow from React");

const heading = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: "child" },
    [React.createElement("h1",{},"H1 tag"),React.createElement("h1",{},"H2 tag")]
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)
