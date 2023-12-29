import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardTitle, Stack } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import MyVerticallyCenteredModal from './components/model';
import React from 'react';

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
   <div className='App'>
     {/* Model Container */}
     <MyVerticallyCenteredModal 
       show={modalShow}
       onHide={() => setModalShow(false)}
       balance={0}
       total={0.003}
     />
     {/* Header */}
      <div className='header-container'>
        <div className='header' >
          {/* Logo Image on Left */}
          <img
            src="logo.png" // Replace with the actual path to your PNG logo image
            alt="Logo"
          />

          {/* Bootstrap Button on Right */}
          <Button onClick={() => setModalShow(true)} variant="secondary" size="lg" active className='button btn rounded-pill px-4'>
            connect
          </Button>
        </div>
     </div>
      {/* Body */}
      <div className='background text-start  ' style={{backgroundColor: 'black'}}>
        <Container as={'div'} >
          <Row className='  flex-column flex-md-row flex-lg-row min-vh-100  align-items-center justify-content-center h-100 text-white  '>
            <Col gap={6} xs={10}  md={8}  className=' gap-4  justify-content-between py-5 h-100 bg-gray '>
              <h4 as={'h3'} className=' pb-2 fs-4 font-weight-normal'>UNMATCHED TOKEN POTENTIAL</h4>
              <h1 as={'h1'} className='pb-2  font-weight-bold ' style={{ fontSize: 'calc(1.775rem + 1.5vw) !important' }} ><span as={'span'} className='text-black '>Token Exchange</span> is <br /> Gateway to Token Universe</h1>
              <p as={'p'} className='pb-4'>Token Exchange provides you with the gateway to the world of tokens, Offering easy access to a wide range of assets and liquidity options. With Token Exchange, you can effortlessly navigate the complex world of token trading.</p>
              <Button onClick={() => setModalShow(true)} variant='outline-light' className='rounded-pill px-5' size='lg'>Connect</Button>
            </Col>
            {/* Right Card */}
            <Col xs={12} md={4} >
              <Stack className='bg-white bg-opacity-10  p-4 rounded-5 border border-1   border-white   ' gap={4}>
                 <h2 className='font-weight-bold text-center '>Massonary Token </h2>
                  <div className='d-flex border border-white rounded-5  p-3  align-items-center  justify-content-around'>
                    <h2 className='font-weight-bold '>1.00 <span as={'span'} className='font-weight-normal fs-5'>MS</span></h2>
                    <div className='d-flex  flex-column align-items-center'>
                      <h3 className='font-weight-bold fs-4'>4.82 <span as={'span'} className='font-weight-normal fs-6 text-black '>ETH</span>
                      <br />
                      <span className='font-weight-normal fs-6 top-0 text-primary  '>Balance : 658000</span>
                      </h3>
                    </div>
                  </div>
                  <Button onClick={() => setModalShow(true)}  className='rounded-pill button px-5' size='lg'>Connect</Button>
                  {/* Progress Bar  */}
                  <div>
                    <div className='d-flex justify-content-between'>
                      <p>MS: <strong>4500</strong></p>
                      <p>MS: <strong>666,666,666</strong></p>
                    </div>
                    <ProgressBar className='bg-white  rounded-5   '>
                      <ProgressBar  min={0} max={50} now={15}  className='progress-bar rounded-5' />
                    </ProgressBar>
                  </div>
                  {/* 1 MS = 4.82 ETH */}
                  <h3 className='text-center fs-2 '>1 MS = 4.82 ETH</h3>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>

   </div>
  );
}

export default App;
/*
UNMATCHED TOKEN POTENTIAL

Token Exchange is Gateway to Token Universe

Token Exchange provides you with the gateway to the world of tokens, Offering easy access to a wide range of assets and liquidity options. With Token Exchange, you can effortlessly navigate the complex world of token trading.
*/