import React from "react";

export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			todos: [
				{ done: false, title: "Wake up", id: Math.random() * 10 },
				{
					done: false,
					title: "Have an existential breakdown",
					id: Math.random() * 10
				},
				{ done: false, title: "Eat breakfast", id: Math.random() * 10 },
				{ done: false, title: "Go to work", id: Math.random() * 10 }
			],
			taskInput: ""
		};
	}

	handleFormSubmit(e) {
		e.preventDefault();
		this.setState({
			todos: this.state.todos.concat([
				{
					title: this.state.taskInput,
					done: false,
					id: Math.random() * 10
				}
			])
		});
		return false;
	}

	destroyTask(taskId) {
		this.setState({
			todos: this.state.todos.filter(task => task.id != taskId)
		});
	}

	render() {
		var tasksToRender = this.state.todos.map(task => {
			return (
				<li key={task.id}>
					<div className="view">
						<label>{task.title}</label>
						<button
							className="destroy"
							onClick={() => this.destroyTask(task.id)}
						/>
					</div>
				</li>
			);
		});
		return (
			<section className="todoapp">
				<header className="header">
					<h1>todo list</h1>
					<form onSubmit={this.handleFormSubmit.bind(this)}>
						<input
							autoFocus={true}
							className="new-todo"
							placeholder="What's the next task?"
							value={this.state.taskInput}
							onChange={evt =>
								this.setState({ taskInput: evt.target.value })
							}
						/>
					</form>
				</header>
				<section className="main">
					<ul className="todo-list">{tasksToRender}</ul>
				</section>
				<footer className="footer">
					<span align="center" className="todo-count">
						<strong>
							{this.state.todos.filter(key => !key.done).length}
						</strong>{" "}
						items left
					</span>
				</footer>
			</section>
		);
	}
}
