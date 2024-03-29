import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Store } from '.'

// styles

const MainWrap = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 98;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
`;

const Cover = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${(props) => props.theme.backgroundColor};
    width: 100vw;
    height: 65vh;
    margin-bottom: 30px;

    h1{
    font-size: 5vmin;
    color: ${(props) => props.theme.altTextColor};
    }

    img{
        margin-top: 10px;
        min-width: 65%;
        width: auto;
        height: 80%;
        z-index: 95;
    }

  @media only screen and (max-width: 767px){
      height: 40vh;
      margin-bottom: 0;
      img{
          height: 210px;
          width: 375px;
      }
    }
`;

const StyledLink = styled.a`
    background-color: ${(props) => props.theme.altAccentColor};
    background: linear-gradient(to right,  ${(props) => props.theme.acOverlayDark} 50%, ${(props) => props.theme.altAccentColor} 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all .2s ease-out;
    color: white;
    text-decoration: none;
    white-space: nowrap;
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;

h2{
    font-size: 2vmin;
    font-weight: bold;

}

&:focus, &:active, &:hover{
  text-decoration: none;
}

&:hover{
    background-position: left bottom;
}


@media only screen and (max-width: 767px){
        width: 100%;
        top: 80%;
        h2{
            font-size: 5vmin;
        }
    }
`;

const Contact = styled.div`
    color: white;
    text-align: center;
    background-color: ${(props) => props.theme.altAccentColor};
    border-radius: 0px;
    width: 100%;
    flex: 1;
    padding: 0px 10px 10px 10px;

    h1{
        font-size: 3vmin;
        width: 100%;
        margin-bottom: 10px;
        text-align: center;
    }

    a{
        color: white;
        font-size: 2vmin;
        text-align: center;
        width: 100%;
    }

    @media only screen and (max-width: 767px){
        a{
            font-size: 4vmin;
        }
        h1{
            font-size: 6vmin;
            width: 100%;
            margin: 5px;
     }
    }
`;

const Purpose = styled.div`
    color: black;
    text-align: center;
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 0px;
    margin-bottom: 20px;
    width: 100%;
    flex: 1;
    padding-top: 10px;

    p{
        font-size: 2vmin;
        margin: 0 80px 0 80px;
    }

    h1{
        font-size: 3vmin;
        width: 100%;
        margin: 10px;
     }

    @media only screen and (max-width: 767px){
        p{
            font-size: 4vmin;
            margin: 0 30px 0 30px;
        }
        h1{
            font-size: 6vmin;
            width: 100%;
            margin: 5px;
     }
    }
`;
const About = styled.div`
    color: white;
    text-align: center;
    background-color: ${(props) => props.theme.altAccentColor};
    border-radius: 0px;
    width: 100%;
    flex: 1;
    padding: 20px 0px 30px 0px;

    h1{
            font-size: 4vmin;
            width: 100%;
            margin: 10px;
        }
        p{
            font-size: 2vmin;
            margin: 0 20px 0 20px;
        }


    @media only screen and (max-width: 767px){
        h1{
            font-size: 6vmin;
            margin: 5px;
        }
        p{
            font-size: 4vmin;
            margin: 0 10px 0 10px;
        }
    }

`;

const CBD = styled.div`
    color: black;
    text-align: left;
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 0px;
    width: 80%;
    flex: 1;
    padding: 10px 0px 20px 0px;

h1{
    text-align: center;
    font-size: 3vmin;
    width: 100%;
    margin: 10px;
}

p{
    font-size: 2vmin;
    margin: 0 30px 0 30px;
}

@media only screen and (max-width: 767px){
        width: 100%;
        p{
            font-size: 4vmin;
            margin: 0 30px 0 30px;
        }
        h1{
            font-size: 6vmin;
            width: 100%;
            margin: 5px;
     }
    }
`;

//JSX

function Homepage(props) {
    const storeRef = useRef(null);

    const scrollToStore = () => {
        storeRef.current.scrollIntoView({behavior: 'smooth'})
    }

  return (
    <MainWrap>
        <Cover>
            <h1>JBelly CBD Store</h1>
            <StyledLink onClick={scrollToStore}><h2>THC Free and Pure CBD Products</h2></StyledLink>
            <img src="https://i.imgur.com/UnlJpWC.png" alt="COVER IMAGE UNABLE TO LOAD, PLEASE REFRESH"></img>
        </Cover>
        <div ref={storeRef}><Store></Store></div>
        <Purpose>
            <h1>JBellyBurn is Proud to Partner with On Duty CBD</h1>
            <p>
            Janelle is proud to provide her community access to the highest quality CBD products available. From dancers, performers, and athletes, to arthritis sufferers, people around the world are enjoying the benefits of CBD for countless afflictions. 
            Products containing CBD have been shown to reduce inflammation, assist with pain management and relief, and even reduce insomnia.<br></br><br></br>
            I exclusively promote ON DUTY CBD products because I personally use it everyday.  On Duty CBD is my #1 go to for sore muscles, calming stage jitters and helping me get a good nights sleeps.
              My family and friend use ON Duty CBD and we trust their processes and feel the benefits everyday. On Duty is a Veteran farmed, Veteran operated business on a mission to 
              provide you with sustainably farmed health and wellness products. I am proud to bring you trusted organic products that are distilled with American values from the farm to your door.<br></br><br></br>
              I hope you feel the benefits of the ON DUTY CBD products and hope you use them in good health.
            </p>
        </Purpose>
        <About>
            <h1>About On Duty CBD</h1>
            <p>
                ON Duty CBD Products originate from small farms operated by American Veterans who raise their crops like they served: with HONOR and INTEGRITY. 
                JBelly is proud to partner with ON Duty CBD to bring Veteran Farmed CBD Products to our Brothers and their families. 
                On Duty products follow an organic process that can be tracked from the farm your door– this means zero pesticides, zero chemicals, and zero heavy metals. 
                Each On Duty product is labeled with a QR code providing you 24/7 access to a multi-page 3rd party lab report. Our products, like our Veteran Farmers, are always On Duty!
            </p>
        </About>
        <CBD>
            <h1>About CBD</h1>
            <p>
                Is CBD Legal? Yes, the United States Farm Bill of 2018 classified plants containing less than 0.3% THC as industrial hemp, making CBD legal in all 50 states. 
                At on Duty, our CBD products are produced under a license from the Kentucky Department of Agriculture’s Industrial Hemp Research Program and can be shipped directly to your door. <br></br><br></br>
                What is the difference between Pure and THC Free CBD Products? Our Pure (full spectrum) CBD oil contains a full range of beneficial plant extracts — including a very small percentage 
                {`(<0.3%)`} of THC — which work together to produce lasting effects when interacting with the endocannabinoid system. 
                Though On Duty CBD products are produced under strict quality protocols and third party testing, we are proud to offer a ZERO THC blend to those who may have extra sensitivities 
                to THC or are simply looking for a taste-neutral experience. <br></br><br></br>
                What is the suggested usage for CBD Oil and/or other products? We recommend a "start low and go slow" approach for both humans and pets. 
                Below are our recommended usage instructions for our most popular products.<br></br><br></br>
                Oils - Start with 1/2 dropper of oil under the tongue once in the morning and once in the evening for adults. For best results, hold the oil under the tongue for 30 seconds before swallowing. Increase to 1 full dropper, as needed. <br></br>
                Lotions - Apply a nickel-sized amount to the area of interest. Use liberally as needed.<br></br>
                Rollers - Apply a small amount (1-2 swipes) directly to area of interest, as needed.<br></br>
                Pets - Administer 1/4 dropper of oil (0.25 mL or about 5 drops) per 10 lbs of pet weight once per day.
            </p>
        </CBD>
        <Contact>
            <h1>Contact Us</h1>
            <a href="mailto:info@jbellycbd.com">info@jbellycbd.com</a>
        </Contact>
    </MainWrap>

    );
  }

export default withRouter(Homepage);