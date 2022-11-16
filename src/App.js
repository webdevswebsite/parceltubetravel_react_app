import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

// Home
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
// About
const About = React.lazy(() => import("./components/pages/About"));
// Blog
const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
const Bloggridleft = React.lazy(() => import("./components/pages/Bloggridleft"));
const Bloggridright = React.lazy(() => import("./components/pages/Bloggridright"));
const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));
const Blogdetailsleft = React.lazy(() => import("./components/pages/Blogdetailsleft"));
const Blogdetailsright = React.lazy(() => import("./components/pages/Blogdetailsright"));
// Hotels
const Hotelgrid = React.lazy(() => import("./components/pages/Hotelgrid"));
const Hotelgridleft = React.lazy(() => import("./components/pages/Hotelgridleft"));
const Hotelgridright = React.lazy(() => import("./components/pages/Hotelgridright"));
const Hoteldetails = React.lazy(() => import("./components/pages/Hoteldetails"));
// Flights
const Flightgrid = React.lazy(() => import("./components/pages/Flightgrid"));
const Flightgridleft = React.lazy(() => import("./components/pages/Flightgridleft"));
const Flightgridright = React.lazy(() => import("./components/pages/Flightgridright"));
const Flightdetails = React.lazy(() => import("./components/pages/Flightdetails"));
// Cars
const Cargrid = React.lazy(() => import("./components/pages/Cargrid"));
const Cargridleft = React.lazy(() => import("./components/pages/Cargridleft"));
const Cargridright = React.lazy(() => import("./components/pages/Cargridright"));
const Cardetails = React.lazy(() => import("./components/pages/Cardetails"));
// Cruise
const Cruisegrid = React.lazy(() => import("./components/pages/Cruisegrid"));
const Cruisegridleft = React.lazy(() => import("./components/pages/Cruisegridleft"));
const Cruisegridright = React.lazy(() => import("./components/pages/Cruisegridright"));
const Cruisedetails = React.lazy(() => import("./components/pages/Cruisedetails"));
// Contact
const Contact = React.lazy(() => import("./components/pages/Contact"));
// Faqs
const Faqs = React.lazy(() => import("./components/pages/Faqs"));
// Booking
const Booking = React.lazy(() => import("./components/pages/Booking"));
// Gallery
const Gallery = React.lazy(() => import("./components/pages/Gallery"));
// Additional
const Comingsoon = React.lazy(() => import("./components/pages/Comingsoon"));
const Errorpage = React.lazy(() => import("./components/pages/Errorpage"));


// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})

function App() {
  return (
    <Router basename={"/tm/react/toor/"}>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          {/* <Preloader /> */}
          <Switch>
            {/* Home */} 
            <Route exact path="/" component={Home} />
            <Route exact path="/home-v2" component={Hometwo} />
            {/* About */}
            <Route exact path="/about" component={About} />
            {/* Blog */}
            <Route exact path="/blog/cat/:catId" component={props => (<Bloggrid {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog/tag/:tagId" component={props => (<Bloggrid {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog/author/:authorId" component={props => (<Bloggrid {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog/search/:query" component={props => (<Bloggrid {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog-grid" component={Bloggrid} />
            <Route exact path="/blog-grid-left" component={Bloggridleft} />
            <Route exact path="/blog-grid-right" component={Bloggridright} />
            <Route exact path="/blog-details/:id" component={props => (<Blogdetails {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog-details-left/:id" component={props => (<Blogdetailsleft {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog-details-right/:id" component={props => (<Blogdetailsright {...props} key={window.location.pathname} />)} />
            {/* Hotels */}
            <Route exact path="/hotel/:minPrice/:maxPrice" component={props => (<Hotelgrid {...props} key={window.location.pathname} />)} />
            <Route exact path="/hotel-grid" component={Hotelgrid} />
            <Route exact path="/hotel-grid-left" component={Hotelgridleft} />
            <Route exact path="/hotel-grid-right" component={Hotelgridright} />
            <Route exact path="/hotel-details/:id" component={props => (<Hoteldetails {...props} key={window.location.pathname} />)} />
            {/* Flights */}
            <Route exact path="/flight/:minPrice/:maxPrice" component={props => (<Flightgrid {...props} key={window.location.pathname} />)} />
            <Route exact path="/flight-grid" component={Flightgrid} />
            <Route exact path="/flight-grid-left" component={Flightgridleft} />
            <Route exact path="/flight-grid-right" component={Flightgridright} />
            <Route exact path="/flight-details/:id" component={props => (<Flightdetails {...props} key={window.location.pathname} />)} />
            {/* Cars */}
            <Route exact path="/car/:minPrice/:maxPrice" component={props => (<Cargrid {...props} key={window.location.pathname} />)} />
            <Route exact path="/car-grid" component={Cargrid} />
            <Route exact path="/car-grid-left" component={Cargridleft} />
            <Route exact path="/car-grid-right" component={Cargridright} />
            <Route exact path="/car-details/:id" component={props => (<Cardetails {...props} key={window.location.pathname} />)} />
            {/* Cruise */}
            <Route exact path="/cruiseprice/:minPrice/:maxPrice" component={props => (<Cruisegrid {...props} key={window.location.pathname} />)} />
            <Route exact path="/cruisenight/:minNight/:maxNight" component={props => (<Cruisegrid {...props} key={window.location.pathname} />)} />
            <Route exact path="/cruise-grid" component={Cruisegrid} />
            <Route exact path="/cruise-grid-left" component={Cruisegridleft} />
            <Route exact path="/cruise-grid-right" component={Cruisegridright} />
            <Route exact path="/cruise-details/:id" component={props => (<Cruisedetails {...props} key={window.location.pathname} />)} />
            {/* Contact */}
            <Route exact path="/contact" component={Contact} />
            {/* Faqs */}
            <Route exact path="/faqs" component={Faqs} />
            {/* Booking */}
            <Route exact path="/booking" component={Booking} />
            {/* Gallery */}
            <Route exact path="/gallery" component={Gallery} />
            {/* Additional */}
            <Route exact path="/coming-soon" component={Comingsoon} />
            <Route exact path="/error-page" component={Errorpage} />
            <Route exact component={Errorpage} />
          </Switch>
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
