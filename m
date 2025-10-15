problem 4:

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset ="UTF-8">
        <title> CS391|ZOE </title>
    </head>
    <body></body>
  </html>


problem 11:

function myPow(){
    let firstNumber=document.getElementById("first").value;
    firstNumber=Number(firstNumber);

    let secondNumber=document.getElementById("second").value;
    secondNumber=Number(secondNumber);

    let result=1;
    for (let i=0, i<secondNumber, i++){
    result= result*secondNumber;
    }

    document.getElementById("output").innerHTML = `<h3>${outputNumber}</hs>`
}



Problem 12
a.

const StyledDiv= styled.div`
    width: 20vw;
    margin: 0 auto;
`

const StyledInput=styled.input`
    display: block;
`;

const StyledButton=styled.Button`
    display: block;
`;


b.
export default function App(){

    const [bool, setBool]= useState(true);

    function update(){
        setBool(!bool);
    }

 return(   <StyledDiv>
        <StyledInput/>
        <StyledButton oneClick={update}>
         Push me
         </StyledButton>

    <StyledDiv>

   )



32.
a.

import {Link} from "react-router"

export default function Nav(){

    return(
        <nav>
            <ul>
                <li><Link to = `./index`> Parks</a><li>

    )
}


b.
import {Routes, Route} from "react-router";
import Parks from ./Parks.tsx;
import Universities from ./Universities.tsx;
import Museums from ./Museums.tsx;
import Restaurants from ./Restaurants.tsx;


export default function Roots(){
    return(
     <>
     <Nav/>

     <Routes path={`/`} element = {</Parks>}/>



    )



}



















