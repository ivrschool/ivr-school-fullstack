import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import AllCoursePage from '../pages/AllCoursePage';
import AboutPage from '../pages/AboutPage';
import AllServicePage from '../pages/AllServicePage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
class AppRouter extends Component {
  render() {
    return (
        <Fragment>
            <Routes>
                <Route exact path="/" element={<HomePage/>}></Route>
                <Route exact path="/service" element={<AllServicePage/>} />
                <Route exact path="/course" element={<AllCoursePage/>} />
                <Route exact path="/porfolio" element={<PortfolioPage/>} />
                <Route exact path="/about" element={<AboutPage/>} />
                <Route exact path="/contact" element={<ContactPage />} />
                <Route exact path="/refund" element={<RefundPage />} />
                <Route exact path="/terms" element={<TermsPage />} />
                <Route exact path="/privacy" element={<PrivacyPage />} />
                <Route exact path="/projectdetails" element={<ProjectDetailPage />} />
                <Route exact path="/coursedetails" element={<CourseDetailsPage/>} />
          
            </Routes>
            
      </Fragment>
    )
  }
}

export default AppRouter