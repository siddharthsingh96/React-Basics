import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Filter from './Components/Filter';
// import './App.css';
import { toast } from 'react-toastify';
import { apiUrl, filterData } from './data';
import Spinner from './Components/Spinner';

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const[Category,setCategory]=useState(filterData[0].title);
  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      console.log("Network me koi dikkat hai", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    console.log("Filter Data in App before rendering Filter:", filterData);
    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex-col flex bg-bgDark2'>
   <div>
   <Navbar />
   </div>
    <div className="bg-bgDark2">
    <div>
      <Filter filterData={filterData} 
      Category={Category}
      setCategory={setCategory}
      />
      </div>
    <div className='w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center'>
    {loading ? <Spinner /> : <Cards courses={courses}
    Category={Category} />}
   
    </div>
    </div>
        
    </div>
  );
};

export default App;
