import React, { useState } from "react";
import data from "./data";
import Question from "./Question";

function App() {
	const [questions, setQuestions] = useState(data);

	const reRender = () => {
		setQuestions(data);
		console.log("re rendered");
	};

	return (
		<main>
			<div className="container">
				<h3>Questions and answers about login</h3>
				<section className="info">
					{questions.map((question) => {
						return (
							<Question reRender={reRender} key={question.id} {...question} />
						);
					})}
				</section>
			</div>
		</main>
	);
}

export default App;
