import logo from "./logo.svg";
import "./App.css";
import WatchList from "./Component/Watchlist";

function App() {
	return (
		<div className="App">
			<div className="logoBox">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAADYCAMAAAA5zzTZAAAAY1BMVEX///8AcMAAFT4Aar6NsdoAZLzj7Pbp8Pjp6uwAACbm5+kAADKYmqUAADClqLGfvN+lweL09/vz8/WYuN0AXLmEq9gAAAAAABSQk58AYbsAbL4AACLS4PCUtt2foavP0dUAV7gL7hMcAAABdklEQVR4nO3aSU5DQRBEQcAYY2Y8YGa4/ymRWbOgE32lLOJdoDOkWvbRkSRJkiRJkiRJkqSJu19M2v3+jYvzsVaTSNeb+YRttnvow3Ko3eMk0tvZ8YTNTvfS5clQl1ekpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpL9q/TQb6jmQ7q6Hepnm1+vr7d1Qb0M38C1dvd8M9f4xiXS0xXxYeqCdkZIebKSk7b15pKTtvXmkpO29eaSk7b15pKTtvXmkpO29eaSk7b15pKTtvXmkpO29eaSk7b15pKTtvXmkpO29eaSk7b15pKTtvXmkpO29eaSk7b15pKTtvXmkpO29eaSk7b15pKTtvXmkpO29eaSk7b15pKTtvXmkpO29eaSk7b15pKTtvXmkpO29eaSk7b15pKTtvXmkpO29eaSk7b15pKTtvXmkpO29ef9I+jkfaLNt7/1DZ0Mt2nMlSZIkSZIkSZIk/dgXS2xa4A3SWeQAAAAASUVORK5CYII="></img>
				<h1>TRINKERR</h1>
			</div>
			<WatchList />
		</div>
	);
}

export default App;
