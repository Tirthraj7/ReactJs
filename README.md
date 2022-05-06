# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



> > >
npm i react-router-dom@5.2.0 

npm i axios

n stable


13. Key in ReactJS

    <li key={numbers}>{numbers}</li> <!-- For use with List -->

    <Testing key={singers.id} value={singers.id}></Testing> <!-- Use for Test -->

14. Styling & CSS basics

    > > > let className=props.isvalue ? 'Demo' : 'Demo1';

15. CSS Module & Inline Stylesheet

    <h1 className={`${className} Demo2`}>Hello Stylesheet</h1>

16. Form using State along with Event Handling

    <input type='text' value={this.state.Singername} onChange={this.handleSingername}></input>

    <textarea value={this.state.City} onChange={this.handleCity}></textarea>  

17. Routing

    <li><Link to='/'>Artist</Link></li>

    <Switch><Route path='/Records'><Records></Records></Route></Switch>

18. React Life Cycle Methods

    > > > Mouting, Updating, Unmouting

        static getDerivedStateFromProps(props,state){
                console.log('Lyfcyc_A : this.getDerivedStateFromProps')
                return null;
            }
        componentDidMount(){
                console.log('Lyfcyc_A : componentDidMount')
            }
        componentDidUpdate(prevProps, prevState){
                console.log('Component Updated')
            }
    > > >
        <div>
            Lyfcyc_A
                <Lyfcyc_B></Lyfcyc_B>
        </div>

19. HTTP GET REQUEST - Fetch data from rest API

    -- axios -- 
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })

20. HTTP GET REQUEST - MAP Function

        axios.get('https://jsonplaceholder.typicode.com/posts')
    <div>
          List Post Data
          {
              posts.length ?
              posts.map(post=><div key={post.id}>{post.title}</div>):null
          }
          {
              error ? <div>{error}</div>:null
          }
    </div>

21. HTTP POST REQUEST Using Axios

    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        console.log(this.state)

        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)

        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

22. Introduction to Hooks

    > New Addition in React 16.8 

    > Are functions > React state & lifecycle features > function components & need to add some state to it.

    > Allows you to use without classes ..

    > Built-in Hooks like useState, useEffect etc   

23. useState Hook

    const [Singername,setname]=useState('Ap Dhillon');
    const [count,setcount]=useState('Subscribers');

24. useEffect Hook

    useEffect(()=>{
        console.log('Karan Randhawa')
    });

25. useState with Previous State

    const [counter,setcounter]=useState(0);
    const [counter1,setcounter1]=useState(0);

26. useState with Object

    const [name,setname] = useState({fName:'',lName:''});

    <div>
        {name.fName}
        {name.lName}
        {JSON.stringify(name)}
    </div>

27. useState with Array

    const[items,setItems]=useState([])

28. How Conditionally Works ..

    if(prevState.count !== this.state.count){
        console.log('Testing')
        document.title=`clicked ${this.state.count} times`
    }

29. Retrieve the position (X,Y) of browser

    this.state={
            x:0,
            y:0
        }

    logmouseposition=e=>{
        this.setState({x:e.clientX,y:e.clientY})
    }

    <div>
          X-{this.state.x} Y-{this.state.y}
    </div>

30. Context API

    export const mycontext = React.createContext();

> > > A

    <div>
          <h1>Component A</h1>
          <mycontext.Provider value={this.state}>
            <B/>
            <C/>
          </mycontext.Provider>
    </div>

> > > B

    <div>
            <div>Component B</div>
            <mycontext.Consumer>{data => <h3>{data.name}</h3>}</mycontext.Consumer>
    </div>

> > > C

    <div>
          <h1>Component C</h1>
          <mycontext.Consumer>{data => <h3>{data.fees}</h3>}</mycontext.Consumer>
    </div>

31. Context API - Part 2

    export const mycontext=React.createContext();
    export const Provider=mycontext.Provider;
    export const Consumer=mycontext.Consumer;

> > > A

    import { Provider } from './Context';

    handleClickContext=()=>{
        this.setState({fees:this.state.fees*7, name:this.state.name='Jassie gill', prof:this.state.prof='Singer'})
    }

    const contextValue={
          data:this.state,
          handlecheck:this.handleClickContext
    }

    <Provider value={contextValue}>
        <B/>
        <C/>
    </Provider>
    
> > > B

    import { Consumer } from './Context'

    <Consumer>
                {
                    ({data,handlecheck})=>(
                        <div>
                            <h3>
                                {data.fees}, {data.name}, {data.prof}
                            </h3>
                                <button onClick={handlecheck}>Change Fees</button>
                        </div>
                    )
                }
    </Consumer>

> > > C

    import { Consumer } from './Context'

    <Consumer>{data => <h3>{data.fees}</h3>}</Consumer>

32. Higher Order Component

33. Form validation using Formik & Yup library

