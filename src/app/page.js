import React from 'react'
import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import Nav3 from './components/Nav3';
import Menubottom from './components/Menubottom';
import Menu from './components/Menu';
import Carosel from './components/Carosel';
import TrandingGift from './components/TrandingGift';
import Newarrival from './components/Newarrival';
import CelebrateMilestone from './components/CelebrateMilestone';
import Card from './components/Card';
import CustomerReview from './components/CustomerReview';
import Newsletter from './components/Newsletter';

const page = () => {
  return (
    <>
    <Nav1 />
    <Nav2 />
    <Nav3 />
    <Menubottom />
    <Menu />
    <Carosel />
    <TrandingGift />
    <Newarrival />
    <CelebrateMilestone />
    <Card />
    <CustomerReview />
    <Newsletter />

  </>
  )
}

export default page;