import React, {useState} from 'react';
import puppy from "../Media/images/img1.png"
import puppy2 from "../Media/images/img2.jpeg"
import puppy3 from "../Media/images/img3.jpeg"
import puppy4 from "../Media/images/img6.jpeg"
import puppy5 from "../Media/logo.png"

function ImageContainer(props) {
    const data = [puppy, puppy2, puppy3, puppy4, puppy5];

    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(data.length); // axios.get => setTotalCount(res.length)
    const [number, setNumber] = useState(1);
    const handleClickRight = () => {
        setCurrentPage((i) => {
            if (i < totalCount) {
                return i+1;
            } else {
                return i;
            }
        })
    };
    const handleClickLeft = () => {
        setCurrentPage((i) => {
            if (i > 1) {
                return i-1;
            } else {
                return i;
            }
        })
    }
    const handleChange = (e) => {
        setNumber(parseInt(e.target.value));
    }
    const handleClickNumber = (e) => {
        e.preventDefault();
        setCurrentPage(number);
    }
    const handleKeyDown = (e) => {
        e.preventDefault();
        if (e.keyCode === 39) {
            handleClickRight();
        }
        else if (e.keyCode === 37) {
            handleClickLeft();
        }
    }

    return (
        <div onKeyDown={handleKeyDown} tabIndex="0">
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img style={{width: '1100px', height: '1050px'}} src={data[currentPage-1]} />
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button onClick={handleClickLeft}> ← </button>
                <div>{currentPage}</div>
                <button onClick={handleClickRight}> → </button>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <form onSubmit={handleClickNumber}>
                    <input min={1} max={totalCount} type={'number'} onChange={handleChange}/>
                    <input type={'submit'} value={'이동'}/>
                </form>
            </div>
        </div>

    );
}

export default ImageContainer;