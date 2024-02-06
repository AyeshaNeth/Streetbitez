import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "./driverFeedback.css";

function generateStars(rating) {
  const stars = [];
  const maxRating = 5; // Maximum rating possible
  
  for (let i = 1; i <= maxRating; i++) {
    const starClassName = i <= rating ? "star filled" : "star empty";
    stars.push(<div key={i} className={starClassName}></div>);
  }
  
  return (
    <div className="star-rating">
      {stars}
    </div>
  );
}

function DriverFeedback() {
  return (
    <div class="container">
        <h1 className="feedback-heading">Customer Feedbacks</h1> {/* Added heading */}
        
          <div class="card">
            
            <div class="card__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <div class="card__details">
              {generateStars(4)} {/* Display 4 filled stars */}
                <p>
                  We had a great time collaboraring with the Filament team. They
                  have my high recommendation!
                </p>
                <h4>- Marnus Stephen</h4>
              </div>
            </div>
          </div>
          <div class="card">
            
            <div class="card__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <div class="card__details">
              {generateStars(4)} {/* Display 4 filled stars */}
                <p>
                  The team drastically improved our product's user experience &
                  increased our business outreach.
                </p>
                <h4>- Andrew Jettpace</h4>
              </div>
            </div>
          </div>
          <div class="card">
            
            <div class="card__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <div class="card__details">
              {generateStars(4)} {/* Display 4 filled stars */}
                <p>
                  I absolutely loved working with the Filament team. Complete
                  experts at what they do!
                </p>
                <h4>- Stacy Stone</h4>
              </div>
            </div>
          </div>
          <div class="card">

          <div class="card__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <div class="card__details">
              {generateStars(4)} {/* Display 4 filled stars */}
                <p>
                  I absolutely loved working with the Filament team. Complete
                  experts at what they do!
                </p>
                <h4>- Stacy Stone</h4>
              </div>
            </div>
          </div>
          <div class="card">
           
            <div class="card__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <div class="card__details">
              {generateStars(3)} {/* Display 4 filled stars */}
                <p>
                  We had a great time collaboraring with the Filament team. They
                  have my high recommendation!
                </p>
                <h4>- Marnus Stephen</h4>
              </div>
            </div>
          </div>
          <div class="card">
            
            <div class="card__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <div class="card__details">
              {generateStars(4)} {/* Display 4 filled stars */}
                <p>
                  We had a great time collaboraring with the Filament team. They
                  have my high recommendation!
                </p>
                <h4>- Marnus Stephen</h4>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <div class="card__details">
              {generateStars(5)} {/* Display 4 filled stars */}
                <p>
                  We had a great time collaboraring with the Filament team. They
                  have my high recommendation!
                </p>
                <h4>- Marnus Stephen</h4>
              </div>
            </div>
          </div>
          </div>
  );
}

export default DriverFeedback;
