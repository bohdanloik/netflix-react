import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../requests';
import uniqid from 'uniqid';

function Home() {
  return (
    <div>
        <Main />
        <Row rowID={uniqid()} title='UpComing' fetchURL={requests.requestUpcoming}/>
        <Row rowID={uniqid()} title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID={uniqid()} title='Trending' fetchURL={requests.requestTrending}/>
        <Row rowID={uniqid()} title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row rowID={uniqid()} title='Horror' fetchURL={requests.requestHorror}/>
    </div>
  )
}

export default Home