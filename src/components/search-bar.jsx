import React, { useContext, useState } from 'react';
import Container from './container'; // Import the default export without using an alias
import { search as searchIcon, voice } from '../assets/svgs';
import { TubeCloneContext } from '../context/context';
import { getDataFromAPI } from '../service/get';
import $ from 'jquery';
const SearchBar = () => {
    const [search,setSearch] = useState('');
    const {setVideos,setLoading} = useContext(TubeCloneContext)
    const handleClickSearch = ()=>{
        setLoading(true)
        getDataFromAPI(`search?part=snippet&q=${search}`).then((data)=>{
            setVideos(data)
            setLoading(false)
        })
        $('input').toggleClass('show');
        $('.navigation_search .col-md-10').toggleClass('d-flex')
    }
    const handleChangeSearch = (e)=>{
        setSearch(e.target.value)
    }
    return (
        <Container className={'navigation_search_container p-0'}>
            <div className="navigation_search d-flex flex-row align-items-center">
                <div className="row w-100">
                    <div className="col-md-10 p-0">
                        <input type="text" placeholder="Search . . ." onKeyDown={(e)=>{e.key === 'Enter' && handleClickSearch()}} onChange={handleChangeSearch} value={search}/>
                    </div>
                    <div className="col-md-2 p-0">
                        <button disabled={search} className="btn"onClick = {handleClickSearch}>
                            <img src={searchIcon} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="navigator_search_voice">
                <i className='d-flex align-items-center' style={{
                    width: '24px',
                    height: '24px',
                    padding: "3px 5.5px",
                }}>
                    <img src={voice} alt="" />
                </i>
            </div>
        </Container>
    );
}

export default SearchBar;
