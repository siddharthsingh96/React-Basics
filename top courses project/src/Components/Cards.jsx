import React, { useState } from "react";

import Card from "./Card";
const Cards = (props) => {
    let courses=props.courses;
    let Category=props.Category;
    const[LikedCourses,setLikedCourses]=useState( [] ) ;
    function getCourses(){
        if(Category==="All"){
        let allCourses=[];
        Object.values(courses).forEach(array=>{
            array.forEach(cd =>{
                allCourses.push(cd);
            })
        })
        return allCourses;
    }
    else{
       return courses[Category];
    }
    }
    return(
    <div className="flex flex-wrap justify-center gap-4 mb-4">
     {
       
        getCourses().map((course)=>(
      <Card key={course.id} 
      course={course}
      LikedCourses={LikedCourses}
      setLikedCourses={setLikedCourses}
      />
        ))
     }
    </div>
   
)
}
export default Cards;