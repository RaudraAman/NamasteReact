import React from 'react';

class User extends React.Component{
      constructor(props){
       super(props);
       this.state = {
          userInfo:{
            name:'dummyname',
            location:'defaultlocation',
          }
       }
      }
    async componentDidMount(){
        const data = await fetch(' https://api.github.com/users/RaudraAman')
        let res = await data.json();
        console.log(res)
        this.setState({userInfo:res})
    }
    componentDidUpdate(){
        console.log('componentdidupdated')
    }
    componentWillUnmount(){
        console.log('componentwillunmount')
    }
    render(){
        const{name,location,avatar_url}=this.state.userInfo;
        return(
            <div>
                <img src={avatar_url}/>
                <h1>{name}</h1>
                <h1>{location}</h1>
            </div>
        )
    }
}
export default User;