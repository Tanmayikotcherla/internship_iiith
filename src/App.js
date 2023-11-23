import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/searchbar';
import Video from './components/video';
import Card from './components/Card'; 
import PieChart from './components/PieChart';
import PopularRecipesTable from './components/PopularRecipesTable';
import RecipeForm from './components/RecipeForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const handleRecipeSubmit = (newRecipe) => {
    // Handle the submission of the recipe form, e.g., update the state or make an API call
    console.log("Recipe submitted:", newRecipe);
    // Add your logic here to update state or make an API call
  };

  // Example data for a recipe (replace this with your actual data)
  const recipes = [
    {
      title: 'BURGER.',
      image: '/images/burger1.jpeg',
      ingredients: ['Ground Beef Patty', 'Bun', 'Condiments'],
      instructions: 'Rs-120',
    },
    {
      title: 'CHICKEN.',
      image: 'images/chicken.jpeg',
      ingredients: ['chicken', 'Masala', 'Curd'],
      instructions: 'Rs-70',
    },
    {
      title: ' VEG-MANCHURIAN',
      image: 'images/manchurian.jpeg',
      ingredients: ['Cabbage', 'Potato', 'chilli'],
      instructions: 'Rs-145.',
    },
    {
      title: 'BIRYANI',
      image: 'images/biryani.jpeg',
      ingredients: ['Rice', 'Chicken', 'Masala'],
      instructions: 'Rs-250..',
    },
    {
      title: 'NOODLES',
      image: 'images/noodles.jpeg',
      ingredients: ['Maidha', 'Chilli', 'pepper'],
      instructions: 'Rs-76...',
    },
    {
      title: 'PULIHARA',
      image: 'images/pulihora.jpeg',
      ingredients: ['Rice', 'Tamrind', 'Turmeric'],
      instructions: 'Rs-70..',
    },
    {
      title: 'BREAD-OMLET',
      image: 'images/breadomlet.jpeg',
      ingredients: ['Bread', 'Egg', 'Cheese'],
      instructions: 'Rs-45...',
    },
    {
      title: 'FRENCH-FRIES',
      image: 'images/frenchfry.jpeg',
      ingredients: ['Potato', 'Oil', 'Pepper'],
      instructions: 'Rs-67...',
    },
   
  ];
  
  const pieChartData1 = {
    labels: ["1star", "2star", "3star", "4star", "5star"],
    datasets: [
      {
        data: [30, 50, 100, 150, 200], // Add more data points for each label
        backgroundColor: [
          'rgb(255,99,132)',
          'rgb(54,162,235)',
          'rgb(255,205,86)',
          'rgb(75,192,192)', // Additional color
          'rgb(153,102,255)', // Additional color
        ],
      },
    ],
  };
  

  const pieChartData2 = {
    labels: ["chicken", "mutton", "fish", "prawns", "Dum biryani"],
    datasets: [
      {
        data: [300, 50, 100, 45, 89],
        backgroundColor: [
          'rgb(255,99,132)',
          'rgb(54,162,235)',
          'rgb(255,205,86)',
          'rgb(75,192,192)', // Additional color
          'rgb(153,102,255)', // Additional color
        ],
      },
    ],
  };
  

  const pieChartData3 = {
    labels: ["potato", "Brinjal", "Manchuria","Dal"],
    datasets: [
      {
        data: [ 10,35,56, 100],
        backgroundColor: ['rgb(255,99,132)', 'rgb(54,162,235)', 'rgb(255,205,86)','rgb(153,102,255)', ],
      }
    ]
    // ... data for the third pie chart
  };

  const pieChartData4 = {
    labels: ["Butterscoth", "Blackcurrent", "chocolate","Strawberry"],
    datasets: [
      {
        data: [300, 50, 100,25],
        backgroundColor: ['rgb(255,99,132)', 'rgb(54,162,235)', 'rgb(255,205,86)', 'rgb(75,192,192)'],
      }
    ]
    // ... data for the fourth pie chart
  };
  const pieChartData5 = {
    labels: ["Idly", "Dosa", "puri","vada"],
    datasets: [
      {
        data: [60, 90, 100,45],
        backgroundColor: ['rgb(255,99,132)', 'rgb(54,162,235)', 'rgb(255,205,86)','rgb(75,192,192)'],
      }
    ]
    // ... data for the fourth pie chart
  };
  

  return (
    <React.Fragment>
      <Navbar />
      <SearchBar />
      <Video />
      <div className="app-container">
        <div className="card-container">
          {/* Render the Card component for each recipe in the array */}
          {recipes.map((recipe, index) => (
            <Card key={index} recipe={recipe} />
          ))}
        </div>
      </div>
      {/* Responsive layout for pie charts */}
      <div className="responsive-pie-charts">
        <div>
          <h2>Deliciousness Spectrum</h2>
          <PieChart data={pieChartData1} />
        </div>
        <div>
          <h2>Carnivore's Delight</h2>
          <PieChart data={pieChartData2} />
        </div>
        <div>
          <h2>Vegetarian Bliss</h2>
          <PieChart data={pieChartData3} />
        </div>
        <div>
          <h2>Sweet Treat Extravaganz</h2>
          <PieChart data={pieChartData4} />
        </div>
        <div>
          <h2>  Morning Delights</h2>
          <PieChart data={pieChartData5} />
        </div>
      </div>
      {/* Add the PopularRecipesTable component */}
      <PopularRecipesTable />
      {/* Recipe form */}
      <RecipeForm onRecipeSubmit={handleRecipeSubmit} />
      {/* Footer */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
