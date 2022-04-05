import React, {useState} from 'react';
import puppy from "../Media/images/img1.png"
import puppy2 from "../Media/images/img2.jpeg"
import puppy3 from "../Media/images/img3.jpeg"
import puppy4 from "../Media/images/img6.jpeg"
import puppy5 from "../Media/logo.png"
import styled from "styled-components";
import {Style} from "../Style";

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
            {props.f_id === undefined ?
                <h1>대상 목록을 선택해주세요.</h1>
                :
                <>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img style={{width: '1100px', height: '1020px'}} src={`http://3.38.19.119:8080/images/modify/${props.f_id}/${currentPage}`} />
                        {/*origin => modify*/}
                    </div>
                    <div style={{ margin: '10px', display: 'flex', justifyContent: 'center'}}>
                        <Button style={{width: '50px', margin: '10px'}} onClick={handleClickLeft}> ← </Button>
                        <h2 style={{margin: '10px'}}>{currentPage} 페이지</h2>
                        <Button style={{width: '50px', margin: '10px'}} onClick={handleClickRight}> → </Button>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <form onSubmit={handleClickNumber}>
                            <Input min={1} max={totalCount} type={'number'} value={number} onChange={handleChange}/>
                            <Submit type={'submit'} value={'이동'}/>
                        </form>
                    </div>
                </>
            }

        </div>

    );
}

const Button = styled.button`
  background-color: ${Style.color2};
  color: #ffffff;
  font-size: 16pt;
  font-weight: bold;
  border: 0;
  border-radius: 10px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Submit = styled.input`
  background-color: ${Style.color2};
  color: #ffffff;
  font-size: 13pt;
  border: 0;
  border-radius: 10px;
  margin: 8px;
  width: 70px;
  height: 30px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Input = styled.input`
  border-radius: 10px;
  border: 0.01px solid grey;
  font-size: 13pt;
  margin: 10px;
  width: 100px;
  height: 28px;
`

export default ImageContainer;