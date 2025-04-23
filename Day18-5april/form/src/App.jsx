
import "./app.css"
function App() {
  return (
  <div className="body">
    <form  id="form" action="">

        <h1 id="h1">Sign Up</h1>
        <label className="inp-block" for="name">Username:
            <input type="text" className="" placeholder="Choose a username" id="name"/>
            <p id="usererror" className="error"></p>
        </label>
        <label className="inp-block" for="email">Email:
            <input type="text" className="" placeholder="Enter your email" id="email"/>
            <p id="emailerror" className="error"></p>
        </label>
        <label className="inp-block" for="pass">Password:
            <input type="password" className="" placeholder="Enter a strong password" id="pass"/>
            <p id="passerror" className="error"></p>
        </label>
        <label className="inp-block" for="cpass">Confirm Password:
            <input type="password" className="" placeholder="Reenter your password" id="cpass"/>
            <p id="cpasserror" className="error"></p>
        </label>
        <button type="submit"> Sign Up</button>
    </form>
    </div>
  )
}

export default App
