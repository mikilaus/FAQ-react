import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info, reRender }) => {
	const [showText, setShowText] = useState(false);

	const handleClick = () => {
		reRender();
		let newValue = !showText;
		setShowText(newValue);
	};

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button className="btn" onClick={() => handleClick()}>
					{showText ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{showText && <p>{info}</p>}
		</article>
	);
};

export default Question;
