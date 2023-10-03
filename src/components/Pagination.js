import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [cars, setCars] = useState([]); // State to store car data
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query
  const carsPerPage = 6; // Number of cars to display per page
  const cardsPerRow = 3; // Number of cards to display in a row

  // Mock data (replace with actual data fetching logic)
  const mockData = [
    { id: 1, name: 'Mustang', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car1.jpg' },
    { id: 2, name: 'Ferrari', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car2.jpg' },
    { id: 3, name: 'Rolls Royce', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car3.jpg' },
    { id: 4, name: 'Tesla', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car4.jpg' },
    { id: 5, name: 'Porsche', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car5.jpg' },
    { id: 6, name: 'Maruti Suzuki', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car6.jpg' },
    { id: 7, name: 'Car 7', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car1.jpg' },
    { id: 8, name: 'Car 8', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car2.jpg' },
    { id: 9, name: 'Car 9', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car3.jpg' },
    { id: 10, name: 'Car 10', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car4.jpg' },
    { id: 11, name: 'Car 11', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl:  'images/Car5.jpg' },
    { id: 12, name: 'Car 12', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car6.jpg' },
    { id: 13, name: 'Car 13', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car1.jpg' },
    { id: 14, name: 'Bugati Galado', seater: ' 4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car2.jpg' },
    { id: 15, name: 'Car 15', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl:'images/Car3.jpg' },
    { id: 16, name: 'Car 16', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car4.jpg'  },
    { id: 17, name: 'Car 17', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl:'images/Car5.jpg'  },
    { id: 18, name: 'Car 18', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl:  'images/Car6.jpg' },
    { id: 19, name: 'Car 19', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car1.jpg' },
    { id: 10, name: 'Car 20', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car2.jpg'},
    { id: 1, name: 'Car 21', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car3.jpg'},
    { id: 2, name: 'Car 22', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car4.jpg'  },
    { id: 3, name: 'Car 23', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car5.jpg' },
    { id: 4, name: 'Car 24', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl:  'images/Car6.jpg'  },
    { id: 5, name: 'Car 25', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car1.jpg' },
    { id: 6, name: 'Car 26', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car2.jpg' },
    { id: 7, name: 'Car 27', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl:'images/Car3.jpg' },
    { id: 8, name: 'Car 28', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car4.jpg'  },
    { id: 9, name: 'Car 9', seater: ' 4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car5.jpg' },
    { id: 10, name: 'Car 30', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car6.jpg'  },
    { id: 1, name: 'Car 31', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car1.jpg' },
    { id: 2, name: 'Car 32', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car2.jpg' },
    { id: 3, name: 'Car 33', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl:'images/Car3.jpg' },
    { id: 4, name: 'Car 34', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car4.jpg'  },
    { id: 5, name: 'Car 35', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl:'images/Car5.jpg' },
    { id: 6, name: 'Car 36', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl:  'images/Car6.jpg'  },
    { id: 7, name: 'Car 37', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car1.jpg' },
    { id: 8, name: 'Car 38', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car2.jpg' },
    { id: 9, name: 'Car 39', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car3.jpg' },
    { id: 10, name: 'Car 40', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car4.jpg'  },
    { id: 1, name: 'Car 41', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car5.jpg'  },
    { id: 2, name: 'Car 42', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl:  'images/Car6.jpg'  },
    { id: 3, name: 'Car 43', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car1.jpg' },
    { id: 4, name: 'Car 44', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car2.jpg' },
    { id: 5, name: 'Car 45', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car3.jpg' },
    { id: 6, name: 'Car 46', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car4.jpg' },
    { id: 7, name: 'Car 47', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car5.jpg'  },
    { id: 8, name: 'Car 48', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl:  'images/Car6.jpg' },
    { id: 9, name: 'Car 49', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car1.jpg' },
    { id: 10, name: 'Car 50', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car2.jpg' },
    { id: 1, name: 'Car 51', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car3.jpg' },
    { id: 2, name: 'Car 52', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car4.jpg' },
    { id: 3, name: 'Car 53', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car5.jpg'  },
    { id: 4, name: 'Car 54', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl:  'images/Car6.jpg'  },
    { id: 5, name: 'Car 55', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car1.jpg' },
    { id: 6, name: 'Car 56', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car2.jpg' },
    { id: 7, name: 'Car 57', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car3.jpg' },
    { id: 8, name: 'Car 58', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car4.jpg' },
    { id: 9, name: 'Car 59', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl: 'images/Car5.jpg'  },
    { id: 10, name: 'Car 60', seater: '  4', price : "460",fuel:"Gasoline" , Milage:"6.1km/1-litre" , type:"Automatic" ,  imageUrl:  'images/Car6.jpg'  },
    

    // Add more cars here
  ];

  useEffect(() => {
    // In a real application, you would fetch data from an API or another source here.
    // For this example, we're using mock data.
    setCars(mockData);
  }, []);

  
  // Calculate the range of cars to display on the current page
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  // Calculate the number of rows
  const numRows = Math.ceil(currentCars.length / cardsPerRow);

  
  // Filter Data Based on Search Query
  const numberOfPages = Math.ceil(filteredCars.length / carsPerPage);
  // Handle page navigation
  const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
  };
  // if(currentPage > numberOfPages){
  //   paginate(1) ;   
  // }

  const onChange = (e)=>{
    setSearchQuery(e.target.value)
    paginate(1) ;
  }

  return (
    <div className="App">
      <header>
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onChange(e)  }
        />
      </header>
      <main>
        {/* Display cars */}
        <div className="car-list">
          {Array.from({ length: numRows }).map((_, rowIndex) => (
            <div key={rowIndex} className="card-row">
              {currentCars
                .slice(
                  rowIndex * cardsPerRow,
                  rowIndex * cardsPerRow + cardsPerRow
                )
                .map((car) => (
                  <div key={car.id} className="car-card">
                    {/* Image on top */}
                    <div className="image-container">
                      <img src={car.imageUrl} alt={car.name} />
                    </div>
                    {/* Render car information */}
                    <div className="car-name">
                    <h2>{car.name}</h2>
                    <div className="year">2020</div>
                    </div>
                    <div className="details">
                      <div className="top">
                    <p> {car.seater} People</p>
                    <p> {car.fuel}</p>

                      </div>
                      <div className="bottom">
                      <p>{car.Milage}</p>
                      <p>{car.type}</p>

                      </div>

                      <div className="line"></div>
                      <div className="price">
                        <p><span className='ammount'>${car.price}</span>/month</p>
                        <div className="rent">
                          <div className="heart">
                            💙
                          </div>
                          <div className="rent-now">Rent Now</div>
                        </div>
                      </div>
                    </div>
                    {/* Add other car details here */}
                  </div>
                ))}
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="page-numbers">
        <div className="page-out-of">{currentPage} of {numberOfPages}</div>
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: Math.min(10, numberOfPages) }).map(
            (item, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            )
          )}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredCars.length / carsPerPage)}
          >
            Next
          </button>
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;