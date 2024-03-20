import { useState, useRef } from "react";

export default function RemoveRef() {
	const [show, setShow] = useState(true);
	const ref = useRef(null);

	return (
		<div>
			<h2>Remove Ref</h2>
			<button
				onClick={() => {
					setShow(!show);
				}}
			>
				Toggle with setState
			</button>
			<button
				onClick={() => {
					ref.current.remove();
				}}
			>
				Remove from the DOM
			</button>
			{show && <p ref={ref}>Hello world</p>}
		</div>
	);
}
