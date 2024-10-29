import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState<Array<string>>(['']);
  
  function isLoading(): boolean {
    return true;
  }
  
  return (
    <div>

    </div>
  );
}

export default App;
