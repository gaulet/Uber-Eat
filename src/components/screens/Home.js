import React, {useState} from "react";
import Homes from '../../components/Home'

const Home = ({ navigation }, ...props) => {
    return (
       <Homes navigation={navigation} {...props}></Homes>
    )
}


export default Home;