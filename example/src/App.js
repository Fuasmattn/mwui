import { Button, Typography } from '@fuasmattn/mwui';

function App() {
  return (
    <div>
      <Typography variant="display" component="h1" text="Hello World" />
      <Button label="primary" />
      <Button variant="secondary" label="secondary"/>
      <Button label="primary outlined" outlined />
      <Button variant="secondary" label="secondary outlined" outlined />
    </div>
  );
}

export default App;
