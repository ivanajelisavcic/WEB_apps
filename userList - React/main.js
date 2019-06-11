const users = [
    {
        "name": "Bob Rock",
        "email": "bob@rock.com",
        "dob": "25.05.2000."
    },

    {
        "name": "Alan Ford",
        "email": "alan@ford.com",
        "dob": "27.05.2008."
    },

    {
        "name": "Number One",
        "email": "number@one.com",
        "dob": "28.05.2007."
    },

    {
        "name": "Sir Oliver",
        "email": "sir@oliver.com",
        "dob": "24.05.2003."
    }]

const Header = (props) => {
    return (
        <header className="header">
            <h1>{props.title}</h1>
        </header>
    )
}


const User = (props) => {
    return (
        <div className="singleUser">
            <h4>name: {props.userName}</h4 >
            <p>e-mail: {props.userEmail}</p>
            <p>date of birth: {props.dob}</p>
        </div>
    )
}


const UserList = (props) => {
    return (
        <div>
            {props.users.map((user, i) => {
                return <User userName={user.name} userEmail={user.email} dob={user.dob} key={i} />
            })}
        </div>
    )
}



const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>&copy; {year} CopyrightBIT</p>
        </footer>
    )
}


const App = () => (
    <div>
        <Header title="React Users" />
        <UserList users={users} />
        <Footer />
    </div>
);

ReactDOM.render(<App />, document.querySelector('.root'));

