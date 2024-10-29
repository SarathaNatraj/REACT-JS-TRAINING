export function Login() {
    return (
      <div>
  
        <div>
          <input data-testid="email" type="email" name="email" placeholder="email"/>
        </div>
        <div>
          <input data-testid="password" type="password" name="password" placeholder="password"/>
        </div>
  
        <div>
          <button data-testid="signin" type="button">Sign In</button>
          <button  data-testid="signup" type="button">Sign Up</button>
        </div>
  
      </div>
    )
  }