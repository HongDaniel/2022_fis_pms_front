import React from 'react';

function SearchIndexing(props) {
    const {currentTab} = props;
    let cur;
    if (currentTab === '0') {
        cur = '철';
    } else if (currentTab === '2') {
        cur = '건';
    } else {
        cur = '기관코드';
    }
    return (
        <div>
            <h1>{`${cur} 항목 검색 결과`}</h1>
            <div>dd</div>
        </div>
    );
}

export default SearchIndexing;