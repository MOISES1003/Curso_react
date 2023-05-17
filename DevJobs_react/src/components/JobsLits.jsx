import jobs from "../data/data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function JobsList() {
  const [jobData, setJobData] = useState(jobs);
  const [searchTerm,setSearchTerm] = useState("");
  const [location,setLocation] = useState("");
  const searchTermvalue = searchTerm.toLowerCase();
  const locationSearHandler =()=>{
    const filterData = jobs.filter((job)=> job.location.toLowerCase().includes(location.toLowerCase()))
    setJobData(filterData);
  }; 

  const filtrarDatos =(e)=>{
    const filtroValor = e.target.value
    if(filtroValor==="full-time"){
        const filterData = jobs.filter((job)=>job.contract==="Full Time")
        setJobData(filterData);
    
    }else if(filtroValor==="part-time"){
        const filterData = jobs.filter((job)=>job.contract==="Part Time")
        setJobData(filterData);
    }else if(filtroValor==="freelance"){
        const filterData = jobs.filter((job)=>job.contract==="Freelance")
        setJobData(filterData);
    }
  }
  return (
    <section className="job__list">
      <div className="container">
        <div className="job__list__wrapper">
            <div className="search__panel">
                <div className="search__panel-01">
                    <input type="text" placeholder="buscar por empresa o titulo"
                    value={searchTerm} 
                    onChange={(e)=>setSearchTerm(e.target.value)}/>
                </div>
                <div className="search__panel-02">
                    <input type="text" placeholder="buscar por ubicacion"
                        value={location} 
                        onChange={(e)=>setLocation(e.target.value)}/>
                        <button onClick={locationSearHandler}>buscar</button>
                </div>
                <div className="search__panel-03">
                 <select name="" id="" onChange={filtrarDatos}>
                    <option value="">filtro por trabajo</option>
                    <option value="full-time">tiempo completo</option>
                    <option value="part-time">tiempo parcial</option>
                    <option value="freelance">Freelance</option>
                 </select>
                </div>
            </div>

          <div className="jobs__wrapper">
            {jobData?.filter((job)=>{
                if(searchTerm==="") return job;
                if(job.position.toLowerCase()
                .includes(searchTermvalue) || 
                job.company.toLowerCase().includes(searchTermvalue))
                return job;
            })
            .map((item) => (
              <div className="job__item" key={item.id}>
                <img src={item.logo} alt="" height={150} />
                <div className="job__content">
                  <h5>
                    {item.postedAt} - {item.contract}{" "}
                  </h5>
                  
                  <h1>
                    <Link to={`/jobs/${item.position}`}>{item.position}</Link>
                  </h1>
                  <p>{item.company}</p>
                  <div className="location">
                    <p>
                      location: <span>{item.location}</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))
            }
       
          </div>
        </div>
      </div>
    </section>
  );
}
