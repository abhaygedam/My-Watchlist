import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import Tabs from "./Tabs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

const WatchList = () => {
	const [inputData, setInputData] = useState("");
	const [stocks, setStocks] = useState([]);
	const [addButt, setAddButt] = useState(false);
	const [tabs, setTabs] = useState(1);
	const [watchlist, setWatchlist] = useState([]);
	const [watchlist2, setWatchlist2] = useState([]);
	const searchBox = useRef();

	// Debounce function
	function debounce(fn, d) {
		let timer;

		return function () {
			clearTimeout(timer);
			timer = setTimeout(() => {
				getData.call();
			}, d);
		};
	}

	useEffect(() => {
		handleSearch();
	}, [inputData]);

	// Data fetch for Search functionality
	const getData = async () => {
		if (inputData != "") {
			var data = await axios
				.get(`http://localhost:5000/stocks/?q=${inputData}`)
				.then((res) => {
					setStocks(res.data);
				});
		}
	};

	const handleSearch = debounce(getData, 1000);

	// Add to watchlist 1 function
	const handleAdd = (e) => {
		console.log(e);
		for (var i = 0; i < watchlist.length; i++) {
			if (watchlist[i].id == e.id) {
				alert(`This Script is already added in the watchlist ${tabs}`);
				searchBox.current.value = "";
				return;
			}
		}

		toast.success("Added Sucessfully");
		setWatchlist([...watchlist, e]);
		searchBox.current.value = "";
	};

	// Remove from watchlist 1 function
	const handleRemove = (e) => {
		let arr = [];
		watchlist.map((k) => {
			if (k.id != e.id) {
				arr.push(k);
			}
		});
		toast.success("Removed Sucessfully");
		setWatchlist(arr);
	};

	// Add to watchlist 2 function
	const handleAdd2 = (e) => {
		for (var i = 0; i < watchlist2.length; i++) {
			if (watchlist2[i].id == e.id) {
				alert(`This Script is already added in the watchlist ${tabs}`);
				searchBox.current.value = "";
				return;
			}
		}
		toast.success("Added Sucessfully");
		setWatchlist2([...watchlist2, e]);
		searchBox.current.value = "";
	};

	// Remove from watchlist 2 function
	const handleRemove2 = (e) => {
		let arr = [];
		watchlist2.map((k) => {
			if (k.id != e.id) {
				arr.push(k);
			}
		});
		toast.success("Removed Sucessfully");
		setWatchlist2(arr);
	};

	// This function shows search result
	function show(e) {
		return (
			<div className="searchRow" key={e.id}>
				<div className="nameBox">
					<p
						className="name"
						style={{
							color:
								(((e.curr - e.prev) / e.prev) * 100).toFixed(2) < 0
									? "rgb(231,89,46)"
									: "rgb(41,197,193)",
							marginLeft: "10px",
							fontWeight: 500,
						}}
					>
						{e.name}
					</p>
					<p
						className="curr"
						style={{
							color:
								(((e.curr - e.prev) / e.prev) * 100).toFixed(2) < 0
									? "rgb(231,89,46)"
									: "rgb(41,197,193)",
							fontWeight: 500,
						}}
					>
						{e.curr}
					</p>
				</div>

				<div className="secRow">
					<div className="nse">
						<button
							style={{
								border: "0.5px solid rgb(236, 236, 236)",
								fontSize: "12px",
							}}
						>
							NSE
						</button>
					</div>

					<div className="secRow1">
						<button
							onClick={() => (tabs === 1 ? handleAdd(e) : handleAdd2(e))}
							className="addButt"
						>
							+
						</button>
						<div style={{ display: "flex", marginLeft: "20px" }}>
							<span
								onClick={() => console.log("hello")}
								style={{
									margin: "16px 5px 0px 0px",
									color:
										(((e.curr - e.prev) / e.prev) * 100).toFixed(2) < 0
											? "rgb(231,89,46)"
											: "rgb(41,197,193)",
								}}
							>
								{(((e.curr - e.prev) / e.prev) * 100).toFixed(2) < 0 ? (
									<>&#x25BD;</>
								) : (
									<>&#x25B3;</>
								)}
							</span>
							<p>{(((e.curr - e.prev) / e.prev) * 100).toFixed(2)}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			onClick={() => {
				setStocks([]);
			}}
		>
			<input
				ref={searchBox}
				type="text"
				placeholder="Enter Stock Name"
				className="inputBox"
				onChange={(e) => setInputData(e.target.value)}
			/>

			<div className={stocks.length != 0 && "searchBox"}>
				{stocks.map(show)}
			</div>

			<div
				style={{ visibility: stocks.length === 0 ? "visible" : "hidden" }}
				className="ownlist"
			>
				<div className="tabBox">
					<h4 style={{ width: "140px", fontSize: "18px" }}>Watchlists :-</h4>
					<div className="tabs">
						<button
							className="firstTab"
							style={{
								transform: tabs === 1 && "scale(1.1)",
								border: tabs === 1 && "2px solid rgb(69, 144, 243)",
							}}
							onClick={() => setTabs(1)}
						>
							1
						</button>
						<button
							onClick={() => setTabs(2)}
							style={{
								transform: tabs === 2 && "scale(1.1)",
								border: tabs === 2 && "2px solid rgb(69, 144, 243)",
							}}
						>
							2
						</button>
					</div>
				</div>

				<hr />

				{/* Two Watchlist Tabs */}
				{tabs === 1 ? (
					<Tabs watchlist={watchlist} handleRemove={handleRemove} />
				) : (
					<Tabs watchlist={watchlist2} handleRemove={handleRemove2} />
				)}
			</div>
			<ToastContainer />
		</div>
	);
};

export default WatchList;
