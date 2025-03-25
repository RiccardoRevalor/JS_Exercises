import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'



//define new Component: Welcome
function Welcome(props) {

    //props has different properties
    //language

    if (props.times){
       //I need to return a **list** of copomponents
       let list = [];
       for (let i=0; i < props.times; i++){
            list.push(0);
       }
       return list.map((e) => <singleWelcome lang = {props.lang} />);
    } else {
        return singleWelcome(props)
    }
}


function singleWelcome(props){
    if (props.lang && props.lang === 'it') {
        return <div>
            <h2>Benvenuto nel Mondo di React!</h2>
            <img src={reactLogo} alt="React Logo" />
            <img src={viteLogo} alt="Vite Logo" />
        </div>

    } else if (props.lang && props.lang === 'es') {
        return <div>
            <h2>Bienvenido al Mundo de React!</h2>
            <img src={reactLogo} alt="React Logo" />
            <img src={viteLogo} alt="Vite Logo" />
        </div>

    } else {
        return <div>
            <h2>Welcome to the React World!</h2>
            <img src={reactLogo} alt="React Logo" />
            <img src={viteLogo} alt="Vite Logo" />
        </div>
    }
}

export default Welcome