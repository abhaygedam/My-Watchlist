import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import "./style.css";

const Tabs = ({ watchlist, handleRemove }) => {
	return (
		<>
			{watchlist.length !== 0 ? (
				watchlist.map((e) => (
					<div key={e.id} className="searchRow" style={{ marginLeft: "0px" }}>
						<div className="nameBox">
							<p
								className="name"
								style={{
									color:
										(((e.curr - e.prev) / e.prev) * 100).toFixed(2) < 0
											? "rgb(231,89,46)"
											: "rgb(41,197,193)",
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
								<button className="addButt" onClick={() => handleRemove(e)}>
									{<DeleteIcon style={{ color: "rgb(231,89,46)" }} />}
								</button>
								<div style={{ display: "flex", marginLeft: "20px" }}>
									<span
										style={{
											margin: "16px 5px 0px 0px",
											color:
												(((e.curr - e.prev) / e.prev) * 100).toFixed(2) < 0
													? "rgb(231,89,46)"
													: "rgb(41,197,193)",
											fontWeight: 500,
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
				))
			) : (
				<>
					<div>
						<h4 style={{ marginTop: "140px" }}>Add Scripts </h4>
						<p>
							Type scripts name into "Search Bar" and "Add into the watchlist"
						</p>
					</div>
				</>
			)}
		</>
	);
};

export default Tabs;
